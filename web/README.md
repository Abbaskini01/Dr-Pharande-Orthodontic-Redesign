# web — Dr. Pharande Orthodontic & Dental Clinic

The Next.js application for https://drpharande.com.

- **Framework:** Next.js 16.2.12 (App Router, Turbopack builds)
- **UI:** React 19, TypeScript (strict), Tailwind CSS v4, shadcn/Base UI primitives,
  Framer Motion, lucide-react
- **Tests:** Playwright (`@playwright/test`)
- **Node:** 20.9 or newer

## Prerequisites

- Node.js **20.9+** (declared in `package.json` `engines`)
- npm (a `package-lock.json` is committed — use `npm ci` for reproducible installs)
- Playwright browsers for browser QA: `npx playwright install`

## Installation

```bash
cd web
npm ci
cp .env.example .env.local
```

## Environment variables

All variables are public (`NEXT_PUBLIC_*`) — never put secrets in them. `.env.example`
documents every variable the code reads:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No (defaults to `https://drpharande.com`) | Canonical URLs, Open Graph URLs, `sitemap.xml`, `robots.txt`, JSON-LD |
| `NEXT_PUBLIC_BOOKING_ONLINE_URL` | No | Clinic-approved online booking destination |
| `NEXT_PUBLIC_CONCIERGE_CHAT_URL` | No | Clinic-approved concierge / WhatsApp destination |

**Booking behaviour.** `src/content/booking.ts` builds the "Book Consultation" choices:

- both booking variables set → the dialog shows **Book Online** and **Chat with Concierge**
  linking to the approved destinations;
- either variable unset → that choice degrades to the verified contact route
  (**Call to Book** → `tel:+919561035555`, **Email Our Team** → `mailto:drpharande.clinic@gmail.com`).

The dialog therefore never advertises a booking platform that does not exist. Setting the
variables is the only change needed to go live with a real booking provider.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server on http://localhost:3000 |
| `npm run build` | Production build (compiles, type-checks, prerenders static routes) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx playwright test` | Browser QA suite in `tests/` |

## Project structure

```
src/
  app/            Routes, layout, metadata, robots.ts, sitemap.ts, icons
  components/
    features/     Homepage sections (hero, trust, services, doctors, faq, cta, testimonials)
    layout/       Navbar (desktop + mobile drawer), footer, containers
    shared/       Reusable UI: BookingDialog, ProfileCard, sections, JsonLd
    ui/           shadcn/Base UI primitives
    providers/    Motion and theme providers
  content/        Clinic-verified content: clinic, contact, doctors, treatments, faq, seo
  lib/            Metadata helpers, routes, icons, animations
  design-system/  Tokens: colors, typography, spacing, radius, shadows, motion
public/
  images/         Licensed environment photography (see docs/ASSET-CREDITS.md)
  og-image.jpg    1200×630 social sharing image
```

Content is separated from presentation: edit `src/content/*` for copy, contact details and
treatments rather than the components.

## Browser QA

`playwright.config.ts` runs five projects — Chromium, Firefox, WebKit, mobile Chromium
(Pixel 5) and mobile WebKit (iPhone 12) — against `http://localhost:3000`.

```bash
npm run build && npm run start   # recommended: test the production build
npx playwright test              # in another terminal
```

The config starts `npm run dev` automatically when nothing is listening on port 3000 and reuses
an existing server otherwise, so the production server above is preferred. Notes from the
existing suite:

- Desktop navigation is intentionally skipped on mobile projects (the drawer is tested instead).
- The booking-dialog suite has a larger timeout because mobile WebKit needs longer than the
  default budget for the open/focus/close flow.
- Run one Playwright process at a time; mobile WebKit is sensitive to concurrent runs and cold
  compilation.

## Deployment (Vercel)

1. Import `Abbaskini01/Dr-Pharande-Orthodontic-Redesign` into Vercel.
2. Set **Root Directory** to `web` — the repository root is not the application root.
3. Framework preset: **Next.js**. Build command `npm run build`, install command `npm ci`,
   output handled by the Next.js adapter (no `vercel.json` needed).
4. Node.js runtime: 20.9+ (22.x is fine).
5. Add the environment variables from the table above to Production (and Preview if wanted).
6. Attach the `drpharande.com` domain and point DNS at Vercel; verify HTTPS afterwards.

## Maintenance notes

- Update clinic facts in `src/content/` and keep `docs/PROJECT_STATUS.md` in sync.
- Doctor portraits: add the file to `public/images/`, set `image` on the doctor entry in
  `src/content/doctors.ts`; the card renders a branded monogram while `image` is empty.
- Replace `public/images/clinic-treatment-room.jpg` and `dental-treatment-room-wide.jpg` with
  genuine clinic photography when supplied, and update `docs/ASSET-CREDITS.md`.
- Security headers are configured in `next.config.ts`.
