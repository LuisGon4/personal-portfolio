# Requirements — v1 Launch-Ready Portfolio

## Scope

This document covers all requirements for Milestone 1: a publicly accessible, recruiter-ready single-page portfolio.

---

## Functional Requirements

### Setup & Infrastructure

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| REQ-001 | Install and configure Tailwind CSS v3 with PostCSS | Must | Done (01-01) |
| REQ-002 | Configure Tailwind with a custom design token set (black/white palette, editorial font sizes) | Must | Done (01-01) |
| REQ-003 | Replace default Vite scaffold (App.jsx, App.css, index.css) with portfolio shell | Must | Done (01-02) |
| REQ-004 | Set up React Router or anchor-based smooth scroll navigation | Must | Done (01-02) |

### Navigation

| ID | Requirement | Priority |
|----|-------------|----------|
| REQ-010 | Fixed or sticky top navigation bar with section links (About, Projects, Resume, Contact) | Must |
| REQ-011 | Navigation collapses to a hamburger menu on mobile | Must |
| REQ-012 | Active section highlighted in nav on scroll | Should |

### Hero / About Section

| ID | Requirement | Priority |
|----|-------------|----------|
| REQ-020 | Display developer name in large editorial headline typography | Must |
| REQ-021 | Display one-line role/tagline beneath name | Must |
| REQ-022 | Display short bio paragraph (2–4 sentences) | Must |
| REQ-023 | Section fills or near-fills the viewport on load | Must |

### Projects Section

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| REQ-030 | Display 1–3 project cards in a grid or column layout | Must | Done (04-01, 04-02) |
| REQ-031 | Each card shows: project title, short description | Must | Done (04-01, 04-02) |
| REQ-032 | Each card shows: tech stack tags (e.g., React, Python, etc.) | Must | Done (04-01, 04-02) |
| REQ-033 | Each card shows: link(s) — GitHub repo and/or live demo | Must | Done (04-01, 04-02) |
| REQ-034 | Cards are readable on mobile (stack to single column) | Must | Done (04-01, 04-02) |

### Resume Section

| ID | Requirement | Priority |
|----|-------------|----------|
| REQ-040 | Embed PDF resume using `<iframe>` or PDF.js viewer | Must |
| REQ-041 | Provide a visible "Download Resume" button linking to the PDF asset | Must |
| REQ-042 | PDF asset stored in `/public/resume.pdf` | Must |

### Contact Section

| ID | Requirement | Priority |
|----|-------------|----------|
| REQ-050 | Display GitHub profile link with icon | Must |
| REQ-051 | Display LinkedIn profile link with icon | Must |
| REQ-052 | Display email address as `mailto:` link | Must |
| REQ-053 | All external links open in a new tab with `rel="noopener noreferrer"` | Must |

---

## Non-Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| REQ-060 | Mobile-first responsive design — tested at 375px, 768px, 1280px breakpoints | Must |
| REQ-061 | Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) | Must |
| REQ-062 | Keyboard navigable — all interactive elements reachable via Tab | Must |
| REQ-063 | No color other than black, white, and shades of gray | Must |
| REQ-064 | No gradients, glassmorphism, neon accents, or particle effects | Must |
| REQ-065 | Fast initial load — no unnecessary JavaScript bundles | Should |
| REQ-066 | Page title and meta description set in `index.html` | Should |

---

## Out of Scope (v1)

- Contact form with backend / email sending
- Blog or writing section
- Dark/light mode toggle
- CMS integration
- Analytics
- Animations beyond CSS transitions
