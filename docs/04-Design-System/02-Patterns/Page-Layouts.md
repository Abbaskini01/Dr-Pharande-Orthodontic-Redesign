# Page Layouts Pattern Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Pattern:** Page Layouts

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 31 July 2026

---

# Purpose

The Page Layouts pattern defines the structural composition of all major pages within the website.

Rather than specifying visual design details, this document establishes the recommended arrangement of reusable components and interaction patterns to create consistent, predictable, and scalable page experiences.

---

# Design Goals

Page layouts should:

- Maintain consistency.
- Improve navigation.
- Support accessibility.
- Encourage conversions.
- Scale with future content.
- Promote component reuse.
- Optimize performance.

---

# Design Philosophy

Every page should follow a predictable hierarchy.

```
Navigation

↓

Hero

↓

Primary Content

↓

Supporting Sections

↓

Call-to-Action

↓

Footer
```

Visitors should immediately understand:

- Where they are.
- What the page offers.
- What action they can take next.

---

# Components Used

Layouts may combine:

- Navigation
- Hero
- Cards
- CTA
- Forms
- Gallery
- Testimonials
- Accordion
- Footer

Only approved components should be used.

---

# Homepage Layout

Recommended structure:

```
Navigation

↓

Hero

↓

Clinic Introduction

↓

Featured Treatments

↓

Why Choose Us

↓

Smile Gallery

↓

Patient Testimonials

↓

FAQ

↓

Consultation CTA

↓

Footer
```

Primary objective:

Generate appointment bookings.

---

# About Page Layout

Recommended structure:

```
Navigation

↓

Hero

↓

Doctor Introduction

↓

Clinic Story

↓

Mission & Values

↓

Achievements

↓

Clinic Gallery

↓

CTA

↓

Footer
```

Primary objective:

Build trust.

---

# Treatment Page Layout

Recommended structure:

```
Navigation

↓

Hero

↓

Treatment Overview

↓

Benefits

↓

Treatment Process

↓

Gallery

↓

Testimonials

↓

FAQ

↓

CTA

↓

Footer
```

Refer to the Treatment Pages pattern for detailed guidance.

---

# Blog Article Layout

Recommended structure:

```
Navigation

↓

Article Hero

↓

Metadata

↓

Article Content

↓

Related Articles

↓

CTA

↓

Footer
```

Primary objective:

Educate visitors.

---

# Contact Page Layout

Recommended structure:

```
Navigation

↓

Hero

↓

Contact Information

↓

Business Hours

↓

Google Map

↓

Contact Form

↓

FAQ

↓

CTA

↓

Footer
```

Primary objective:

Generate enquiries.

---

# FAQ Page Layout

Recommended structure:

```
Navigation

↓

Hero

↓

Search (Future)

↓

Accordion Sections

↓

CTA

↓

Footer
```

---

# Privacy Policy Layout

Recommended structure:

```
Navigation

↓

Page Title

↓

Policy Content

↓

Last Updated

↓

Footer
```

Minimal distractions should be used.

---

# Terms & Conditions Layout

Recommended structure:

```
Navigation

↓

Page Title

↓

Legal Content

↓

Footer
```

---

# 404 Error Page

Recommended structure:

```
Logo

↓

Illustration

↓

Friendly Message

↓

Primary CTA

↓

Secondary Navigation
```

Example:

```
Oops!

The page you're looking for doesn't exist.

↓

Return Home
```

---

# Section Ordering Principles

Recommended priority:

```
Trust

↓

Education

↓

Evidence

↓

Conversion
```

Avoid interrupting educational content with excessive promotional messaging.

---

# Content Width

Recommended content widths:

```
Reading Content

↓

Medium Width

Interactive Content

↓

Large Width

Media

↓

Full Width
```

Avoid excessively wide text columns.

---

# Spacing Principles

Each section should:

- Maintain consistent vertical rhythm.
- Use design token spacing.
- Preserve whitespace.

Spacing should guide users naturally through the page.

---

# Responsive Behaviour

## Mobile

- Single-column layouts.
- Reduced visual complexity.
- Full-width CTAs.

---

## Tablet

- Flexible grids.
- Improved spacing.

---

## Desktop

- Multi-column layouts.
- Rich visual hierarchy.
- Balanced whitespace.

---

# Accessibility

Page layouts must support:

- Semantic landmarks.
- Logical heading hierarchy.
- Keyboard navigation.
- Skip navigation.
- Screen readers.
- WCAG 2.2 AA compliance.

---

# Performance

Layouts should:

- Prioritize above-the-fold content.
- Optimize media.
- Prevent layout shifts.
- Lazy-load non-critical assets.

---

# SEO Considerations

Every page should include:

- Unique metadata.
- Structured headings.
- Internal links.
- Descriptive image alt text.
- Canonical URLs where appropriate.

---

# Analytics

Recommended events:

```
Page Viewed

↓

Scroll Depth

↓

CTA Click

↓

Navigation Interaction

↓

Form Submission
```

---

# Design Tokens

Layouts reference:

```
Grid System

Spacing

Typography

Color System

Motion

Accessibility
```

---

# Usage Guidelines

Layouts should:

- Prioritize user goals.
- Maintain consistency.
- Reuse existing components.
- Avoid unnecessary complexity.

Every new page should begin with an approved layout pattern.

---

# Do

✔ Maintain consistent page structure.

✔ Guide users logically.

✔ Prioritize readability.

✔ Reuse approved components.

✔ Keep navigation predictable.

---

# Don't

✘ Rearrange layouts without justification.

✘ Introduce duplicate components.

✘ Overload pages with excessive content.

✘ Ignore responsive behaviour.

✘ Break accessibility standards.

---

# Testing Checklist

Verify:

- Layout hierarchy is consistent.
- Responsive layouts behave correctly.
- Accessibility requirements are met.
- Components align correctly.
- Navigation remains predictable.
- CTAs remain visible.
- Performance targets are achieved.
- Analytics events fire correctly.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Responsive Patterns | Responsive Patterns |
| Treatment Pages | Treatment Pages |
| Blog Layouts | Blog Layouts |
| Components | Component Library |
| Accessibility | Accessibility |
| Design Tokens | Design Tokens |

---

# Related Documents

- Responsive Patterns
- Treatment Pages
- Blog Layouts
- Components
- Templates
- Accessibility

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 31 July 2026 | Initial Page Layouts pattern specification |