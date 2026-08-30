import { test, expect } from "@playwright/test";

test("Phase 15 smoke test — homepage loads", async ({ page }) => {
  const response = await page.goto("/");

  expect(response).not.toBeNull();
  expect(response?.ok()).toBeTruthy();

  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator("body")).toBeVisible();
});