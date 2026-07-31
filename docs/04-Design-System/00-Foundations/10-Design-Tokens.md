# Design Tokens

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the semantic design tokens used throughout the project.

Design tokens establish a shared language between designers and developers by representing visual design decisions as reusable, implementation-independent values.

Tokens should be referenced throughout the design system instead of hard-coded values.

---

# Objectives

The Design Token system aims to:

- Standardize implementation.
- Improve consistency.
- Simplify maintenance.
- Support scalability.
- Enable future theming.
- Reduce duplication.
- Improve collaboration between design and engineering.

---

# Token Philosophy

Design decisions should be referenced by meaning rather than appearance.

Instead of:

```
Blue

16px

Drop Shadow
```

Use:

```
color-primary

space-4

elevation-2
```

Semantic naming allows implementation details to change without affecting component behavior.

---

# Token Categories

The project defines the following token groups:

- Color
- Typography
- Spacing
- Grid
- Border Radius
- Elevation
- Motion
- Breakpoints
- Opacity
- Z-Index

---

# Naming Convention

Tokens follow predictable semantic naming.

Examples:

```
color-primary

text-primary

space-4

font-size-body

elevation-2

radius-md

motion-fast

breakpoint-lg
```

Avoid implementation-specific names.

---

# Color Tokens

Examples:

| Token | Purpose |
|--------|----------|
| color-primary | Brand color |
| color-secondary | Supporting brand |
| color-accent | Highlights |
| surface-default | Main background |
| surface-elevated | Cards |
| text-primary | Main content |
| text-secondary | Supporting text |
| border-default | Standard borders |
| status-success | Success states |
| status-warning | Warning states |
| status-error | Error states |

---

# Typography Tokens

Examples:

| Token | Purpose |
|--------|----------|
| font-family-primary | Primary font |
| font-family-secondary | Secondary font |
| font-size-display | Hero text |
| font-size-h1 | Heading 1 |
| font-size-body | Body text |
| font-size-caption | Captions |
| font-weight-bold | Bold weight |
| line-height-body | Paragraph spacing |

---

# Spacing Tokens

Examples:

| Token | Usage |
|--------|-------|
| space-0 | No spacing |
| space-1 | Small adjustments |
| space-2 | Compact spacing |
| space-4 | Default spacing |
| space-6 | Section spacing |
| space-8 | Large spacing |
| space-10 | Hero spacing |

---

# Grid Tokens

Examples:

| Token | Purpose |
|--------|----------|
| container-sm | Mobile container |
| container-md | Tablet container |
| container-lg | Desktop container |
| grid-columns | Standard columns |
| gutter-default | Grid gutters |

---

# Border Radius Tokens

Examples:

| Token | Usage |
|--------|-------|
| radius-none | Sharp corners |
| radius-sm | Small rounding |
| radius-md | Default components |
| radius-lg | Cards |
| radius-xl | Hero elements |
| radius-full | Circular elements |

---

# Elevation Tokens

Examples:

| Token | Usage |
|--------|-------|
| elevation-0 | Flat surfaces |
| elevation-1 | Cards |
| elevation-2 | Dropdowns |
| elevation-3 | Sticky navigation |
| elevation-4 | Drawers |
| elevation-5 | Modals |

---

# Motion Tokens

Examples:

| Token | Usage |
|--------|-------|
| motion-fast | Hover |
| motion-normal | Component transitions |
| motion-slow | Dialog transitions |
| easing-standard | Standard easing |
| easing-emphasized | Larger transitions |

---

# Breakpoint Tokens

Examples:

| Token | Purpose |
|--------|----------|
| breakpoint-sm | Mobile |
| breakpoint-md | Tablet |
| breakpoint-lg | Desktop |
| breakpoint-xl | Large desktop |

---

# Z-Index Tokens

Examples:

| Token | Usage |
|--------|-------|
| z-base | Standard content |
| z-navigation | Navigation |
| z-dropdown | Dropdowns |
| z-drawer | Side panels |
| z-modal | Dialogs |
| z-toast | Notifications |
| z-tooltip | Tooltips |

---

# Platform Mapping

Every token should map consistently across platforms.

| Semantic Token | Figma Variable | CSS Variable | Tailwind Theme | TypeScript Constant |
|----------------|----------------|--------------|----------------|---------------------|
| color-primary | color/primary | --color-primary | primary | COLOR_PRIMARY |
| surface-default | surface/default | --surface-default | surface | SURFACE_DEFAULT |
| text-primary | text/primary | --text-primary | text-primary | TEXT_PRIMARY |
| space-4 | spacing/4 | --space-4 | spacing.4 | SPACE_4 |
| elevation-2 | elevation/2 | --elevation-2 | shadow-md | ELEVATION_2 |
| radius-md | radius/md | --radius-md | rounded-md | RADIUS_MD |

---

# Token Usage Rules

Designers should:

- Use semantic variables.
- Avoid direct color values.
- Avoid custom spacing.
- Reuse existing tokens.

Developers should:

- Reference tokens.
- Avoid hard-coded values.
- Keep components implementation-independent.

---

# Versioning

Changes to tokens should be version controlled.

Breaking changes include:

- Removing tokens.
- Renaming tokens.
- Changing semantic meaning.

Adding new tokens is considered non-breaking when existing tokens remain functional.

---

# Governance

Before introducing a new token:

- Verify no equivalent token exists.
- Ensure semantic naming.
- Document the purpose.
- Update related documentation.
- Review implementation impact.

---

# Example Workflow

```
Design Decision

↓

Design Token

↓

Figma Variable

↓

CSS Variable

↓

Tailwind Theme

↓

React Component

↓

Rendered UI
```

---

# Common Mistakes to Avoid

Avoid:

- Hard-coded colors.
- Arbitrary spacing values.
- Duplicate tokens.
- Implementation-specific names.
- Unused tokens.
- Inconsistent naming conventions.

---

# Traceability

| Token Category | Related Foundation |
|----------------|--------------------|
| Colors | Color System |
| Typography | Typography |
| Spacing | Spacing System |
| Grid | Grid System |
| Elevation | Elevation & Shadows |
| Motion | Motion |
| Accessibility | Accessibility |
| Components | Component Library |

---

# Related Documents

- Color System
- Typography
- Spacing System
- Grid System
- Elevation & Shadows
- Motion
- Accessibility
- Component Library

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Design Tokens documentation |