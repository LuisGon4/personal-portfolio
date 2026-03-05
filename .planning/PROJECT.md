# Project: Personal Portfolio Website

## Overview

A single-page personal portfolio website for a CS student targeting recruiters and hiring managers. The site presents the developer's identity, selected projects, resume, and contact information in a clean, professional, editorial design.

## Target Audience

- Recruiters and hiring managers at tech companies
- Anyone evaluating the developer for internships, full-time roles, or freelance work

## Design Philosophy

**Dark minimal, editorial, professional** — deliberately distanced from generic AI-generated frontend aesthetics.

- **Color palette**: Black and white primary, with indigo accent (added Phase 7)
- **Typography**: Editorial — large, intentional type treatments; clear hierarchy
- **Whitespace**: Generous, intentional — content breathes
- **Interactions**: Subtle, purposeful — no gratuitous animations
- **Anti-patterns to avoid**: Purple/blue gradients, frosted glass cards, glowing borders, particle backgrounds, animated counters

## Tech Stack (Confirmed v1.0.0)

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v3 |
| Font | Inter via @fontsource/inter |
| Icons | lucide-react |
| Hosting | TBD (Vercel / Netlify recommended) |

## Site Structure

Single-page application with smooth scroll navigation:

1. **Hero / About** — Name, one-line role description, brief bio, profile photo
2. **Projects** — 1–3 project cards (title, tech stack tags, description, links)
3. **Resume** — Embedded PDF viewer + download button
4. **Contact** — GitHub, LinkedIn, Email links

## Key Constraints

- No backend required — purely static
- Resume served as a static PDF asset
- Contact via external links only (no form submission)
- Must load fast and be mobile-responsive
- Accessibility: semantic HTML, keyboard navigable

## Success Criteria

A recruiter landing on the page can within 10 seconds:
1. Know who this person is and what they do
2. Find at least one project to click into
3. Download or view the resume
4. Find a way to reach out

## Current State (v1.0.0)

- **Status**: Shipped 2026-03-05
- **All 8 phases complete** — site is launch-ready
- **Stack confirmed**: React 19, Vite 7, JavaScript, Tailwind CSS v3
- **Indigo accent** added in Phase 7 (supersedes original black/white-only constraint REQ-063)
- **Profile photo slot** present in hero (grayscale → color on hover)
- **Geometric decorations** in hero section (circle, square)
- **Section tints**: Projects and Contact use `bg-slate-50`

## Current Milestone: v1.1.0 Visual Rework

**Goal:** Elevate visual impact with a black nav, a dedicated skills section, and reworked hero decorations.

**Target features:**
- Black nav bar (white text, dark mobile menu)
- Technologies/Skills section with grouped tag pills
- Hero geometric shapes: fix overlap, add variety

## Validated Requirements (v1.0.0)

All REQ-001–REQ-066 delivered. See `.planning/milestones/v1.0.0-REQUIREMENTS.md` for full audit.

Notable: REQ-063 ("no color other than black/white/gray") was superseded — indigo accent introduced in Phase 7 as deliberate design improvement.

## Project Root

`/Users/luis/Desktop/PortfolioWebsite/PersonalPortfolio/`

## Last updated

2026-03-05 after v1.1.0 milestone start
