# Treatment Page Template Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Template:** Treatment Page

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 31 July 2026

---

# Purpose

The Treatment Page template provides a standardized blueprint for presenting orthodontic treatments in a clear, educational, and conversion-focused manner.

It is intended to be reused for all current and future treatments offered by the clinic while maintaining consistent structure, branding, accessibility, and user experience.

---

# Business Objectives

Primary objectives:

- Increase consultation bookings.
- Educate prospective patients.
- Improve treatment discoverability.

Secondary objectives:

- Strengthen SEO.
- Increase trust.
- Reduce patient uncertainty.
- Encourage exploration of related treatments.

---

# User Goals

Visitors should quickly understand:

- What the treatment is.
- Who it is suitable for.
- Benefits.
- Treatment process.
- Expected timeline.
- Frequently asked questions.
- How to book a consultation.

---

# Target Audience

Primary:

- Adults considering orthodontic treatment.
- Parents researching treatment for children.

Secondary:

- Returning patients.
- Referring dentists.
- Healthcare professionals.

---

# Components Used

The template assembles the following approved components:

- Navigation
- Hero
- Cards
- Gallery
- Testimonials
- Accordion
- CTA
- Footer

No treatment-specific components should be created unless approved through the Design System governance process.

---

# Information Architecture

```
Navigation

↓

Hero

↓

Treatment Overview

↓

Who Is It For?

↓

Benefits

↓

Treatment Process

↓

Before & After Gallery

↓

Patient Testimonials

↓

Frequently Asked Questions

↓

Related Treatments

↓

Consultation CTA

↓

Footer
```

---

# Hero Section

## Purpose

Immediately identify the treatment and communicate its primary value.

### Content

Include:

- Treatment title
- Supporting description
- Hero image
- Primary CTA

Example:

```
Invisalign®

A Comfortable and Nearly Invisible Way to Straighten Your Smile.

Book a Consultation
```

---

# Treatment Overview

Provide:

- Simple explanation.
- Key objectives.
- Suitable patients.

Content should prioritize clarity over technical language.

---

# Who Is It For?

Help visitors determine whether the treatment suits their needs.

Examples:

- Adults
- Teenagers
- Mild crowding
- Bite correction
- Cosmetic improvements

---

# Benefits

Present benefits using Cards.

Example benefits:

- Improved confidence
- Better oral health
- Comfortable treatment
- Predictable results
- Easy maintenance

Benefits should focus on patient outcomes.

---

# Treatment Process

Explain the journey step by step.

Example:

```
Consultation

↓

Diagnosis

↓

Treatment Planning

↓

Active Treatment

↓

Regular Reviews

↓

Completion

↓

Retention
```

Each step should contain a concise explanation.

---

# Estimated Timeline

Display an indicative treatment timeline.

Example:

| Stage | Typical Duration |
|--------|-----------------:|
| Consultation | 30–60 minutes |
| Treatment Planning | 1–2 weeks |
| Active Treatment | Varies |
| Retention | Ongoing |

Timelines should be presented as estimates only.

---

# Before & After Gallery

Purpose:

Demonstrate treatment outcomes.

Requirements:

- Patient consent.
- High-quality photography.
- Consistent presentation.
- Responsive image gallery.

---

# Patient Testimonials

Include:

- Patient name
- Testimonial
- Treatment received
- Rating (optional)

Display only verified testimonials.

---

# Frequently Asked Questions

Use the Accordion component.

Suggested questions:

- Is it painful?
- How long does treatment take?
- How often are appointments required?
- How should I care for the appliance?
- What happens after treatment?

---

# Related Treatments

Recommend complementary or alternative treatments.

Example:

```
Ceramic Braces

↓

Metal Braces

↓

Retainers
```

Recommendations should be educational rather than promotional.

---

# Consultation CTA

The final section should encourage booking.

Examples:

```
Book Your Consultation

Start Your Smile Journey

Schedule an Appointment
```

Only one primary CTA should receive visual emphasis.

---

# Content Guidelines

Content should:

- Use patient-friendly language.
- Avoid exaggerated claims.
- Be medically accurate.
- Explain terminology when necessary.
- Maintain a reassuring tone.

---

# Responsive Behaviour

## Mobile

- Single-column layout.
- Full-width CTA.
- Optimized gallery.
- Stacked cards.

---

## Tablet

- Flexible grid layouts.
- Improved spacing.

---

## Desktop

- Multi-column sections.
- Larger imagery.
- Balanced whitespace.

---

# Accessibility

Treatment pages must support:

- Semantic HTML landmarks.
- Logical heading hierarchy.
- Keyboard navigation.
- Accessible forms.
- Screen readers.
- WCAG 2.2 AA compliance.

All media must include descriptive alternative text.

---

# Performance

Performance targets:

- LCP < 2.5 seconds
- CLS < 0.1
- INP < 200 ms

Recommendations:

- Optimize hero images.
- Lazy-load gallery media.
- Compress assets.
- Minimize JavaScript.

---

# SEO Considerations

Every treatment page should include:

- Unique title tag.
- Unique meta description.
- Canonical URL.
- Treatment-specific keywords.
- FAQ schema.
- Breadcrumb schema.
- Internal links.
- Optimized image alt text.

---

# Analytics

Recommended events:

```
Treatment Viewed

↓

Gallery Interaction

↓

FAQ Expanded

↓

Related Treatment Click

↓

Consultation CTA Click

↓

Booking Started
```

---

# Acceptance Criteria

The template is complete when:

- All required sections are implemented.
- Responsive layouts are verified.
- Accessibility requirements are met.
- Performance targets are achieved.
- SEO metadata is complete.
- Analytics events are configured.
- Approved components are used consistently.

---

# Testing Checklist

Verify:

- Hero renders correctly.
- Treatment overview is readable.
- Benefits display correctly.
- Timeline is accurate.
- Gallery loads efficiently.
- FAQ interactions work.
- Related treatments navigate correctly.
- CTA remains visible.
- Accessibility tests pass.
- Performance metrics meet targets.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Hero | Hero Component |
| Cards | Cards Component |
| Gallery | Gallery Component |
| Testimonials | Testimonials Component |
| Accordion | Accordion Component |
| CTA | CTA Component |
| Responsive Behaviour | Responsive Patterns |
| Treatment Pattern | Treatment Pages |
| Accessibility | Accessibility |

---

# Related Documents

- Treatment Pages Pattern
- Hero
- Cards
- Gallery
- Testimonials
- Accordion
- CTA
- Responsive Patterns

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 31 July 2026 | Initial Treatment Page template specification |