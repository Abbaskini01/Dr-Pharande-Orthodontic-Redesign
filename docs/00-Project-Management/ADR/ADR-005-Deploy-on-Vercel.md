# ADR-005 — Deploy on Vercel

**Status:** Accepted

**Date:** 30 July 2026

**Decision Makers:** Product Team

---

# Context

The project requires a hosting platform that supports modern frontend frameworks, provides a streamlined deployment workflow, and minimizes operational overhead.

The deployment solution should enable rapid iteration while maintaining reliability, security, and performance.

---

# Decision Drivers

The following priorities guided this decision:

- Simple deployment workflow
- First-class Next.js support
- Global content delivery
- High availability
- Automatic HTTPS
- Continuous Deployment
- Low operational overhead

---

# Decision

The project will be deployed on **Vercel**.

The platform will provide:

- Automatic deployments from GitHub
- Preview deployments for pull requests
- Global Edge Network
- Automatic HTTPS
- Built-in analytics support
- Environment variable management

---

# Alternatives Considered

## Netlify

### Pros

- Easy deployment
- Good developer experience

### Cons

- Less optimized for Next.js features

---

## AWS

### Pros

- Highly scalable
- Extensive cloud services

### Cons

- Higher operational complexity
- Increased maintenance effort

---

## Self Hosting

### Pros

- Full infrastructure control

### Cons

- Server maintenance
- Manual deployment pipeline
- Higher operational burden

---

# Rationale

Vercel provides the best balance of simplicity, performance, and integration with Next.js. It allows the team to focus on product development rather than infrastructure management.

---

# Consequences

## Positive

- Fast deployments
- Preview environments
- Global CDN
- Excellent performance
- Minimal DevOps effort

## Trade-offs

- Vendor dependency
- Some advanced features require paid plans
- Platform-specific optimizations

---

# Impact

## Product Impact

Reliable and fast deployments improve release confidence and reduce time to market.

## Engineering Impact

Developers benefit from automated deployments, preview environments, and simplified release management.

## User Impact

Visitors experience faster page loads, improved reliability, and secure connections.

---

# Related Documents

- Technical Vision
- Release Plan
- Deployment Documentation

---

# Revision History

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 30 July 2026 | Initial decision |