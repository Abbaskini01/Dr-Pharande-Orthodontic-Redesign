# Hero Component Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Component:** Hero

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

The Hero component serves as the primary introduction to a page.

It communicates the clinic's value proposition, establishes credibility, and guides visitors toward high-priority actions such as booking an appointment or exploring treatments.

Every page should have a clear and purposeful Hero section.

---

# Design Goals

The Hero component should:

- Capture attention immediately.
- Explain the primary value proposition.
- Build trust.
- Encourage conversions.
- Support responsive layouts.
- Maintain excellent performance.

---

# Component Anatomy

```
Hero

├── Background
│
├── Content Container
│   ├── Eyebrow Text (Optional)
│   ├── Primary Heading
│   ├── Supporting Description
│   ├── Trust Indicators
│   ├── Primary CTA
│   └── Secondary CTA
│
└── Visual Content
    ├── Doctor Image
    ├── Clinic Image
    └── Illustration (Optional)
```

---

# Information Hierarchy

Priority should always follow:

```
Headline

↓

Supporting Text

↓

Primary CTA

↓

Secondary CTA

↓

Trust Indicators

↓

Visual Content
```

The user's attention should naturally flow toward the primary call-to-action.

---

# Hero Variants

## Homepage Hero

Purpose:

Introduce the clinic.

Typical content:

- Clinic value proposition
- Doctor image
- Appointment CTA

---

## Treatment Hero

Purpose:

Introduce a specific treatment.

Examples:

- Invisalign
- Metal Braces
- Ceramic Braces

---

## About Hero

Purpose:

Introduce the clinic and doctor.

---

## Contact Hero

Purpose:

Encourage consultation.

---

## Blog Hero

Purpose:

Introduce educational content.

---

# Content Guidelines

## Heading

Headings should:

- Clearly communicate value.
- Be concise.
- Focus on patient outcomes.

Example:

```
Confident Smiles Begin Here
```

---

## Description

Descriptions should:

- Explain the benefit.
- Reduce uncertainty.
- Encourage further exploration.

Avoid unnecessary technical terminology.

---

## Primary CTA

Examples:

```
Book Appointment

Schedule Consultation

Get Started
```

Only one primary CTA should exist within the Hero.

---

## Secondary CTA

Examples:

```
Explore Treatments

Meet Our Doctor

View Smile Gallery
```

Secondary CTAs should support exploration.

---

# Trust Indicators

The Hero may include:

- Years of experience
- Number of happy patients
- Professional certifications
- Advanced technology
- Google rating

Trust indicators should support credibility without overwhelming the layout.

---

# Visual Content

Preferred imagery:

- Doctor portrait
- Real clinic photography
- Genuine patient interactions

Avoid:

- Generic stock photos.
- Artificial-looking imagery.
- Overly decorative graphics.

---

# Background Strategy

Recommended backgrounds:

- Neutral surfaces
- Soft gradients
- Subtle textures

Backgrounds should never reduce text readability.

---

# Responsive Behaviour

## Mobile

- Single-column layout.
- Content first.
- Visual below content.
- Full-width CTA.

---

## Tablet

- Flexible two-column layout.

---

## Desktop

- Side-by-side content and imagery.

---

# Accessibility

Hero sections must support:

- Semantic headings.
- Accessible buttons.
- Keyboard navigation.
- Screen readers.
- WCAG 2.2 AA compliance.

The primary heading should normally be the page's H1.

---

# Performance Considerations

Hero sections should:

- Optimize images.
- Use responsive image formats.
- Avoid autoplay video.
- Prevent layout shifts.
- Prioritize Largest Contentful Paint (LCP).

---

# Motion

Motion should be minimal.

Acceptable animations include:

- Gentle content fade-in.
- Subtle image reveal.
- CTA hover transitions.

Avoid distracting entrance animations.

---

# Design Tokens

Hero references:

```
surface-default

color-primary

text-primary

text-secondary

space-8

space-10

radius-lg

elevation-1

motion-normal
```

---

# Usage Guidelines

Use the Hero to:

- Introduce the page.
- Communicate the primary value proposition.
- Establish trust.
- Direct users toward the primary action.

Each page should contain only one Hero component.

---

# Do

✔ Keep messaging concise.

✔ Prioritize patient benefits.

✔ Use authentic photography.

✔ Highlight one primary action.

✔ Maintain strong visual hierarchy.

---

# Don't

✘ Overload the Hero with information.

✘ Compete with multiple primary CTAs.

✘ Use distracting animations.

✘ Place critical information only inside images.

✘ Use low-quality or irrelevant visuals.

---

# Testing Checklist

Verify:

- Headline remains readable.
- Primary CTA is immediately visible.
- Responsive layouts behave correctly.
- Images remain optimized.
- Keyboard navigation works.
- Screen readers announce headings correctly.
- LCP performance targets are met.
- Hero remains visually balanced across devices.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Buttons | Button Component |
| Typography | Typography |
| Color System | Color System |
| Motion | Motion |
| Accessibility | Accessibility |
| Design Tokens | Design Tokens |

---

# Related Documents

- Buttons
- Navigation
- CTA
- Typography
- Accessibility
- Design Tokens

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Hero component specification |