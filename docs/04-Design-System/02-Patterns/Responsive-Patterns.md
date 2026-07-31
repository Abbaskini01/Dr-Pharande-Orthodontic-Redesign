# Responsive Patterns Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Pattern:** Responsive Patterns

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 31 July 2026

---

# Purpose

The Responsive Patterns specification defines how layouts, components, navigation, typography, spacing, media, and interactions adapt across different screen sizes.

The objective is to provide a consistent, accessible, and high-quality experience regardless of device.

---

# Design Goals

Responsive patterns should:

- Prioritize mobile users.
- Scale gracefully.
- Preserve usability.
- Maintain readability.
- Optimize performance.
- Ensure accessibility.

---

# Responsive Philosophy

This design system follows a:

**Mobile-First Approach**

Design begins with the smallest supported viewport before progressively enhancing larger layouts.

```
Mobile

↓

Tablet

↓

Laptop

↓

Desktop

↓

Large Desktop
```

---

# Supported Breakpoints

| Device | Width |
|---------|------:|
| Mobile | 320–767 px |
| Tablet | 768–1023 px |
| Laptop | 1024–1279 px |
| Desktop | 1280–1535 px |
| Large Desktop | ≥1536 px |

These breakpoints serve as layout guidelines rather than strict device classifications.

---

# Layout Behaviour

## Mobile

Characteristics:

- Single-column layouts
- Full-width content
- Stacked components
- Large touch targets
- Reduced visual complexity

---

## Tablet

Characteristics:

- Transitional layouts
- Two-column sections where appropriate
- Increased spacing
- Flexible grids

---

## Laptop

Characteristics:

- Multi-column layouts
- Expanded navigation
- Larger media
- Improved whitespace

---

## Desktop

Characteristics:

- Full layout capability
- Rich visual hierarchy
- Balanced spacing
- Maximum readability

---

## Large Desktop

Characteristics:

- Wider content containers
- Additional whitespace
- Prevent excessive line lengths

---

# Container Width Strategy

Recommended content widths:

```
Small

↓

Medium

↓

Large

↓

Extra Large
```

Content should remain readable without stretching across extremely wide displays.

---

# Grid Behaviour

Recommended grid progression:

```
Mobile

1 Column

↓

Tablet

2 Columns

↓

Desktop

3–4 Columns
```

Examples:

- Gallery
- Cards
- Testimonials
- Blog Grid

---

# Typography Scaling

Typography should scale progressively.

Example hierarchy:

```
Mobile

H1

↓

Tablet

H1+

↓

Desktop

Largest H1
```

Body text should remain highly readable on all devices.

---

# Navigation Behaviour

## Mobile

- Hamburger menu
- Drawer navigation
- Large touch targets

---

## Tablet

- Hybrid navigation

---

## Desktop

- Horizontal navigation
- Sticky header
- Appointment CTA visible

---

# Images

Images should:

- Scale proportionally.
- Maintain aspect ratio.
- Support responsive formats.
- Lazy-load where appropriate.

Preferred formats:

- AVIF
- WebP

Fallback:

- JPEG
- PNG

---

# Forms

Forms should:

## Mobile

- Single column
- Full-width fields
- Large buttons

---

## Desktop

- Wider layout
- Comfortable spacing
- Improved scanning

---

# Cards

Responsive card layouts:

```
Mobile

1 Column

↓

Tablet

2 Columns

↓

Desktop

3–4 Columns
```

Cards should maintain consistent spacing and alignment.

---

# Gallery Behaviour

Gallery progression:

```
Mobile

2 Columns

↓

Tablet

3 Columns

↓

Desktop

4 Columns
```

---

# Hero Behaviour

## Mobile

Content

↓

Image

---

## Desktop

Content | Image

Two-column layout.

---

# CTA Behaviour

Primary button should remain prominent across all breakpoints.

On mobile:

- Full-width button preferred.

---

# Footer Behaviour

## Mobile

Single-column footer.

---

## Desktop

Multi-column footer.

---

# Motion

Responsive layouts should:

- Preserve motion consistency.
- Respect reduced-motion settings.
- Avoid disruptive transitions.

---

# Accessibility

Responsive patterns must support:

- Keyboard navigation
- Screen readers
- Zoom up to 200%
- Orientation changes
- WCAG 2.2 AA

No functionality should be lost on smaller devices.

---

# Performance

Responsive layouts should:

- Optimize media.
- Prevent layout shifts.
- Minimize JavaScript.
- Reduce unused assets.

---

# Analytics

Recommended events:

```
Viewport Category

↓

Navigation Used

↓

Orientation Change

↓

Responsive Menu Open

↓

Device Type
```

These metrics help identify usability issues across devices.

---

# Design Tokens

Responsive patterns reference:

```
Grid System

Spacing

Typography

Breakpoints

Motion

Accessibility
```

---

# Usage Guidelines

Responsive behaviour should:

- Prioritize readability.
- Preserve hierarchy.
- Minimize scrolling complexity.
- Avoid horizontal scrolling.
- Maintain predictable layouts.

---

# Do

✔ Design mobile-first.

✔ Test all breakpoints.

✔ Maintain comfortable spacing.

✔ Preserve accessibility.

✔ Optimize performance.

---

# Don't

✘ Hide essential functionality.

✘ Depend on hover interactions.

✘ Stretch content excessively.

✘ Introduce inconsistent layouts.

✘ Ignore landscape orientation.

---

# Testing Checklist

Verify:

- Mobile layouts.
- Tablet layouts.
- Desktop layouts.
- Orientation changes.
- Keyboard navigation.
- Touch targets.
- Typography scaling.
- Image optimization.
- Layout stability.
- Accessibility compliance.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Grid | Grid System |
| Spacing | Spacing System |
| Typography | Typography |
| Navigation | Navigation |
| Accessibility | Accessibility |
| Motion | Motion |

---

# Related Documents

- Grid System
- Typography
- Navigation
- Hero
- Gallery
- Forms
- Templates

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 31 July 2026 | Initial Responsive Patterns specification |