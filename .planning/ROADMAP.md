# Roadmap — Milestone 1: v1 Launch-Ready Portfolio

## Milestone Goal

A publicly accessible, recruiter-ready single-page portfolio that meets all v1 requirements. A recruiter landing on the page can immediately understand who the developer is, explore projects, view/download the resume, and find contact links.

---

## Phase Overview

| Phase | Title | Goal | REQs Covered |
|-------|-------|------|-------------|
| 1 | Foundation & Styling Setup | Complete    | 2026-03-03 |
| 2 | Layout Shell & Navigation | App shell, routing/scroll, responsive nav | REQ-010–012 |
| 3 | Hero / About Section | Name, tagline, bio rendered with editorial typography | REQ-020–023 |
| 4 | Projects Section | Complete 2/2 plans done | 2026-03-04 |
| 5 | Resume Section | Complete 1/1 plans done | 2026-03-04 |
| 6 | Contact Section & Footer | Social links with icons, footer | REQ-050–053 |
| 7 | Polish & Accessibility Audit | Responsiveness, a11y, meta tags, final review | REQ-060–066 |

---

## Phase 1: Foundation & Styling Setup

**Goal:** Project builds cleanly with Tailwind CSS configured and the Vite scaffold replaced with a blank canvas.

**Requirements**: REQ-001, REQ-002, REQ-003, REQ-004

**Plans:** 3/3 plans complete

Plans:
- [x] 01-01-PLAN.md — Install Tailwind CSS v3, configure PostCSS pipeline, write design tokens, replace index.css with Tailwind directives
- [x] 01-02-PLAN.md — Replace Vite scaffold (App.jsx, App.css, react.svg), install Inter font via Fontsource
- [x] 01-03-PLAN.md — Run dev server, human visual verification, restore clean App.jsx shell

**Success Criteria:**
1. `npm run dev` starts without errors
2. A Tailwind utility class applied to a test element renders correctly in browser
3. No default Vite scaffold content visible

---

## Phase 2: Layout Shell & Navigation

**Goal:** Full-page app shell with working smooth-scroll navigation and responsive hamburger menu on mobile.

**Requirements**: REQ-010, REQ-011, REQ-012

### Tasks
1. Create `src/components/Nav.jsx` — fixed top nav with links to each section
2. Create `src/components/Layout.jsx` — wraps page with `<header>`, `<main>`, `<footer>`
3. Implement smooth scroll with anchor links (`href="#projects"` etc.)
4. Implement mobile hamburger toggle (minimal React state)
5. Create placeholder `<section>` elements for each page section with correct IDs
6. Wire up `App.jsx` to use Layout and Nav

**Success Criteria:**
1. Nav renders on desktop as horizontal link list
2. Nav renders on mobile as hamburger → dropdown
3. Clicking nav link scrolls to correct section
4. All section IDs present in DOM

---

## Phase 3: Hero / About Section

**Goal:** Above-the-fold section renders name, tagline, and bio in editorial dark/minimal style.

**Requirements**: REQ-020, REQ-021, REQ-022, REQ-023

### Tasks
1. Create `src/sections/Hero.jsx`
2. Implement large headline for developer name (responsive type scale)
3. Implement tagline line beneath name
4. Implement bio paragraph block
5. Style with Tailwind: generous padding, black/white only
6. Ensure section is viewport-height on desktop

**Success Criteria:**
1. Name is visually dominant — the first thing eyes land on
2. Section looks polished without placeholder text
3. Readable on mobile (375px width)

---

## Phase 4: Projects Section

**Goal:** 1–3 project cards rendered with all required data fields and links.

**Requirements**: REQ-030, REQ-031, REQ-032, REQ-033, REQ-034

**Plans:** 2/2 plans complete

Plans:
- [x] 04-01-PLAN.md — Create projects data module (src/data/projects.js) and ProjectCard component (src/components/ProjectCard.jsx)
- [x] 04-02-PLAN.md — Replace Projects.jsx stub with complete section, human visual verification

**Success Criteria:**
1. All card fields (title, description, tags) render correctly
2. GitHub link opens in new tab
3. Cards stack correctly on mobile

---

## Phase 5: Resume Section

**Goal:** Resume PDF embedded inline with a working download button.

**Requirements**: REQ-040, REQ-041, REQ-042

**Plans:** 1/1 plans complete

Plans:
- [x] 05-01-PLAN.md — Add placeholder public/resume.pdf and implement Resume.jsx with iframe embed and download button

**Success Criteria:**
1. PDF renders inline on desktop browsers
2. Download button triggers file download
3. Section is usable on mobile

---

## Phase 6: Contact Section & Footer

**Goal:** Contact links with icons rendered; footer present at page bottom.

**Requirements**: REQ-050, REQ-051, REQ-052, REQ-053

### Tasks
1. Create `src/sections/Contact.jsx`
2. Render GitHub, LinkedIn, Email links — each with SVG icon + label
3. All links: `target="_blank"` + `rel="noopener noreferrer"`; email uses `mailto:`
4. Create `src/components/Footer.jsx` — minimal copyright/name line
5. Wire Contact and Footer into Layout

**Success Criteria:**
1. All three contact links render with icons
2. Links open in new tab
3. Email uses `mailto:` protocol
4. Footer visible at page bottom

---

## Phase 7: Polish & Accessibility Audit

**Goal:** Site is polished, responsive, accessible, and ready to deploy.

**Requirements**: REQ-060, REQ-061, REQ-062, REQ-063, REQ-064, REQ-065, REQ-066

### Tasks
1. Audit semantic HTML — replace any `<div>` used as landmark with proper element
2. Check all interactive elements are keyboard reachable (Tab order)
3. Verify focus styles are visible
4. Test at 375px, 768px, 1280px — fix any overflow or layout breaks
5. Update `index.html`: set `<title>` to developer name, add `<meta name="description">`
6. Remove any remaining Vite scaffold artifacts
7. Run `npm run build` — confirm zero errors

**Success Criteria:**
1. `npm run build` exits 0
2. No console errors in browser
3. Site looks correct at all three breakpoints
4. Tab navigation reaches all links and buttons
5. Page title shows developer name in browser tab

---

## Dependencies Between Phases

Phases 3–6 can be worked in parallel once Phase 2 is complete.

```
Phase 1 → Phase 2 → Phase 3
                  → Phase 4
                  → Phase 5
                  → Phase 6
                         ↓
                    Phase 7
```
