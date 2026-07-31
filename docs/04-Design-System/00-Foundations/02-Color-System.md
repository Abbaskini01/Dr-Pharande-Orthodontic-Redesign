# Color System

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the color system used throughout the project.

Rather than assigning colors directly to components, the system uses semantic color roles. This improves consistency, accessibility, maintainability, and future scalability.

---

# Design Goals

The color system should:

- Build trust and professionalism.
- Support healthcare branding.
- Maintain visual consistency.
- Meet accessibility requirements.
- Simplify implementation.
- Support future theming.

---

# Color Philosophy

The visual identity should communicate:

- Professionalism
- Cleanliness
- Calmness
- Trust
- Modern healthcare
- Simplicity

Color should guide attention rather than dominate the interface.

---

# Color Hierarchy

The design system organizes colors into:

1. Brand Colors
2. Surface Colors
3. Text Colors
4. Border Colors
5. Semantic Colors
6. Interactive Colors
7. Focus Colors

---

# Brand Colors

Brand colors represent the visual identity of the clinic.

| Token | Purpose |
|--------|----------|
| Primary | Main brand color |
| Secondary | Supporting brand color |
| Accent | Highlight important elements |

Brand colors should primarily be used for:

- Buttons
- Links
- Icons
- Navigation
- CTAs
- Key highlights

---

# Surface Colors

Surface colors define page backgrounds and containers.

| Token | Purpose |
|--------|----------|
| Surface Primary | Main page background |
| Surface Secondary | Section backgrounds |
| Surface Elevated | Cards and modals |
| Surface Overlay | Dialog overlays |

Surface colors should provide strong visual separation while maintaining simplicity.

---

# Text Colors

Text colors should support readability across all devices.

| Token | Purpose |
|--------|----------|
| Text Primary | Main body text |
| Text Secondary | Supporting information |
| Text Tertiary | Less prominent content |
| Text Disabled | Disabled UI |
| Text Inverse | Text on dark surfaces |

---

# Border Colors

Border colors improve structure without creating unnecessary visual noise.

| Token | Purpose |
|--------|----------|
| Border Default | Standard borders |
| Border Strong | High emphasis |
| Border Focus | Focus indicators |

---

# Semantic Colors

Semantic colors communicate meaning.

| Token | Purpose |
|--------|----------|
| Success | Positive outcomes |
| Warning | Caution |
| Error | Validation failures |
| Info | Informational messages |

Semantic colors should never be used purely for decoration.

---

# Interactive States

Interactive elements should communicate state changes clearly.

| State | Purpose |
|-------|----------|
| Default | Initial state |
| Hover | Pointer interaction |
| Active | User selection |
| Focus | Keyboard navigation |
| Disabled | Unavailable interaction |

Every interactive component should define all supported states.

---

# Focus Indicators

Keyboard users must always know where focus exists.

Focus indicators should:

- Be clearly visible.
- Meet WCAG contrast requirements.
- Never rely solely on color.
- Remain consistent across components.

---

# Color Accessibility

All text and interactive elements should satisfy WCAG 2.2 AA contrast requirements.

Design reviews should verify:

- Text readability
- Button contrast
- Link visibility
- Focus visibility
- Error message clarity

Color must never be the only method used to communicate meaning.

Examples include:

- Error messages
- Success messages
- Required fields
- Validation feedback

These should also include icons, labels, or descriptive text.

---

# Dark Mode Readiness

Although dark mode is outside the initial MVP scope, the semantic color system should support future implementation.

Components should reference semantic tokens rather than hard-coded color values.

---

# Token Naming Convention

Tokens should follow predictable naming conventions.

Examples:

```
color-primary-50
color-primary-100
color-primary-500

surface-default
surface-elevated

text-primary
text-secondary

border-default

status-success

status-warning

status-error
```

---

# Usage Guidelines

### Use Brand Colors For

- Buttons
- Navigation
- CTAs
- Interactive links
- Icons

---

### Use Surface Colors For

- Backgrounds
- Cards
- Forms
- Sections
- Modals

---

### Use Semantic Colors For

- Validation
- Notifications
- Alerts
- Success states
- Error handling

---

# Common Mistakes to Avoid

Avoid:

- Hard-coded component colors
- Decorative overuse of accent colors
- Low contrast combinations
- Using red/green as the only status indicator
- Inconsistent button colors

---

# Implementation Notes

Developers should consume semantic tokens instead of raw color values.

Example:

```
Button
↓

Primary Token

↓

CSS Variable

↓

Actual Color Value
```

This abstraction simplifies future brand updates.

---

# Traceability

| Section | Related Document |
|----------|------------------|
| Brand Colors | Design Principles |
| Accessibility | Accessibility Guidelines |
| Tokens | Design Tokens |
| Components | Component Library |

---

# Related Documents

- Design Principles
- Typography
- Design Tokens
- Accessibility
- Component Library

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Color System |