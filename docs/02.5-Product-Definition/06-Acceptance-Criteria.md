# Acceptance Criteria

**Project:** Dr. Pharande Orthodontic Clinic – Premium Website Redesign

**Document Owner:** Product Team

**Version:** 1.0

**Status:** Approved

**Last Updated:** 30 July 2026

---

# 1. Purpose

This document defines the measurable conditions that determine whether a feature is complete and ready for release.

Acceptance Criteria ensure that Product, Design, Engineering, and QA share the same understanding of expected behavior.

Each criterion maps to one or more Functional Requirements (FR) and User Stories (US).

---

# 2. Acceptance Criteria Format

Each criterion uses the following structure:

**AC-XXX.X**

**Related User Story:** US-XXX

**Related Functional Requirement:** FR-XXX

**Given** ...

**When** ...

**Then** ...

---

# 3. Homepage

## AC-001.1

**Related User Story:** US-001

**Related Functional Requirement:** FR-001

**Given** a visitor opens the website

**When** the homepage loads

**Then** the homepage displays correctly on mobile, tablet, and desktop without layout issues.

---

## AC-001.2

**Related Functional Requirement:** FR-003

**Given** the homepage is displayed

**When** the visitor views the hero section

**Then** a clear primary "Book Appointment" call-to-action is visible.

---

# 4. Doctor Profile

## AC-002.1

**Related User Story:** US-002

**Related Functional Requirement:** FR-005

**Given** a visitor opens the Doctor page

**When** the page finishes loading

**Then** qualifications, experience, biography, certifications, and professional photo are displayed.

---

# 5. Treatment Pages

## AC-003.1

**Related User Story:** US-003

**Related Functional Requirement:** FR-007

**Given** a visitor opens any treatment page

**When** the page renders

**Then** treatment overview, benefits, procedure, FAQs, and CTA are displayed.

---

# 6. Appointment Booking

## AC-004.1

**Related User Story:** US-007

**Related Functional Requirement:** FR-010

**Given** the booking form is displayed

**When** the user submits valid information

**Then** the booking request is accepted and a confirmation message is shown.

---

## AC-004.2

**Related Functional Requirement:** FR-011

**Given** required fields are incomplete

**When** the user submits the form

**Then** validation errors appear next to the relevant fields.

---

## AC-004.3

**Related Functional Requirement:** FR-014

**Given** a successful booking

**When** confirmation is displayed

**Then** the next steps are clearly explained.

---

# 7. Contact Page

## AC-005.1

**Related User Story:** US-008

**Related Functional Requirement:** FR-015

**Given** a visitor opens the Contact page

**When** the page loads

**Then** all contact methods are visible and functional.

---

## AC-005.2

**Related Functional Requirement:** FR-017

**Given** a visitor clicks the WhatsApp button

**When** WhatsApp is available

**Then** the official clinic conversation opens.

---

# 8. Before & After Gallery

## AC-006.1

**Related User Story:** US-005

**Related Functional Requirement:** FR-020

**Given** a visitor opens the gallery

**When** images load

**Then** they are displayed clearly without noticeable layout shifts.

---

# 9. Testimonials

## AC-007.1

**Related User Story:** US-006

**Related Functional Requirement:** FR-018

**Given** testimonials are available

**When** the visitor scrolls to the section

**Then** authentic reviews are displayed in a readable format.

---

# 10. FAQ

## AC-008.1

**Related User Story:** US-010

**Related Functional Requirement:** FR-023

**Given** the FAQ page

**When** a visitor selects a question

**Then** only the selected answer expands without affecting unrelated items.

---

# 11. Navigation

## AC-009.1

**Related User Story:** US-012

**Related Functional Requirement:** FR-025

**Given** a visitor navigates between pages

**When** navigation completes

**Then** the active page is clearly indicated.

---

# 12. Accessibility

## AC-010.1

**Related User Story:** US-014

**Related Functional Requirement:** FR-031

**Given** a keyboard-only user

**When** navigating through the website

**Then** all interactive elements are reachable and operable.

---

# 13. Performance

## AC-011.1

**Related User Story:** US-013

**Related NFR:** NFR-001

**Given** a production deployment

**When** Lighthouse is executed

**Then** the Performance score is at least 95.

---

# 14. Definition of Done

A feature is considered complete only if:

- Product approval received
- UX review completed
- UI implemented
- Functional requirements satisfied
- Acceptance criteria satisfied
- Responsive testing passed
- Accessibility verified
- Performance targets achieved
- Code review completed
- Production build successful

---

# 15. Approval

| Role | Status |
|------|--------|
| Product Team | ✅ Approved |
| QA Team | Pending |
| Engineering Team | Pending |

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial Acceptance Criteria |