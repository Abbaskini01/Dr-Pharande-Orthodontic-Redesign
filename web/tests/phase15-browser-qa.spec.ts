import { expect, test, type Page } from "@playwright/test";

const invalidRoute = "/phase15-route-does-not-exist";

const routes = [
  ["/", "Creating Healthy & Beautiful Smiles"],
  ["/clinic", "Dr. Pharande's Orthodontic & Dental Clinic"],
  ["/treatments", "Comprehensive Orthodontic & Dental Solutions"],
  ["/treatments/orthodontic-braces-clear-aligners", "Orthodontic Braces & Clear Aligners"],
  ["/treatments/painless-root-canal-treatment", "Painless Root Canal Treatment"],
  ["/treatments/childrens-dentistry", "Children's Dentistry"],
  ["/treatments/dental-implants", "Dental Implants"],
  ["/treatments/laser-dentistry", "Laser Dentistry"],
  ["/transformations", "Smile Transformations & Patient Experiences"],
  ["/contact", "Contact Dr. Pharande Clinic"],
] as const;

type Diagnostics = {
  consoleErrors: string[];
  failedRequests: string[];
  pageErrors: string[];
  unexpectedResponses: string[];
};

const diagnosticsByPage = new WeakMap<Page, Diagnostics>();

function isSameOrigin(url: string) {
  return new URL(url).origin === "http://localhost:3000";
}

function installDiagnostics(page: Page, allowsIntentional404: boolean) {
  const diagnostics: Diagnostics = {
    consoleErrors: [],
    failedRequests: [],
    pageErrors: [],
    unexpectedResponses: [],
  };

  diagnosticsByPage.set(page, diagnostics);

  page.on("pageerror", (error) => {
    diagnostics.pageErrors.push(error.message);
  });

  page.on("console", (message) => {
    const locationUrl = message.location().url;
    const isIntentional404Message =
      allowsIntentional404 &&
      message.text() === "Failed to load resource: the server responded with a status of 404 (Not Found)" &&
      locationUrl.length > 0 &&
      new URL(locationUrl).pathname === invalidRoute;

    if (message.type() === "error" && !isIntentional404Message) {
      diagnostics.consoleErrors.push(message.text());
    }
  });

  page.on("requestfailed", (request) => {
    if (isSameOrigin(request.url())) {
      diagnostics.failedRequests.push(
        `${request.method()} ${new URL(request.url()).pathname}: ${request.failure()?.errorText ?? "failed"}`,
      );
    }
  });

  page.on("response", (response) => {
    const status = response.status();
    const pathname = new URL(response.url()).pathname;

    if (
      isSameOrigin(response.url()) &&
      status >= 400 &&
      !(status === 404 && pathname === invalidRoute)
    ) {
      diagnostics.unexpectedResponses.push(`${status} ${pathname}`);
    }
  });
}

function assertNoDiagnostics(page: Page) {
  const diagnostics = diagnosticsByPage.get(page);

  expect(diagnostics, "Diagnostics were not installed for this page").toBeDefined();

  const failures = [
    ...diagnostics!.pageErrors.map((message) => `pageerror: ${message}`),
    ...diagnostics!.consoleErrors.map((message) => `console.error: ${message}`),
    ...diagnostics!.failedRequests.map((message) => `failed request: ${message}`),
    ...diagnostics!.unexpectedResponses.map((message) => `unexpected response: ${message}`),
  ];

  expect(failures, `Unexpected application diagnostics:\n${failures.join("\n")}`).toEqual([]);
}

async function expectNoHorizontalOverflow(page: Page) {
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
    .toBe(true);
}

test.beforeEach(async ({ page }, testInfo) => {
  installDiagnostics(page, testInfo.title === "invalid routes show branded 404 recovery");
});

test.afterEach(async ({ page }) => {
  assertNoDiagnostics(page);
});

test.describe("route smoke", () => {
  for (const [path, heading] of routes) {
    test(`${path} loads with its main heading`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response).not.toBeNull();
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("main")).toBeVisible();

      const pageHeadings = page.locator("h1:visible");
      await expect(pageHeadings).toHaveCount(1);
      await expect(pageHeadings).toContainText(heading);
    });
  }
});

test.describe("desktop navigation", () => {
  test.use({ viewport: { width: 1440, height: 1000 } });

  // This suite exercises the >= lg desktop header pattern, which mobile device
  // projects intentionally replace with the drawer navigation covered by the
  // "mobile navigation" suite. Emulated iOS WebKit also cannot complete this
  // flow within the default 30s budget (measured >52s), so keep it scoped to
  // the desktop projects.
  test.skip(({ isMobile }) => isMobile === true, "Desktop navigation is covered by the desktop projects; mobile projects cover the drawer navigation.");

  test("primary navigation reaches every main route", async ({ page }) => {
    await page.goto("/");
    await expectNoHorizontalOverflow(page);

    const navigation = page.getByRole("navigation", { name: "Primary Navigation" });
    const destinations = [
      ["The Clinic", "/clinic"],
      ["Treatments", "/treatments"],
      ["Transformations", "/transformations"],
      ["Contact", "/contact"],
      ["Home", "/"],
    ] as const;

    for (const [label, path] of destinations) {
      await navigation.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(path === "/" ? "/$" : `${path}$`));
    }
  });
});

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("menu is usable, dismissible, active, and does not overflow", async ({ page }) => {
    await page.goto("/treatments");

    const menuTrigger = page.getByRole("button", { name: "Open navigation menu" });
    await menuTrigger.click();

    const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await expect(drawer).toBeVisible();
    await expect(drawer.getByRole("link", { name: "Treatments", exact: true })).toHaveAttribute(
      "aria-current",
      "page",
    );

    await page.keyboard.press("Escape");
    await expect(drawer).toBeHidden();

    await menuTrigger.click();
    await drawer.getByRole("link", { name: "Contact", exact: true }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(drawer).toBeHidden();
    await expectNoHorizontalOverflow(page);
  });
});

