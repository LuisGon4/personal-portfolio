# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite exists yet.

## Architecture

Single-page React 19 portfolio with Tailwind CSS v3. No router — navigation uses anchor-based smooth scroll.

**Entry point:** `index.html` → `src/main.jsx` → `src/App.jsx`

**Layout pattern:** `App.jsx` wraps all sections in `<Layout>`, which renders `<Nav>` (fixed top), `<main>`, and `<footer>`. Sections are stacked vertically with `id` attributes for scroll targets.

**Section structure:**
- `src/sections/About.jsx` — Hero: name, tagline, bio
- `src/sections/Projects.jsx` — Renders `ProjectCard` components from `src/data/projects.js`
- `src/sections/Resume.jsx` — Iframe PDF embed + download button; PDF lives at `public/resume.pdf`
- `src/sections/Contact.jsx` — Social/contact links

**Data:** Project content lives in `src/data/projects.js` (plain JS array). Each entry: `{ title, description, tags[], githubUrl, liveUrl? }`.

**Styling conventions:**
- Tailwind utility classes only — no CSS modules, no separate `.css` files beyond `src/index.css` (which only contains Tailwind directives + global resets)
- Design philosophy: black/white only, editorial typography, generous whitespace. Avoid gradients, glassmorphism, glowing borders, particle backgrounds
- Inter font via `@fontsource/inter`; `lucide-react` available for icons

**Nav links** are defined as a static array at the top of `src/components/Nav.jsx`. Add a new section by adding an entry there and a matching `<section id="...">` in `App.jsx`.

## Planning System

This project uses GSD workflow. Plans live in `.planning/`:
- `PROJECT.md` — design philosophy, constraints, target audience
- `ROADMAP.md` — phase overview and completion status
- `STATE.md` — current phase state
- `phases/` — per-phase PLAN, SUMMARY, and VERIFICATION docs

Current status: Phases 1–5 complete, Phase 6 (Contact section) in progress, Phase 7 (Polish & a11y) pending.
