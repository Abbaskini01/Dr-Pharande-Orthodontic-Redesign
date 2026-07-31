# Card Component Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Component:** Card

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

The Card component groups related content into a visually distinct container.

Cards improve information hierarchy, increase content scannability, and provide reusable layouts for displaying treatments, services, doctors, testimonials, blog articles, gallery items, and promotional content.

The Card component is one of the primary building blocks of the website.

---

# Design Goals

The Card component should:

- Organize related information.
- Improve readability.
- Encourage user interaction.
- Maintain consistent spacing.
- Support responsive layouts.
- Be reusable across multiple pages.

---

# Component Anatomy

```
+--------------------------------------------------+

Optional Image

----------------------------------------------------

Category (Optional)

Title

Description

Supporting Information

Optional Tags

----------------------------------------------------

Optional Button / Link

+--------------------------------------------------+
```

Structure

```
Card

├── Container
├── Media (Optional)
├── Category Label (Optional)
├── Title
├── Description
├── Metadata (Optional)
├── Supporting Content (Optional)
├── Action Area (Optional)
└── Elevation
```

---

# Component Responsibilities

Container

Defines boundaries and spacing.

Media

Provides supporting visual content.

Title

Communicates the primary subject.

Description

Provides concise supporting information.

Metadata

Displays additional contextual information.

Action Area

Contains buttons or links when interaction is required.

---

# Card Hierarchy

Information priority:

```
Image

↓

Title

↓

Description

↓

Metadata

↓

Actions
```

The most important information should always appear first.

---

# Card Types

## Treatment Card

Displays treatment information.

Example:

- Braces
- Invisalign
- Retainers

---

## Doctor Card

Displays clinician information.

Example:

- Name
- Qualification
- Experience

---

## Testimonial Card

Displays patient feedback.

Includes:

- Patient name
- Review
- Rating (Optional)

---

## Blog Card

Displays article summaries.

Includes:

- Thumbnail
- Publish date
- Reading time

---

## Gallery Card

Displays before-and-after images.

May include:

- Image
- Caption
- Treatment type

---

## Feature Card

Highlights clinic advantages.

Examples:

- Advanced Technology
- Experienced Specialists
- Flexible Appointments

---

# Card Variants

Supported variants:

- Elevated
- Outlined
- Flat
- Interactive

Interactive cards should communicate clickability clearly.

---

# Card States

Every interactive card supports:

| State | Description |
|--------|-------------|
| Default | Normal |
| Hover | Pointer interaction |
| Focus | Keyboard navigation |
| Active | Selected |
| Disabled | Not interactive |

---

# Interactive Behaviour

Cards may be:

- Informational only
- Fully clickable
- Partially clickable

Nested interactive controls should not create conflicting click targets.

---

# Images

Images should:

- Maintain consistent aspect ratios.
- Be optimized.
- Include descriptive alternative text.
- Avoid unnecessary cropping.

Lazy loading should be used where appropriate.

---

# Content Guidelines

Titles should:

- Be concise.
- Clearly identify the subject.

Descriptions should:

- Summarize information.
- Avoid unnecessary detail.

Cards should remain scannable.

---

# Actions

Cards may include:

Primary Action

```
Learn More
```

Secondary Action

```
Book Consultation
```

Actions should follow the Button specification.

---

# Responsive Behaviour

Mobile

- Single-column layout.
- Full-width cards.

Tablet

- Two-column layouts where appropriate.

Desktop

- Multi-column responsive grid.

Card height should adapt naturally to content.

---

# Accessibility

Cards must support:

- Keyboard navigation
- Semantic HTML
- Accessible links
- Screen reader support
- WCAG 2.2 AA compliance

Interactive cards should provide visible focus indicators.

---

# Performance Considerations

Cards should:

- Lazy load media.
- Optimize images.
- Avoid unnecessary animations.
- Maintain layout stability.

---

# Design Tokens

Cards reference:

```
surface-default

surface-elevated

space-6

radius-lg

elevation-1

motion-fast

border-default

text-primary

text-secondary
```

---

# Usage Guidelines

Use cards when:

- Presenting grouped information.
- Displaying reusable content.
- Supporting responsive layouts.

Avoid using cards when a simple text section provides better clarity.

---

# Do

✔ Maintain consistent spacing.

✔ Keep content concise.

✔ Use high-quality imagery.

✔ Prioritize important information.

✔ Ensure clickable cards are clearly identifiable.

---

# Don't

✘ Overload cards with excessive text.

✘ Mix unrelated information.

✘ Add unnecessary buttons.

✘ Use decorative shadows.

✘ Place multiple competing primary actions within one card.

---

# Testing Checklist

Verify:

- Layout consistency.
- Image responsiveness.
- Keyboard accessibility.
- Focus visibility.
- Hover behaviour.
- Responsive layouts.
- Screen reader support.
- Stable layout during image loading.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Colors | Color System |
| Typography | Typography |
| Spacing | Spacing System |
| Elevation | Elevation & Shadows |
| Motion | Motion |
| Accessibility | Accessibility |
| Buttons | Button Component |
| Tokens | Design Tokens |

---

# Related Documents

- Buttons
- Color System
- Typography
- Elevation & Shadows
- Motion
- Accessibility
- Design Tokens

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Card component specification |