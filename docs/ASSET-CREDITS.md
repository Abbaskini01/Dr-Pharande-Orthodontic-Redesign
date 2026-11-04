# Asset Credits & Licensing

This file records every third-party asset used in the website, its source, author and licence.
Update it whenever an image is added or replaced.

## Licence summary

All photography currently in the site comes from **Pexels** and is used under the
[Pexels License](https://www.pexels.com/license/):

- free to use for commercial and non-commercial purposes;
- **attribution is not required** (credits below are recorded for provenance, not obligation);
- not permitted: selling unaltered copies, redistributing the images as stock, or implying that
  a depicted person, brand or organisation endorses this site.

No purchased, watermarked, scraped or AI-generated imagery is used. None of the photographs
show identifiable patients, clinic staff or Dr. Pharande — the doctor profile cards
intentionally use a branded monogram instead of stock portraits.

## Images in use

### 1. `web/public/images/clinic-treatment-room.jpg` (homepage hero visual)

| | |
| --- | --- |
| Source | Pexels — https://www.pexels.com/photo/white-and-black-medical-equipment-9062531/ |
| Photographer | Pexels account `. MM Dental .` (credit text as published: "Photo by . MM Dental .") |
| Licence | Pexels License — https://www.pexels.com/license/ |
| Original size | 1200 × 1786 (requested at 1600 px wide) |
| Modifications | Resized and cropped to 1200 × 1500 (4:5), re-encoded to JPEG q82, metadata stripped |
| Retrieved | 2026-11-04 |
| Alt text | "Modern orthodontic treatment room with a dental chair and precision equipment" |
| Use | Hero visual on the homepage (`src/components/features/home/hero/HeroImage.tsx`) |

### 2. `web/public/images/dental-treatment-room-wide.jpg` (clinic page band)

| | |
| --- | --- |
| Source | Pexels — https://www.pexels.com/photo/4269268/ ("Back View of a Dental Chair in a Clinic") |
| Photographer | Cedric Fauntleroy |
| Licence | Pexels License — https://www.pexels.com/license/ |
| Original size | 8244 px wide (requested at 2400 px wide) |
| Modifications | Resized and cropped to 2000 × 900 (20:9), re-encoded to JPEG q82, metadata stripped |
| Retrieved | 2026-11-04 |
| Alt text | "Modern dental treatment room with a dental chair and overhead equipment" |
| Use | Clinic environment band on `/clinic` (`src/app/clinic/ClinicClient.tsx`) |

## Brand assets (generated for this project)

| File | Purpose | Notes |
| --- | --- | --- |
| `web/src/app/icon.png` | 512 × 512 site icon | Generated from the existing wordmark identity (teal `#0f766e`, gold `#d4af37`) |
| `web/src/app/apple-icon.png` | 180 × 180 Apple touch icon | Downscaled from the site icon |
| `web/src/app/favicon.ico` | 16/32/48 favicon | PNG frames packed into an ICO |
| `web/public/og-image.jpg` | 1200 × 630 social sharing image | Wordmark, subtitle, tagline and clinic facts only — no unverified claims |

These reuse the established teal-and-gold palette and the text wordmark; no new logo,
typeface or colour was introduced.

## Replacing stock imagery

When the clinic supplies real photographs:

1. Add the files to `web/public/images/` with descriptive names.
2. Update the component `src` and `alt` text (keep the alt text descriptive, not decorative).
3. Remove the stock entry above and record the new asset's provenance in this file.
4. Delete the superseded stock files so unused weight does not ship.
