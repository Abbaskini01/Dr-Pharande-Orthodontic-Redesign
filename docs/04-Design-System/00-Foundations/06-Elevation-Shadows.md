# Elevation & Shadows

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the elevation system used throughout the project.

Elevation communicates hierarchy, focus, interaction, and spatial relationships between interface elements. Shadows should reinforce usability rather than serve as purely decorative effects.

---

# Objectives

The elevation system aims to:

- Create clear visual hierarchy.
- Indicate interactive elements.
- Improve component separation.
- Standardize layering.
- Support accessibility.
- Maintain visual consistency.

---

# Elevation Philosophy

Depth should be subtle and purposeful.

Elevation should help users understand:

- Which elements are interactive.
- Which elements are currently active.
- Which content has higher priority.
- Which UI layers temporarily sit above others.

Shadows should never distract from the content.

---

# Elevation Scale

| Level | Purpose |
|--------|----------|
| Elevation-0 | Flat surfaces |
| Elevation-1 | Cards |
| Elevation-2 | Dropdown menus |
| Elevation-3 | Sticky navigation |
| Elevation-4 | Drawers |
| Elevation-5 | Modal dialogs |
| Elevation-6 | Critical overlays |

Each level represents an increase in perceived depth.

---

# Surface Hierarchy

```
Page Background
        ↓
Section
        ↓
Card
        ↓
Dropdown
        ↓
Drawer
        ↓
Modal
        ↓
Critical Overlay
```

Higher layers should always appear visually above lower layers.

---

# Card Elevation

Cards should:

- Use subtle elevation.
- Maintain consistent spacing.
- Avoid heavy shadows.
- Increase slightly on hover when interactive.

---

# Navigation Elevation

Sticky navigation may use a small elevation to distinguish it from scrolling content.

Elevation should remain subtle to preserve a clean appearance.

---

# Modal Elevation

Modal dialogs should:

- Clearly separate from the background.
- Use an overlay.
- Maintain the highest elevation among standard UI components.
- Trap keyboard focus while open.

---

# Drawer Elevation

Side drawers and slide-out panels should appear above page content while remaining below modal dialogs.

---

# Dropdown Elevation

Dropdown menus should:

- Float above surrounding content.
- Maintain consistent spacing.
- Avoid overlapping unrelated interface elements where possible.

---

# Hover Elevation

Interactive components may increase elevation slightly during hover.

Examples include:

- Cards
- Buttons
- Interactive tiles

Hover elevation should be subtle and predictable.

---

# Focus Elevation

Keyboard focus should be communicated primarily through focus indicators.

Elevation may supplement focus but must never replace visible focus outlines.

---

# Overlay Behavior

Overlays should:

- Dim background content.
- Preserve context.
- Prevent interaction with underlying elements.
- Support accessibility requirements.

---

# Layering Strategy

The interface should maintain a consistent stacking order.

Example hierarchy:

```
Background

↓

Content

↓

Cards

↓

Dropdowns

↓

Sticky Navigation

↓

Drawers

↓

Modals

↓

Notifications

↓

Critical Dialogs
```

No component should arbitrarily override this hierarchy.

---

# Z-Index Guidelines

Layering should follow semantic levels rather than arbitrary values.

Examples:

```
z-background

z-content

z-navigation

z-dropdown

z-drawer

z-modal

z-toast

z-tooltip
```

Implementation details should be defined through design tokens.

---

# Accessibility Considerations

Elevation should never be the sole indicator of:

- Focus
- Selection
- Active state
- Validation

Alternative indicators include:

- Borders
- Labels
- Icons
- Color
- Focus outlines

---

# Performance Considerations

Shadows should:

- Minimize rendering cost.
- Avoid excessive blur.
- Remain lightweight.
- Be consistent across browsers.

Large shadow stacks should be avoided.

---

# Common Mistakes to Avoid

Avoid:

- Heavy shadows.
- Multiple shadow styles for identical components.
- Decorative depth without purpose.
- Excessive layering.
- Random z-index values.
- Components floating unnecessarily.

---

# Elevation Tokens

Examples:

```
elevation-0

elevation-1

elevation-2

elevation-3

elevation-4

elevation-5

shadow-card

shadow-modal

shadow-dropdown

shadow-hover
```

These semantic tokens should be referenced by components rather than hard-coded values.

---

# Implementation Notes

The implementation should follow this hierarchy:

```
Component

↓

Elevation Token

↓

CSS Variable

↓

Tailwind Utility

↓

Rendered Shadow
```

Avoid directly assigning shadow values within individual components.

---

# Traceability

| Section | Related Document |
|----------|------------------|
| Surface Hierarchy | Grid System |
| Layering | Design Tokens |
| Accessibility | Accessibility Guidelines |
| Components | Component Library |

---

# Related Documents

- Grid System
- Color System
- Accessibility
- Design Tokens
- Component Library

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Elevation & Shadows documentation |