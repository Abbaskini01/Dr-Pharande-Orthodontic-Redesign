# Accordion Component Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Component:** Accordion

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

The Accordion component allows users to progressively reveal and hide related content.

It reduces visual clutter while keeping important information easily accessible. Accordions are especially effective for FAQs, treatment details, patient instructions, pricing information, and policy explanations.

---

# Design Goals

The Accordion component should:

- Improve content discoverability.
- Reduce page length.
- Support progressive disclosure.
- Maintain accessibility.
- Preserve reading flow.
- Scale across all devices.

---

# Component Anatomy

```
+------------------------------------------------------+

Question / Title

(Optional Icon)

Chevron Indicator

--------------------------------------------------------

Expanded Content

(Optional Links)

(Optional CTA)

+------------------------------------------------------+
```

Structure

```
Accordion

├── Container
├── Header
│   ├── Title
│   ├── Optional Leading Icon
│   └── Expand / Collapse Indicator
├── Content Panel
├── Optional Supporting Content
└── Divider (Optional)
```

---

# Component Responsibilities

Header

Communicates the topic.

Chevron Indicator

Shows expansion state.

Content Panel

Displays hidden information.

Container

Maintains spacing and grouping.

---

# Supported Use Cases

The Accordion component is suitable for:

- Frequently Asked Questions
- Treatment Information
- Pricing Details
- Clinic Policies
- Patient Instructions
- Appointment Guidelines
- Post-treatment Care
- Insurance Information

It should not be used for unrelated content or primary navigation.

---

# Variants

## Standard

Default accordion with a title and expandable content.

---

## Bordered

Includes visible borders to improve separation.

---

## Elevated

Uses elevation to distinguish grouped content.

---

## Compact

Reduced spacing for dense information layouts.

---

# Expansion Behaviour

Supported modes:

### Single Expand

Only one panel may remain open.

Recommended for FAQ pages.

---

### Multiple Expand

Several panels may remain open simultaneously.

Recommended for educational content and treatment guides.

---

# States

Each accordion supports:

| State | Description |
|--------|-------------|
| Collapsed | Default |
| Expanded | Content visible |
| Hover | Pointer interaction |
| Focus | Keyboard navigation |
| Disabled | Not expandable |

---

# Interaction Behaviour

Selecting the accordion header should:

```
Header Click

↓

Expand Animation

↓

Content Revealed

↓

Chevron Rotates
```

Collapsing follows the reverse sequence.

---

# Content Guidelines

Accordion titles should:

- Ask a question.
- Clearly identify the topic.
- Remain concise.

Good examples:

```
How long does treatment take?

↓

What is Invisalign?

↓

Do you provide EMI options?
```

Avoid vague titles.

---

# Content Panel

Expanded content may include:

- Paragraphs
- Lists
- Images
- Buttons
- Links
- Videos
- Downloadable documents

Content should remain concise and well structured.

---

# Icons

Optional leading icons may be used for categorization.

Examples:

- Tooth
- Calendar
- Payment
- Clock
- Shield

Trailing icons should consistently indicate expand/collapse.

---

# Responsive Behaviour

Mobile

- Full-width layout.
- Comfortable touch targets.

Tablet

- Responsive spacing.

Desktop

- Width determined by surrounding layout.

Accordion width should remain consistent within a group.

---

# Accessibility

The Accordion component must support:

- Keyboard navigation.
- Semantic button elements.
- Screen reader announcements.
- ARIA expanded state.
- ARIA controls relationships.
- WCAG 2.2 AA compliance.

Expanded state should always be communicated programmatically.

---

# Keyboard Interaction

Supported interactions:

```
Tab

↓

Focus Header

↓

Enter / Space

↓

Expand or Collapse
```

Focus indicators must remain visible.

---

# Motion

Expansion should:

- Feel smooth.
- Avoid abrupt layout shifts.
- Respect reduced-motion preferences.

Animations should support comprehension rather than decoration.

---

# Design Tokens

Accordion should reference:

```
surface-default

surface-elevated

border-default

space-5

radius-md

motion-normal

elevation-1

text-primary

text-secondary
```

---

# Usage Guidelines

Use Accordions for:

- FAQs
- Treatment explanations
- Pricing information
- Policies
- Long-form educational content

Avoid using Accordions for:

- Primary navigation
- Critical warnings
- Time-sensitive alerts
- Single-line information

---

# Do

✔ Group related questions.

✔ Use descriptive headings.

✔ Keep answers concise.

✔ Maintain consistent spacing.

✔ Ensure keyboard accessibility.

---

# Don't

✘ Nest accordions inside accordions.

✘ Hide critical information that should always remain visible.

✘ Use inconsistent expansion behaviour.

✘ Overload a single accordion with unrelated content.

✘ Replace page navigation with accordions.

---

# Performance Considerations

Accordion components should:

- Avoid rendering expensive hidden content unnecessarily.
- Support lazy loading for large media.
- Maintain layout stability.
- Perform smoothly on low-powered devices.

---

# Testing Checklist

Verify:

- Expansion and collapse work correctly.
- Keyboard interaction functions correctly.
- Screen readers announce expanded state.
- Focus remains visible.
- Responsive layouts remain stable.
- Motion respects reduced-motion settings.
- Hidden content is inaccessible until expanded.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Motion | Motion |
| Typography | Typography |
| Spacing | Spacing System |
| Accessibility | Accessibility |
| Elevation | Elevation & Shadows |
| Design Tokens | Design Tokens |

---

# Related Documents

- Typography
- Motion
- Accessibility
- Design Tokens
- Cards
- Navigation

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Accordion component specification |