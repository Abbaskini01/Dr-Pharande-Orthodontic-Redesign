# ADR-001 — Choose Next.js

**Status:** Accepted

**Date:** 30 July 2026

**Decision Makers:** Product Team

---

# Context

The project requires a modern web framework capable of delivering a fast, accessible, search-engine-friendly experience while remaining maintainable and scalable.

The website must support:

- Excellent SEO
- Fast page loading
- Responsive UI
- Component reusability
- Future AI integrations
- Easy deployment

---
# Decision Drivers

The following priorities guided this decision:

- Excellent Search Engine Optimization (SEO)
- High performance and Core Web Vitals
- Strong accessibility support
- Scalability for future features
- Maintainable project structure
- Developer productivity
- Large ecosystem and community support
- Straightforward deployment workflow
- 
# Decision

The project will use **Next.js** as the primary React framework.

Next.js will provide:

- Server-side rendering (SSR) where appropriate
- Static Site Generation (SSG) where appropriate
- File-based routing
- Image optimization
- Metadata management
- Performance optimizations
- Strong TypeScript support

---

# Alternatives Considered

## React + Vite

### Pros

- Lightweight
- Fast development server
- Simple configuration

### Cons

- Additional work required for SEO
- Manual routing configuration
- Less optimized for content-heavy websites

---

## Astro

### Pros

- Excellent performance
- Minimal JavaScript

### Cons

- Smaller ecosystem
- Less familiar to many React developers
- More limited when building interactive applications

---

## Remix

### Pros

- Strong routing model
- Good performance

### Cons

- Smaller ecosystem
- Less community adoption compared to Next.js

---

# Rationale

Next.js provides the best balance between developer experience, performance, SEO, scalability, and long-term maintainability.

It aligns well with the project's goals and offers a straightforward path for future enhancements.

---

# Consequences

## Positive

- Strong SEO support
- Excellent performance
- Mature ecosystem
- Straightforward deployment on Vercel
- Large community and documentation

## Trade-offs

- Additional framework complexity compared to plain React
- Some features require understanding of rendering strategies
- Build process is more sophisticated than Vite

---

# Related Documents

- Technical Vision
- Design Principles
- Product Requirements Document
- SEO Strategy (ADR-006)

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial decision |