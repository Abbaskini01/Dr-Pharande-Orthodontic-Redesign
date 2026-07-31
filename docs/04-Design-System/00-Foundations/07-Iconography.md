# Iconography

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the iconography system used throughout the project.

The icon system provides a consistent visual language that improves usability, reinforces meaning, and supports accessibility across all user interfaces.

---

# Objectives

The iconography system aims to:

- Improve visual communication.
- Reduce cognitive load.
- Maintain consistency.
- Support accessibility.
- Standardize icon usage.
- Simplify implementation.

---

# Icon Philosophy

Icons should support content rather than replace it.

Icons are intended to:

- Reinforce meaning.
- Improve recognition.
- Speed up navigation.
- Enhance scannability.

Icons should never become decorative distractions.

---

# Design Principles

Icons should be:

- Simple
- Recognizable
- Consistent
- Minimal
- Readable at small sizes
- Visually balanced

---

# Icon Style

The project uses a single icon style throughout the application.

Recommended characteristics:

- Outlined style
- Rounded corners
- Uniform stroke width
- Geometric consistency
- Minimal visual noise

Filled icons should only be introduced when a clear design requirement exists.

---

# Stroke Guidelines

All icons should maintain:

- Consistent stroke thickness.
- Consistent corner radius.
- Consistent visual weight.

Mixed icon styles should be avoided.

---

# Icon Sizes

| Token | Purpose |
|--------|----------|
| XS | Dense interfaces |
| SM | Supporting UI |
| MD | Default interface size |
| LG | Feature highlights |
| XL | Hero sections |
| XXL | Empty states |

Icons should scale proportionally across responsive layouts.

---

# Icon Categories

## Navigation

Examples:

- Home
- Menu
- Back
- Forward
- Search

---

## Actions

Examples:

- Add
- Edit
- Delete
- Save
- Share

---

## Communication

Examples:

- Phone
- Email
- WhatsApp
- Message

---

## Healthcare

Examples:

- Doctor
- Tooth
- Appointment
- Medical Record
- Clinic

Healthcare icons should remain simple and universally recognizable.

---

## Status

Examples:

- Success
- Warning
- Error
- Information

Status icons should always accompany descriptive text.

---

## Social Media

Examples:

- Instagram
- Facebook
- YouTube
- LinkedIn

Brand guidelines should be respected for official social media icons.

---

# Color Usage

Icons should inherit semantic color roles.

Examples:

- Primary
- Secondary
- Success
- Warning
- Error
- Disabled

Icons should not introduce new colors outside the design system.

---

# Accessibility Guidelines

Icons should never be the only way information is communicated.

Where meaning is important:

- Include labels.
- Provide descriptive text.
- Supply accessible names for assistive technologies.
- Hide decorative icons from screen readers where appropriate.

---

# Interactive Icons

Interactive icons should support:

- Hover
- Focus
- Active
- Disabled

Touch targets should remain comfortable on mobile devices.

---

# Empty States

Illustrative icons used in empty states should:

- Be visually lightweight.
- Support the accompanying message.
- Avoid overwhelming the page.

---

# Naming Convention

Icons should follow descriptive naming.

Examples:

```
icon-home

icon-phone

icon-calendar

icon-tooth

icon-arrow-right

icon-book-appointment
```

Avoid ambiguous names.

---

# Icon Library

The project should standardize on a single icon library.

Selection criteria include:

- Open-source licensing
- Consistent style
- Accessibility
- SVG support
- React compatibility
- Tree shaking support
- Active maintenance

---

# Implementation Notes

Icons should be implemented as reusable components.

Implementation flow:

```
Icon Name

↓

Icon Component

↓

Design Token

↓

SVG

↓

Rendered Icon
```

Avoid inline SVG duplication whenever possible.

---

# Common Mistakes to Avoid

Avoid:

- Mixing icon libraries.
- Inconsistent stroke widths.
- Decorative overuse.
- Tiny touch targets.
- Missing accessibility labels.
- Icons without context.

---

# Traceability

| Section | Related Document |
|----------|------------------|
| Icon Colors | Color System |
| Icon Spacing | Spacing System |
| Accessibility | Accessibility Guidelines |
| Components | Component Library |

---

# Related Documents

- Color System
- Spacing System
- Accessibility
- Component Library
- Design Tokens

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Iconography documentation |