# Treatment Pages Pattern Specification

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Pattern:** Treatment Pages

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 31 July 2026

---

# Purpose

The Treatment Pages pattern defines the standard structure, content hierarchy, and interaction flow for all orthodontic treatment pages.

The objective is to provide visitors with clear, trustworthy, and comprehensive information while guiding them toward scheduling a consultation.

Every treatment page should follow this pattern to ensure consistency across the website.

---

# Design Goals

Treatment pages should:

- Educate prospective patients.
- Build trust.
- Reduce uncertainty.
- Support informed decision-making.
- Encourage appointment bookings.
- Maintain accessibility.
- Scale as new treatments are introduced.

---

# Business Objectives

Primary objectives:

- Generate consultation requests.
- Increase treatment enquiries.
- Improve conversion rates.

Secondary objectives:

- Improve SEO.
- Increase engagement.
- Strengthen the clinic's credibility.
- Encourage exploration of related treatments.

---

# User Goals

Visitors should quickly understand:

- What the treatment is.
- Who it is suitable for.
- Benefits.
- Treatment process.
- Expected duration.
- Cost considerations.
- Frequently asked questions.
- How to book a consultation.

---

# Components Used

Treatment pages combine:

- Navigation
- Hero
- CTA
- Cards
- Gallery
- Testimonials
- Accordion
- Forms
- Footer

No new UI components should be introduced unless approved through the design system governance process.

---

# Standard Page Structure

```
Navigation

↓

Hero

↓

Treatment Overview

↓

Benefits

↓

Treatment Process

↓

Before & After Gallery

↓

Testimonials

↓

Frequently Asked Questions

↓

Consultation CTA

↓

Footer
```

This structure should remain consistent across all treatment pages.

---

# Hero Section

The Hero should include:

- Treatment name
- Short value proposition
- Supporting description
- Primary CTA
- Relevant imagery

Example:

```
Invisalign®

Clear Aligners for a Confident Smile

[Book Consultation]
```

---

# Treatment Overview

The overview should answer:

- What is the treatment?
- How does it work?
- Who is it for?

Avoid unnecessary clinical terminology.

---

# Benefits Section

Present key advantages using cards or icon lists.

Examples:

- Improved smile aesthetics
- Better oral health
- Comfortable treatment
- Predictable outcomes

Benefits should focus on patient outcomes rather than technical features.

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

Each step should include a brief explanation.

---

# Before & After Gallery

Display authentic treatment results.

Requirements:

- Patient consent obtained.
- Consistent photography.
- Minimal editing.
- Descriptive captions.

Gallery should follow the Gallery Component specification.

---

# Testimonials

Display verified patient feedback related to the treatment.

Include:

- Quote
- Patient name
- Treatment type
- Rating (if available)

Testimonials should reinforce credibility without overwhelming the page.

---

# FAQ Section

Use the Accordion component.

Common questions:

- Is the treatment painful?
- How long does treatment take?
- How much does it cost?
- Is it suitable for children?
- How often are follow-up visits required?

Answers should be concise and easy to understand.

---

# Consultation CTA

The page should conclude with a clear call-to-action.

Examples:

```
Book Consultation

Schedule an Appointment

Talk to Our Orthodontist
```

Only one primary CTA should be emphasized.

---

# Related Treatments

Optionally recommend complementary treatments.

Example:

```
Invisalign

↓

Retainers

↓

Ceramic Braces
```

Recommendations should be genuinely helpful rather than promotional.

---

# Content Guidelines

Content should:

- Use plain language.
- Focus on patient outcomes.
- Maintain an encouraging tone.
- Avoid exaggerated claims.
- Cite verifiable facts where appropriate.

---

# Responsive Behaviour

## Mobile

- Single-column layout.
- Stacked sections.
- Full-width CTAs.

---

## Tablet

- Flexible grids.
- Improved spacing.

---

## Desktop

- Multi-column layouts where appropriate.
- Balanced whitespace.
- Side-by-side content and visuals.

---

# Accessibility

Treatment pages must support:

- Semantic headings.
- Logical heading hierarchy.
- Keyboard navigation.
- Screen readers.
- Descriptive alternative text.
- WCAG 2.2 AA compliance.

Medical diagrams should include accompanying text explanations.

---

# Performance

Treatment pages should:

- Optimize all images.
- Lazy-load non-critical media.
- Prevent layout shifts.
- Prioritize Core Web Vitals.

---

# SEO Considerations

Each treatment page should include:

- Unique title tag.
- Unique meta description.
- Structured heading hierarchy.
- Descriptive image alt text.
- Internal links to related treatments.
- FAQ structured data where appropriate.

---

# Analytics

Recommended events:

```
Treatment Page Viewed

↓

CTA Click

↓

Gallery Viewed

↓

FAQ Expanded

↓

Booking Started
```

These events help evaluate engagement and conversion.

---

# Design Tokens

Treatment pages reference:

```
Typography

Spacing

Grid

Color System

Motion

Accessibility

Buttons

Cards

Accordion
```

---

# Usage Guidelines

Treatment pages should:

- Educate before persuading.
- Build trust progressively.
- Present one clear conversion path.
- Maintain consistent section ordering.

---

# Do

✔ Use authentic treatment information.

✔ Include real patient outcomes.

✔ Answer common questions.

✔ Maintain consistent page structure.

✔ Guide users toward consultation.

---

# Don't

✘ Make unrealistic promises.

✘ Overload pages with technical jargon.

✘ Use inconsistent layouts.

✘ Duplicate identical content across treatment pages.

✘ Hide booking options.

---

# Testing Checklist

Verify:

- All sections display correctly.
- Responsive layouts work.
- Gallery functions correctly.
- FAQ interactions work.
- CTA remains visible.
- Accessibility requirements are met.
- SEO metadata is present.
- Analytics events fire correctly.

---

# Traceability

| Requirement | Source Document |
|-------------|-----------------|
| Hero | Hero Component |
| CTA | CTA Component |
| Gallery | Gallery Component |
| Testimonials | Testimonials Component |
| Accordion | Accordion Component |
| Accessibility | Accessibility |
| Design Tokens | Design Tokens |

---

# Related Documents

- Hero
- CTA
- Gallery
- Testimonials
- Accordion
- Responsive Patterns
- Page Layouts

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 31 July 2026 | Initial Treatment Pages pattern specification |