test.describe("booking dialog", () => {
  test.use({ viewport: { width: 1440, height: 1000 } });

  // Emulated mobile WebKit needs ~49s for this open/focus/close flow (dev-mode
  // hydration plus slower actionability polling), which exceeds the default
  // 30s test budget. Give this dialog suite a dedicated budget; every dialog
  // assertion below is unchanged.
  test.setTimeout(120_000);

  test("opens with labelled choices and closes by button or Escape", async ({ page }, testInfo) => {
    await page.goto("/");

    const trigger = page
      .getByRole("navigation", { name: "Primary Navigation" })
      .getByRole("button", { name: "Book Consultation", exact: true });
    const dialog = page.getByRole("dialog", { name: "Book Consultation" });
    const closeButton = page.getByRole("button", { name: "Close booking selection" });

    if (testInfo.project.name === "webkit") {
      await trigger.focus();
      await trigger.press("Enter");
    } else {
      await trigger.click();
    }
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute("aria-modal", "true");
    await expect(dialog.getByRole("button", { name: "Book Online" })).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Chat with Concierge" })).toBeVisible();
    await expect(closeButton).toBeFocused();

    await closeButton.click();
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();

    await trigger.press("Enter");
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

test("important CTAs and contact links retain their intended destinations", async ({ page }, testInfo) => {
  test.setTimeout(60_000);

  await page.goto("/");

  const heroTreatmentLink = page
    .locator("#home")
    .getByRole("link", { name: "Explore Treatments", exact: true });
  await expect(heroTreatmentLink).toHaveAttribute("href", "/treatments");
  await heroTreatmentLink.click();
  await expect(page).toHaveURL(/\/treatments$/);

  await page.goto("/");
  const consultationLink = page
    .locator("#services")
    .getByRole("link", { name: "Speak to Our Team", exact: true });
  await expect(consultationLink).toHaveAttribute("href", "#consultation");
  if (testInfo.project.name === "webkit") {
    await consultationLink.focus();
    await consultationLink.press("Enter");
  } else {
    await consultationLink.click();
  }
  await expect(page).toHaveURL(/#consultation$/);
  await expect(page.getByRole("heading", { name: "Ready to Begin Your Smile Transformation?" })).toBeInViewport();

  await page.goto("/contact");
  const phoneLinks = page.locator('main a[href^="tel:"]');
  await expect(phoneLinks).toHaveCount(2);
  await expect(phoneLinks.nth(0)).toHaveAttribute("href", "tel:+919561035555");
  await expect(phoneLinks.nth(1)).toHaveAttribute("href", "tel:+918983002935");
  await expect(page.locator('main a[href="mailto:drpharande.clinic@gmail.com"]')).toBeVisible();
});

test("invalid routes show branded 404 recovery", async ({ page }) => {
  const response = await page.goto(invalidRoute);

  expect(response).not.toBeNull();
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "The Page You Are Looking For Does Not Exist",
  );
  await expect(page.getByRole("link", { name: "Return to Homepage" })).toHaveAttribute("href", "/");
});

test.describe("responsive smoke", () => {
  for (const width of [390, 320]) {
    test(`${width}px homepage keeps navigation and primary controls usable`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto("/");

      await expect(page.locator("main")).toBeVisible();
      await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeVisible();
      await expect(page.getByRole("button", { name: "Book Consultation", exact: true }).first()).toBeVisible();

      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
      await page.getByRole("button", { name: "Close navigation menu" }).click();
      await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeHidden();
      await expectNoHorizontalOverflow(page);
    });
  }
});

test("accessibility smoke exposes the core document landmarks and skip target", async ({ page }, testInfo) => {
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("main#main-content")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);

  // The desktop "Primary Navigation" landmark is intentionally hidden below
  // the lg breakpoint, where the drawer navigation replaces it. Require the
  // navigation pattern that matches the current viewport instead of demanding
  // the hidden desktop landmark on mobile.
  if (testInfo.project.name.startsWith("mobile")) {
    await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeVisible();
  } else {
    await expect(page.getByRole("navigation", { name: "Primary Navigation" })).toHaveCount(1);
  }

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toHaveAttribute("href", "#main-content");
  await expect(page.locator("main#main-content")).toBeVisible();
});
