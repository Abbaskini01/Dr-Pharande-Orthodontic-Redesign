# Project Status

Last verified: 2026-11-04 · Branch `agents/phase-9-complete-homepage-redesign` · App root `web/`

## Implemented and verified

- Homepage: hero (licensed treatment-room visual), trust stats, services, doctors,
  testimonials, FAQ, booking CTA
- Responsive implementation across mobile, tablet and desktop breakpoints
- `/clinic` — clinic overview, environment imagery, specialists, mission/values, CTA
- `/treatments` — treatment index
- `/treatments/[slug]` — five statically generated treatment detail pages
- `/transformations` — rating summary and patient feedback
- `/contact` — address, both published phone numbers, email, clinic hours
- Branded 404 with recovery links
- Booking dialog: accessible modal (focus in/out, Escape, `aria-modal`) with contact-first
  fallback to the verified phone numbers and email, plus an environment-variable upgrade path
  to a real booking platform
- Accessibility: landmarks, a single `h1` per route, skip link, keyboard-operable navigation
  drawer, reduced-motion support
- SEO: unique titles/descriptions, canonicals, Open Graph + Twitter metadata with a 1200x630
  share image, `sitemap.xml`, `robots.txt`, `Dentist` JSON-LD, theme colour, favicon and
  Apple touch icons
- Security headers in `next.config.ts`
- Environment variables documented in `web/.env.example`
- Production build passes; Playwright suite covers Chromium, Firefox, WebKit, mobile Chromium
  and mobile WebKit

## Pending — requires clinic input

| Item | Impact if unresolved | Notes |
| --- | --- | --- |
| Authentic doctor photographs (Dr. Amol J. Pharande, Dr. Snehal Pharande) | Profile cards show a branded monogram instead of a portrait | Add files to `web/public/images/` and set `image` in `src/content/doctors.ts` |
| Clinic photography | Licensed stock stands in for clinic interior shots | Logged in `docs/ASSET-CREDITS.md` |
| Approved online booking URL | Booking dialog offers "Call to Book" instead of "Book Online" | Set `NEXT_PUBLIC_BOOKING_ONLINE_URL` |
| Confirmed WhatsApp/concierge destination | Dialog offers "Email Our Team" instead of a chat link | Set `NEXT_PUBLIC_CONCIERGE_CHAT_URL` only once the clinic confirms the number is WhatsApp-enabled |
| Google review embedding permission | Testimonials stay curated rather than live-synced | Content currently stored in `src/content/testimonials.ts` |
| Before/after treatment imagery | Transformations page shows patient feedback only, with no clinical result claims | Requires written patient consent before publication |

## Deployment

- GitHub: `Abbaskini01/Dr-Pharande-Orthodontic-Redesign`
- Vercel: root directory must be `web`; no `vercel.json` required
- Domain: `drpharande.com` (confirmed as the intended production domain); DNS changes require
  owner approval
