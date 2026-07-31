# Typography

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the typography system used throughout the project.

The typography system establishes a consistent visual hierarchy, improves readability, enhances accessibility, and reinforces the clinic's professional identity.

---

# Typography Goals

The typography system should:

- Maximize readability.
- Create clear information hierarchy.
- Support responsive layouts.
- Improve accessibility.
- Maintain consistency.
- Reduce visual clutter.

---

# Typography Philosophy

Typography should communicate:

- Professionalism
- Trust
- Calmness
- Clarity
- Simplicity

The design should prioritize legibility over decorative styling.

---

# Font Families

## Primary Font

Purpose:

- Headings
- Navigation
- Buttons
- Labels

Recommended Characteristics:

- Modern
- Clean
- Highly readable
- Web optimized

---

## Secondary Font

Purpose:

- Long-form reading
- Blog content
- Articles

Should maintain excellent readability across extended paragraphs.

---

## Monospace Font

Purpose:

- Technical content (if required)
- Code examples
- Diagnostic information

Not intended for regular page content.

---

# Type Scale

| Level | Purpose |
|--------|----------|
| Display | Hero banners |
| H1 | Page title |
| H2 | Major section |
| H3 | Subsection |
| H4 | Component heading |
| H5 | Minor heading |
| H6 | Supporting heading |
| Body Large | Important body text |
| Body | Standard content |
| Body Small | Secondary information |
| Caption | Metadata |
| Label | Forms and buttons |

---

# Heading Hierarchy

Headings should follow semantic HTML.

```
H1

↓

H2

↓

H3

↓

H4

↓

H5

↓

H6
```

A page should contain only one H1.

Heading levels should never be skipped unless justified by document structure.

---

# Body Text

Body content should:

- Be concise.
- Support comfortable reading.
- Avoid excessive line lengths.
- Use sufficient spacing.

Paragraphs should remain easily scannable.

---

# Line Length

Recommended line length:

- 50–75 characters per line for long-form content.

This improves readability and reduces eye fatigue.

---

# Line Height

Body text should use generous line spacing.

Recommended:

- Comfortable reading rhythm.
- Adequate separation between paragraphs.
- Increased spacing for mobile devices where appropriate.

---

# Font Weight Usage

| Weight | Purpose |
|---------|----------|
| Regular | Body content |
| Medium | Labels |
| Semi-Bold | Section headings |
| Bold | Important headings |

Avoid unnecessary use of bold text.

---

# Text Alignment

Use left-aligned text for the majority of content.

Center alignment should be reserved for:

- Hero sections
- Key marketing messages
- Empty states

Avoid justified text.

---

# Responsive Typography

Typography should adapt across devices.

## Mobile

- Comfortable reading size.
- Reduced heading scale.
- Appropriate spacing.

---

## Tablet

- Balanced hierarchy.
- Improved spacing.

---

## Desktop

- Larger headings.
- Comfortable paragraph width.
- Enhanced visual hierarchy.

---

# Accessibility Guidelines

Typography should:

- Meet WCAG 2.2 AA standards.
- Maintain sufficient contrast.
- Avoid very small font sizes.
- Support browser zoom.
- Preserve readability at 200% zoom.

Never communicate information using typography alone.

---

# Links

Links should:

- Be distinguishable from body text.
- Include visible hover and focus states.
- Remain recognizable without relying solely on color.

---

# Forms

Form typography should include:

- Clear labels.
- Readable placeholders.
- Accessible helper text.
- Prominent validation messages.

---

# Internationalization Readiness

The typography system should support future localization by:

- Avoiding fixed-width containers.
- Allowing text expansion.
- Supporting Unicode character sets.

---

# Typography Tokens

Examples:

```
font-family-primary

font-family-secondary

font-size-display

font-size-h1

font-size-body

font-size-caption

font-weight-bold

line-height-body

letter-spacing-normal
```

These semantic tokens will be mapped in the Design Tokens document.

---

# Common Mistakes to Avoid

Avoid:

- Multiple font families without purpose.
- Excessive font weights.
- Small body text.
- Long unbroken paragraphs.
- Inconsistent heading hierarchy.
- Decorative fonts for primary content.

---

# Implementation Notes

Developers should reference typography tokens instead of hard-coded values.

Example:

```
Heading

↓

Typography Token

↓

CSS Variable

↓

Tailwind Utility

↓

Rendered Font
```

---

# Traceability

| Section | Related Document |
|----------|------------------|
| Typography Hierarchy | Design Principles |
| Accessibility | Accessibility Guidelines |
| Tokens | Design Tokens |
| Components | Component Library |

---

# Related Documents

- Design Principles
- Color System
- Accessibility
- Design Tokens
- Component Library

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Typography System |