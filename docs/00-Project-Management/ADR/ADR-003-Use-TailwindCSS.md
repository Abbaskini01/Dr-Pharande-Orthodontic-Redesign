# ADR-003 — Use Tailwind CSS

**Status:** Accepted

**Date:** 30 July 2026

**Decision Makers:** Product Team

---

# Context

The project requires a styling solution that enables rapid development while maintaining visual consistency, scalability, and maintainability.

The styling approach should support reusable UI components and an efficient design system.

---

# Decision Drivers

The following priorities guided this decision:

- Rapid UI development
- Consistent visual language
- Component reusability
- Small production bundle size
- Easy maintenance
- Excellent developer experience
- Seamless integration with Next.js

---

# Decision

The project will use **Tailwind CSS** as the primary styling framework.

Tailwind's utility-first approach will be combined with reusable React components to create a consistent and maintainable design system.

---

# Alternatives Considered

## Traditional CSS

### Pros

- Simple
- No additional dependencies

### Cons

- Difficult to scale
- Higher likelihood of duplicated styles

---

## CSS Modules

### Pros

- Scoped styles
- Good maintainability

### Cons

- More repetitive styling
- Less efficient for rapid UI development

---

## Styled Components

### Pros

- Component-scoped styling
- Dynamic styling support

### Cons

- Runtime overhead
- Additional complexity

---

# Rationale

Tailwind CSS provides an excellent balance between flexibility, maintainability, and development speed. It integrates naturally with modern React applications and supports the creation of reusable, consistent UI components.

---

# Consequences

## Positive

- Faster UI development
- Consistent spacing and typography
- Smaller CSS output after optimization
- Easier maintenance
- Strong community ecosystem

## Trade-offs

- Utility classes can make markup longer
- Requires familiarity with Tailwind conventions
- Team members need to understand utility-first styling

---

# Related Documents

- Technical Vision
- Design Principles
- Design System

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial decision |