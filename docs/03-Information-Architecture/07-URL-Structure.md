# URL Structure

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the URL architecture for the website.

A consistent URL structure improves search engine optimization (SEO), usability, analytics, maintainability, and future scalability.

All URLs should be human-readable, descriptive, and predictable.

---

# URL Design Principles

The URL architecture follows these principles:

- Simple
- Descriptive
- Consistent
- SEO-friendly
- Lowercase
- Hyphen-separated words
- Stable over time
- Easy to remember

---

# Base URL

```
https://www.drpharandeorthodontics.com
```

---

# Primary URL Structure

| Page | URL |
|------|-----|
| Home | / |
| About | /about |
| Treatments | /treatments |
| Smile Gallery | /smile-gallery |
| Testimonials | /testimonials |
| FAQ | /faq |
| Blog | /blog |
| Contact | /contact |
| Book Appointment | /book-appointment |

---

# Treatment URLs

Each treatment receives its own dedicated page.

Examples:

```
/treatments/braces

/treatments/clear-aligners

/treatments/kids-orthodontics

/treatments/adult-orthodontics

/treatments/retainers
```

---

# Blog URLs

Blog articles should follow a descriptive slug structure.

Example:

```
/blog/how-to-clean-braces

/blog/clear-aligners-vs-braces

/blog/what-to-expect-during-treatment
```

---

# URL Naming Rules

URLs shall:

- Use lowercase letters only.
- Separate words with hyphens (-).
- Avoid underscores (_).
- Avoid spaces.
- Avoid special characters.
- Avoid unnecessary numbers.
- Avoid dates unless required.

---

# Slug Guidelines

A good slug should:

- Describe the page.
- Include primary keywords naturally.
- Remain concise.
- Be readable by humans.

Example:

Good

```
/clear-aligners
```

Poor

```
/page?id=37
```

---

# Dynamic URL Guidelines

Future dynamic routes should follow consistent conventions.

Examples:

```
/blog/[slug]

/treatments/[slug]

/patient/[id]
```

Dynamic identifiers should never expose sensitive information.

---

# Canonical URL Strategy

Every page shall define a canonical URL to prevent duplicate content issues.

Example:

```
https://www.drpharandeorthodontics.com/treatments/braces
```

---

# Redirect Strategy

Permanent URL changes shall use **301 redirects**.

Temporary redirects shall use **302 redirects**.

Redirects should preserve SEO value and avoid broken links.

---

# Breadcrumb Mapping

| URL | Breadcrumb |
|------|------------|
| / | Home |
| /about | Home → About |
| /treatments | Home → Treatments |
| /treatments/braces | Home → Treatments → Braces |
| /blog | Home → Blog |
| /blog/how-to-clean-braces | Home → Blog → Article |
| /contact | Home → Contact |

---

# SEO Guidelines

URLs should:

- Contain relevant keywords.
- Avoid duplicate paths.
- Match page titles where appropriate.
- Remain stable after publication.
- Support search engine indexing.

---

# Analytics Considerations

The URL structure should support:

- Page-level analytics
- Funnel analysis
- Conversion tracking
- User journey analysis
- Search Console reporting

---

# Future Expansion

The architecture should accommodate future sections such as:

```
/patient-portal

/online-consultation

/cost-calculator

/resources

/ai-assistant
```

These additions should integrate without requiring changes to existing URLs.

---

# URL Governance

Before introducing a new URL:

- Confirm it follows naming conventions.
- Verify no duplicate path exists.
- Ensure it aligns with the sitemap.
- Validate SEO impact.
- Update the XML sitemap if applicable.

---

# Traceability

| URL | Related Page |
|------|--------------|
| / | PAGE-001 |
| /about | PAGE-002 |
| /treatments | PAGE-003 |
| /smile-gallery | PAGE-004 |
| /testimonials | PAGE-005 |
| /faq | PAGE-006 |
| /blog | PAGE-007 |
| /contact | PAGE-008 |
| /book-appointment | PAGE-009 |

---

# Related Documents

- Website Sitemap
- Navigation System
- Page Specifications
- SEO Strategy ADR
- Functional Requirements

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial URL Structure |