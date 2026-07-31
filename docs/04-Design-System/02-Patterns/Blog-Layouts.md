# Blog Layout Pattern Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Pattern:** Blog Layouts

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 31 July 2026

---

# Purpose

The Blog Layout pattern defines the structure, hierarchy, and reading experience for educational content published by the clinic.

Its objectives are to educate patients, improve search engine visibility, establish authority, and guide readers toward relevant treatments and consultation requests.

Every article should provide genuine educational value before encouraging conversion.

---

# Design Goals

Blog layouts should:

- Maximize readability.
- Encourage deep engagement.
- Support SEO.
- Build trust.
- Promote related content.
- Encourage consultation bookings.
- Maintain accessibility.

---

# Business Objectives

Primary objectives:

- Increase organic traffic.
- Improve patient education.
- Generate consultation enquiries.

Secondary objectives:

- Build authority.
- Increase session duration.
- Improve internal navigation.
- Encourage newsletter subscriptions (future).

---

# User Goals

Readers should be able to:

- Understand the topic quickly.
- Navigate long articles easily.
- Find trustworthy information.
- Discover related treatments.
- Contact the clinic when appropriate.

---

# Components Used

Blog layouts combine:

- Navigation
- Hero
- Typography
- Cards
- CTA
- Gallery (Optional)
- Accordion (Optional)
- Footer

---

# Standard Page Structure

```
Navigation

↓

Article Hero

↓

Author Information

↓

Article Metadata

↓

Table of Contents (Optional)

↓

Article Content

↓

Images & Media

↓

Frequently Asked Questions (Optional)

↓

Related Articles

↓

Consultation CTA

↓

Footer
```

---

# Article Hero

Should include:

- Article title
- Featured image
- Category
- Publication date
- Reading time

Example:

```
Everything You Need to Know About Invisalign®

8 min read

Orthodontics
```

---

# Author Information

Display:

- Author name
- Professional title
- Credentials
- Profile image (Optional)

Example:

```
Dr. Pharande

Orthodontist
```

Author information reinforces credibility.

---

# Article Metadata

Recommended metadata:

- Published date
- Last updated date
- Reading time
- Category
- Tags (Optional)

---

# Table of Contents

Recommended for long-form articles.

Should:

- Link to headings.
- Remain sticky on desktop (optional).
- Collapse on mobile.

---

# Article Content

Content hierarchy should follow:

```
H1

↓

Introduction

↓

H2 Sections

↓

Supporting H3 Sections

↓

Summary

↓

CTA
```

Paragraphs should remain concise and easy to scan.

---

# Images & Media

Media may include:

- Clinical illustrations
- Treatment diagrams
- Real clinic photographs
- Educational graphics
- Videos (Optional)

All media should support the educational purpose of the article.

---

# Internal Linking

Articles should link to:

- Relevant treatment pages
- Related blog posts
- Contact page
- Appointment booking

Internal links should feel natural and useful.

---

# Related Articles

Display 3–4 relevant articles.

Example:

```
What Are Ceramic Braces?

↓

How Invisalign Works

↓

When Should Children Visit an Orthodontist?
```

---

# Consultation CTA

Include a clear CTA near the conclusion.

Example:

```
Still Have Questions?

Book a Consultation Today
```

The CTA should follow the CTA Component specification.

---

# Content Guidelines

Articles should:

- Use plain language.
- Be medically accurate.
- Avoid sensationalism.
- Explain terminology where necessary.
- Include actionable advice.

---

# Responsive Behaviour

## Mobile

- Single-column layout.
- Comfortable line length.
- Collapsible table of contents.

---

## Tablet

- Improved spacing.
- Flexible media.

---

## Desktop

- Wider reading column.
- Optional sticky table of contents.
- Balanced whitespace.

---

# Accessibility

Blog layouts must support:

- Semantic headings.
- Logical heading hierarchy.
- Keyboard navigation.
- Accessible images.
- Screen readers.
- WCAG 2.2 AA compliance.

Long articles should remain easy to navigate.

---

# Performance

Blog pages should:

- Optimize featured images.
- Lazy-load non-critical media.
- Prevent layout shifts.
- Prioritize reading performance.

---

# SEO Considerations

Every article should include:

- Unique title tag.
- Unique meta description.
- Canonical URL.
- Structured heading hierarchy.
- Optimized images.
- Internal links.
- External citations (where appropriate).
- Structured data for Article schema.

---

# Analytics

Recommended events:

```
Article Viewed

↓

Scroll Depth

↓

Table of Contents Click

↓

Related Article Click

↓

CTA Click
```

These metrics help evaluate content engagement.

---

# Design Tokens

Blog layouts reference:

```
Typography

Spacing

Grid

Cards

CTA

Motion

Accessibility
```

---

# Usage Guidelines

Blog layouts should:

- Prioritize education.
- Maintain consistent formatting.
- Encourage exploration.
- End with a relevant CTA.

Every article should answer a genuine patient question.

---

# Do

✔ Write for patients rather than professionals.

✔ Use meaningful headings.

✔ Break up long sections.

✔ Include helpful visuals.

✔ Link to relevant treatments.

---

# Don't

✘ Publish thin content.

✘ Use clickbait titles.

✘ Overuse promotional language.

✘ Create excessively long paragraphs.

✘ Ignore accessibility.

---

# Testing Checklist

Verify:

- Reading experience remains comfortable.
- Images load correctly.
- Internal links work.
- Table of contents functions.
- CTA remains visible.
- SEO metadata is complete.
- Analytics events fire correctly.
- Accessibility requirements are met.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Hero | Hero Component |
| CTA | CTA Component |
| Typography | Typography |
| Cards | Cards Component |
| Accessibility | Accessibility |
| Design Tokens | Design Tokens |

---

# Related Documents

- Hero
- CTA
- Cards
- Treatment Pages
- Responsive Patterns
- Page Layouts

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 31 July 2026 | Initial Blog Layout pattern specification |