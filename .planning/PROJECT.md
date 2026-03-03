# Project: Personal Portfolio Website

## Overview

A single-page personal portfolio website for a CS student targeting recruiters and hiring managers. The site presents the developer's identity, selected projects, resume, and contact information in a clean, professional, editorial design.

## Target Audience

- Recruiters and hiring managers at tech companies
- Anyone evaluating the developer for internships, full-time roles, or freelance work

## Design Philosophy

**Dark minimal, editorial, professional** — deliberately distanced from generic AI-generated frontend aesthetics.

- **Color palette**: Black and white only (no gradients, no glassmorphism, no neon/colored accents)
- **Typography**: Editorial — large, intentional type treatments; clear hierarchy
- **Whitespace**: Generous, intentional — content breathes
- **Interactions**: Subtle, purposeful — no gratuitous animations
- **Anti-patterns to avoid**: Purple/blue gradients, frosted glass cards, glowing borders, particle backgrounds, animated counters

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v3 (to be installed) |
| Hosting | TBD (Vercel / Netlify recommended) |

## Site Structure

Single-page application with smooth scroll navigation:

1. **Hero / About** — Name, one-line role description, brief bio
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

## Project Root

`/Users/luis/Desktop/PortfolioWebsite/PersonalPortfolio/`

## Initialized

2026-03-03
