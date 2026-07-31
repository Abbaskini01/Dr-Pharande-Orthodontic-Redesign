# Testimonials Component Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Component:** Testimonials

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

The Testimonials component showcases authentic patient experiences to build trust, reinforce credibility, and reduce uncertainty for prospective patients.

Testimonials should highlight positive treatment outcomes while maintaining authenticity and professionalism.

---

# Design Goals

The Testimonials component should:

- Build trust.
- Showcase real patient experiences.
- Reinforce the clinic's expertise.
- Encourage consultation bookings.
- Maintain accessibility.
- Scale as new testimonials are added.

---

# Business Objectives

Primary objectives:

- Increase user confidence.
- Improve appointment conversions.
- Demonstrate treatment success.

Secondary objectives:

- Reinforce the clinic's reputation.
- Support SEO with structured review content.
- Encourage exploration of Smile Gallery and Treatments.

---

# Component Anatomy

```
Testimonials

├── Section Header
│   ├── Eyebrow (Optional)
│   ├── Heading
│   └── Supporting Description
│
├── Testimonial Grid / Carousel
│   ├── Testimonial Card
│   │   ├── Quote
│   │   ├── Patient Name
│   │   ├── Treatment Type (Optional)
│   │   ├── Rating
│   │   └── Patient Photo (Optional)
│   │
│   └── Navigation Controls (Optional)
│
└── CTA (Optional)
```

---

# Information Hierarchy

Priority:

```
Section Heading

↓

Patient Quote

↓

Patient Name

↓

Treatment Information

↓

Rating

↓

CTA
```

---

# Testimonial Variants

## Standard Card

Displays a single patient review.

---

## Featured Testimonial

Highlights an exceptional patient story with expanded content.

---

## Carousel

Displays one testimonial at a time with navigation controls.

---

## Grid

Displays multiple testimonial cards simultaneously.

Recommended for desktop layouts.

---

## Video Testimonial

Embeds a patient video with transcript support.

---

# Content Guidelines

## Quote

Quotes should:

- Be authentic.
- Focus on the patient's experience.
- Remain concise.
- Preserve original meaning.

Avoid excessive editing.

---

## Patient Name

Display:

- First name
- Last initial (optional)

Example:

```
Priya S.

Rahul K.
```

Respect patient privacy and consent.

---

## Rating

Ratings should:

- Use a consistent five-star format.
- Reflect verified patient feedback.

Do not display fabricated ratings.

---

## Treatment Information

Optional examples:

```
Invisalign

Ceramic Braces

Metal Braces

Retainers
```

---

# Visual Content

Preferred visuals:

- Real patient photographs.
- Before-and-after smile images (with consent).
- Video testimonials.

Avoid stock photography.

---

# Placement Strategy

Recommended locations:

- Homepage
- Treatment pages
- About page
- Before final CTA
- Dedicated Testimonials page

---

# Responsive Behaviour

## Mobile

- Single-column layout.
- Swipeable carousel (optional).
- Large touch targets.

---

## Tablet

- Two-column grid or carousel.

---

## Desktop

- Multi-column grid.
- Featured testimonial supported.

---

# Accessibility

Testimonials must support:

- Semantic headings.
- Accessible carousel controls.
- Keyboard navigation.
- Screen readers.
- WCAG 2.2 AA compliance.

Auto-advancing carousels should be avoided unless user-controlled.

---

# Motion

Acceptable animations:

- Gentle fade transitions.
- Card hover elevation.
- Carousel slide transitions.

Motion should never interfere with readability.

---

# Performance Considerations

Testimonials should:

- Lazy-load images.
- Optimize video assets.
- Prevent layout shifts.
- Load quickly on slower networks.

---

# Analytics

Recommended events:

```
Testimonial Viewed

Carousel Navigation

Video Played

CTA Click

Smile Gallery Click
```

---

# Design Tokens

Testimonials reference:

```
surface-default

surface-elevated

color-primary

text-primary

text-secondary

space-8

radius-lg

elevation-1

motion-normal
```

---

# Usage Guidelines

Use testimonials to:

- Build trust.
- Reinforce treatment quality.
- Support key conversion points.

Display only verified testimonials with appropriate patient consent.

---

# Do

✔ Use authentic patient feedback.

✔ Maintain consistent formatting.

✔ Include ratings where appropriate.

✔ Optimize media assets.

✔ Respect patient privacy.

---

# Don't

✘ Use fabricated testimonials.

✘ Display overly long paragraphs.

✘ Auto-play testimonial videos.

✘ Overcrowd the section.

✘ Use low-quality images.

---

# Testing Checklist

Verify:

- Responsive layouts display correctly.
- Carousel controls work.
- Keyboard navigation functions.
- Screen readers announce content correctly.
- Images load efficiently.
- Ratings remain visually consistent.
- Analytics events fire correctly.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Cards | Cards Component |
| CTA | CTA Component |
| Typography | Typography |
| Motion | Motion |
| Accessibility | Accessibility |
| Design Tokens | Design Tokens |

---

# Related Documents

- Cards
- Gallery
- CTA
- Hero
- Typography
- Accessibility
- Design Tokens

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Testimonials component specification |