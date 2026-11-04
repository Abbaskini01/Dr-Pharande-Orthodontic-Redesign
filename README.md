# Dr. Pharande Orthodontic & Dental Clinic — Website

Production marketing website for **Dr. Pharande's Orthodontic & Dental Clinic**, Aundh, Pune.

The site presents the clinic, its specialists, orthodontic and dental treatments, patient
transformations and contact details, and it opens a contact-first booking dialog from every
major call to action.

- **Production domain:** https://drpharande.com
- **Application root:** [`web/`](./web) — this is the directory Vercel must build
- **Stack:** Next.js 16.2 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
  Framer Motion · lucide-react · Playwright

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, trust, services, doctors, testimonials, FAQ, booking CTA |
| `/clinic` | Clinic overview, environment imagery, specialists, mission and values |
| `/treatments` | Treatment index |
| `/treatments/[slug]` | Five statically generated treatment detail pages |
| `/transformations` | Patient feedback and rating summary |
| `/contact` | Address, phone numbers, email, clinic hours |
| `/sitemap.xml`, `/robots.txt` | Generated from `NEXT_PUBLIC_SITE_URL` |
| `/_not-found` | Branded 404 with recovery links |

## Quick start

```bash
cd web
npm install
cp .env.example .env.local   # optional for local work
npm run dev                  # http://localhost:3000
```

Requirements: **Node.js 20.9 or newer** (Next.js 16 requirement) and npm.

## Verification

```bash
cd web
npm run build                # production build + TypeScript
npx playwright test          # browser QA (Chromium, Firefox, WebKit, mobile Chromium, mobile WebKit)
```

## Repository layout

```
docs/    Project documentation: strategy, design system, development standards, asset credits
web/     The Next.js application (see web/README.md for setup, environment and deployment)
```

## Documentation

- [`web/README.md`](./web/README.md) — install, environment variables, scripts, browser QA, deployment
- [`docs/ASSET-CREDITS.md`](./docs/ASSET-CREDITS.md) — image sources, licences and attribution
- [`docs/PROJECT_STATUS.md`](./docs/PROJECT_STATUS.md) — what is implemented and what is pending
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md), [`docs/04-Design-System`](./docs/04-Design-System) —
  architecture and design system
- [`web/AGENTS.md`](./web/AGENTS.md) — engineering notes for agents working in this repository

## Content ownership

All clinic facts (names, qualifications, memberships, address, phone numbers, email, hours,
ratings) live in [`web/src/content`](./web/src/content) and are clinic-verified. Treat that
directory as the single source of truth and do not introduce claims that the clinic has not
approved.

## Pending client inputs

See [`docs/PROJECT_STATUS.md`](./docs/PROJECT_STATUS.md) — the outstanding items are authentic
doctor photographs and an approved online booking / WhatsApp destination. Licensed stock
imagery is used for clinic environment shots until genuine clinic photography is supplied, and
the booking dialog routes to the verified phone numbers and email until a booking platform is
confirmed.
