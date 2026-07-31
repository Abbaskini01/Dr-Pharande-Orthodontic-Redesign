# User Flows

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# Purpose

This document defines the primary user journeys through the website.

Each user flow describes how a visitor completes a specific goal, the expected system behavior, and how the journey supports business objectives.

These flows guide UX design, frontend implementation, QA testing, and future optimization.

---

# Flow Overview

| Flow ID | Goal |
|----------|------|
| UF-001 | Learn about the clinic |
| UF-002 | Explore treatments |
| UF-003 | Book an appointment |
| UF-004 | View smile gallery |
| UF-005 | Read testimonials |
| UF-006 | Find contact information |
| UF-007 | Read educational articles |

---

# UF-001 — Learn About the Clinic

## Objective

Help first-time visitors understand who the clinic is and why they should trust it.

### Primary Actor

Prospective Patient

### Trigger

User lands on the homepage.

### Preconditions

- Website is accessible.
- Homepage loads successfully.

### Main Success Scenario

1. User opens Homepage.
2. Reads clinic overview.
3. Navigates to About page.
4. Reviews doctor's profile.
5. Understands clinic expertise.
6. Returns to Homepage or continues exploring.

### Alternative Flow

User directly visits the About page from search results.

### Exception Flow

About page fails to load.

System displays a user-friendly error message and offers navigation back to the homepage.

### Related User Stories

- US-001
- US-002

### Related Functional Requirements

- FR-001
- FR-005

### Success Metrics

- Time on About page
- Bounce rate
- Navigation completion rate

---

# UF-002 — Explore Treatments

## Objective

Enable visitors to understand available orthodontic treatments.

### Primary Actor

Prospective Patient

### Trigger

User selects "Treatments."

### Main Success Scenario

1. Homepage
2. Treatments
3. Select treatment
4. Read treatment details
5. Review FAQs
6. Book consultation

### Alternative Flow

User enters directly through a treatment page from Google Search.

### Exception Flow

Requested treatment page unavailable.

### Related User Stories

- US-003

### Related Functional Requirements

- FR-007
- FR-008

### Success Metrics

- Treatment page engagement
- CTA click-through rate

---

# UF-003 — Book Appointment

## Objective

Allow visitors to schedule a consultation.

### Primary Actor

Prospective Patient

### Trigger

User clicks "Book Appointment."

### Preconditions

Booking page available.

### Main Success Scenario

1. Open booking page.
2. Complete required fields.
3. Submit form.
4. Receive confirmation.
5. Receive next-step instructions.

### Alternative Flow

User begins from a treatment page CTA.

### Exception Flow

Validation fails.

Inline validation messages guide the user to resolve errors.

### Related User Stories

- US-007

### Related Functional Requirements

- FR-010
- FR-011
- FR-014

### Success Metrics

- Booking conversion rate
- Form completion rate
- Validation error rate

---

# UF-004 — View Smile Gallery

## Objective

Build confidence through before-and-after treatment results.

### Primary Actor

Prospective Patient

### Trigger

User selects "Smile Gallery."

### Main Success Scenario

1. Homepage
2. Gallery
3. Browse cases
4. Gain confidence
5. Book consultation

### Related User Stories

- US-005

### Related Functional Requirements

- FR-020

---

# UF-005 — Read Testimonials

## Objective

Build trust using authentic patient experiences.

### Main Success Scenario

1. Homepage
2. Testimonials
3. Read reviews
4. Continue to booking

### Related User Stories

- US-006

### Related Functional Requirements

- FR-018

---

# UF-006 — Contact the Clinic

## Objective

Help visitors reach the clinic quickly.

### Main Success Scenario

1. Homepage
2. Contact
3. Choose communication method
4. Contact clinic

### Utility Actions

- Phone
- WhatsApp
- Email
- Google Maps

### Related User Stories

- US-008

### Related Functional Requirements

- FR-015
- FR-017

---

# UF-007 — Read Educational Content

## Objective

Educate visitors and improve SEO.

### Main Success Scenario

1. Homepage
2. Blog
3. Select article
4. Continue reading
5. Explore treatments
6. Book consultation

### Related User Stories

- US-010

### Related Functional Requirements

- FR-023

---

# Cross-Flow Principles

All user flows should:

- Minimize unnecessary steps.
- Maintain navigation consistency.
- Support keyboard accessibility.
- Preserve user orientation.
- Encourage booking without interrupting the user.

---

# Flow Traceability

| Flow | User Story | Functional Requirement |
|------|------------|------------------------|
| UF-001 | US-001 | FR-001 |
| UF-002 | US-003 | FR-007 |
| UF-003 | US-007 | FR-010 |
| UF-004 | US-005 | FR-020 |
| UF-005 | US-006 | FR-018 |
| UF-006 | US-008 | FR-015 |
| UF-007 | US-010 | FR-023 |

---

# Related Documents

- Website Sitemap
- Navigation System
- Page Specifications
- Functional Requirements
- Acceptance Criteria

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial User Flows |