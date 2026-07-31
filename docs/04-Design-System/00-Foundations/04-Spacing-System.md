# Spacing System

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the spacing system used throughout the project.

A consistent spacing system improves readability, visual hierarchy, layout consistency, scalability, and implementation efficiency across all screens and components.

---

# Objectives

The spacing system aims to:

- Create visual rhythm.
- Improve readability.
- Standardize layouts.
- Reduce design inconsistency.
- Simplify frontend implementation.
- Support responsive design.

---

# Spacing Philosophy

Whitespace is an active design element.

Spacing should:

- Separate unrelated content.
- Group related content.
- Improve scanning.
- Reduce cognitive load.
- Guide user attention.

Spacing should never be added arbitrarily.

---

# Base Unit

The design system is based on an **8-point spacing grid**.

The 8-point grid provides consistency across:

- Components
- Layouts
- Icons
- Forms
- Responsive screens

Smaller adjustments may use a 4-point increment where appropriate.

---

# Spacing Scale

| Token | Value | Typical Usage |
|--------|------:|---------------|
| Space-0 | 0px | No spacing |
| Space-1 | 4px | Fine adjustments |
| Space-2 | 8px | Small gaps |
| Space-3 | 12px | Compact spacing |
| Space-4 | 16px | Default component spacing |
| Space-5 | 24px | Cards and forms |
| Space-6 | 32px | Sections |
| Space-7 | 48px | Large content groups |
| Space-8 | 64px | Major page sections |
| Space-9 | 96px | Hero spacing |
| Space-10 | 128px | Large layout separation |

---

# Component Spacing

## Buttons

- Internal padding should remain consistent.
- Adjacent buttons should use standard spacing tokens.

---

## Cards

Cards should include consistent:

- Internal padding
- Header spacing
- Body spacing
- Footer spacing

---

## Forms

Forms should maintain:

- Consistent field spacing
- Label-to-input spacing
- Input-to-helper text spacing
- Section grouping

---

## Navigation

Navigation spacing should remain consistent across:

- Desktop
- Tablet
- Mobile

Interactive targets should not be crowded.

---

# Layout Spacing

Page layouts should define spacing between:

- Header and hero
- Hero and content
- Sections
- Footer

Major sections should use larger spacing tokens to create clear visual separation.

---

# Grid Gutters

Layouts should maintain consistent gutters.

Recommended principles:

- Equal horizontal spacing
- Consistent column gaps
- Predictable alignment

Grid spacing should scale appropriately across different screen sizes.

---

# Responsive Spacing

## Mobile

- Compact spacing.
- Prioritize visible content.
- Maintain comfortable touch targets.

---

## Tablet

- Increase section spacing.
- Improve breathing room.

---

## Desktop

- Generous whitespace.
- Wider layouts.
- Increased separation between major sections.

---

# Content Spacing

Text content should include consistent spacing between:

- Heading → Paragraph
- Paragraph → Paragraph
- Lists
- Images
- Quotes

Whitespace should improve readability rather than simply increase page length.

---

# Visual Grouping

Elements that belong together should be positioned closer than unrelated elements.

Example:

```
Heading
↓

Paragraph

↓

Button
```

These should appear as one logical group.

A larger spacing token should separate this group from the next section.

---

# Accessibility Considerations

Spacing should improve accessibility by:

- Increasing readability.
- Preventing accidental taps.
- Supporting touch interactions.
- Improving keyboard navigation.

Interactive elements should never appear visually crowded.

---

# Token Naming Convention

Spacing tokens should follow semantic naming.

Examples:

```
space-0
space-1
space-2
space-3
space-4
space-5
space-6
space-7
space-8
space-9
space-10
```

These tokens will be referenced throughout components instead of hard-coded values.

---

# Implementation Notes

Spacing should be implemented through design tokens.

Example:

```
Component

↓

Spacing Token

↓

CSS Variable

↓

Tailwind Utility

↓

Rendered Layout
```

Avoid hard-coded spacing wherever possible.

---

# Common Mistakes to Avoid

Avoid:

- Random spacing values.
- Inconsistent margins.
- Uneven padding.
- Mixing unrelated spacing scales.
- Crowded interfaces.
- Excessive whitespace without purpose.

---

# Traceability

| Section | Related Document |
|----------|------------------|
| Layout Spacing | Grid System |
| Component Spacing | Component Library |
| Responsive Rules | Responsive Patterns |
| Tokens | Design Tokens |

---

# Related Documents

- Design Principles
- Grid System
- Typography
- Design Tokens
- Component Library

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Spacing System |