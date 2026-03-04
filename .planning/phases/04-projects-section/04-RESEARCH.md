# Phase 4: Projects Section - Research

**Researched:** 2026-03-04
**Domain:** React component authoring, Tailwind CSS grid/card layout, JavaScript data module
**Confidence:** HIGH

---

## Summary

Phase 4 is a pure UI-composition task. All infrastructure is already in place: React 19, Vite 7, Tailwind CSS v3, the Inter font, and the design token set (off-white, near-black). No new packages are required. The work is three files — a data module, a card component, and a section component — wired into an already-imported `<Projects />` stub in App.jsx.

The established pattern from About.jsx and Nav.jsx is the authoritative guide: plain function components, Tailwind utility classes only, black/white palette, `max-w-5xl mx-auto px-6` container sizing, and `<section id="projects">` as the root element. The planner must follow this pattern exactly.

The only genuine design decision is whether to use a CSS Grid or Flexbox layout for the card row. Grid is preferable here because it enforces equal-height columns and the `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` responsive collapse pattern is a single Tailwind class sequence — no extra logic needed.

**Primary recommendation:** Three files, no new dependencies, follow the About.jsx component pattern, use Tailwind CSS Grid for the card layout.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-030 | Display 1–3 project cards in a grid or column layout | Tailwind `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` handles this directly |
| REQ-031 | Each card shows: project title, short description | Data module fields `title` and `description` map to `<h3>` and `<p>` inside ProjectCard |
| REQ-032 | Each card shows: tech stack tags | Data module `tags[]` array maps to pill spans — monospace font class available in tailwind.config.js |
| REQ-033 | Each card shows: link(s) — GitHub repo and/or live demo | `githubUrl` (required) + `liveUrl` (optional) fields; `target="_blank" rel="noopener noreferrer"` per REQ-053 |
| REQ-034 | Cards are readable on mobile (stack to single column) | `grid-cols-1` is the default (mobile-first); `md:grid-cols-2` and `lg:grid-cols-3` apply at wider breakpoints |
</phase_requirements>

---

## Standard Stack

### Core (already installed — zero new packages)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19 (confirmed) | Component rendering | Project stack |
| Tailwind CSS | v3.4.19 (confirmed) | Utility styling, grid, responsive | Project stack |
| Inter (Fontsource) | ^5.2.8 (confirmed) | Typography | Installed Phase 1 |

### No New Dependencies

Phase 4 requires zero `npm install` steps. All libraries and design tokens are already configured. The planner must not introduce any new packages (e.g., no card component libraries, no animation libraries, no icon packs — icons are Phase 6).

**Installation:**
```bash
# Nothing to install
```

---

## Architecture Patterns

### File Structure for Phase 4

```
src/
├── data/
│   └── projects.js          # New — array of project objects
├── components/
│   └── ProjectCard.jsx      # New — renders one project card
└── sections/
    └── Projects.jsx         # Replace stub — maps data, renders grid
```

App.jsx already imports `<Projects />` at line 5. The stub at `src/sections/Projects.jsx` just needs to be replaced — no App.jsx changes required.

### Pattern 1: Data Module (projects.js)

**What:** Plain ES module exporting an array of plain objects. No React. No classes.

**When to use:** Separating content from UI is the standard for portfolio sites. Changing project data never requires touching component code.

```javascript
// src/data/projects.js
const projects = [
  {
    title: 'Project Title',
    description: 'Short description of what this project does and why it matters.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://example.com', // optional — may be undefined or omitted
  },
];

export default projects;
```

**Field contract:**
- `title` — string, required
- `description` — string, required, 1–3 sentences
- `tags` — string[], required, at least 1
- `githubUrl` — string, required
- `liveUrl` — string, optional (card must handle absence gracefully)

### Pattern 2: ProjectCard Component

**What:** Presentational component. Receives one project object as props.

**When to use:** Always. Card logic (conditional live link rendering) belongs inside the card, not the section.

```jsx
// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }) {
  return (
    <article className="border border-black flex flex-col gap-4 p-6">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-black/70 flex-1">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-xs px-2 py-1 border border-black/30 tracking-wide"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 tracking-wide hover:text-black/60"
        >
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 tracking-wide hover:text-black/60"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
```

**Key decisions baked in:**
- `<article>` is the correct semantic element for a self-contained card (not `<div>`)
- `flex-1` on description pushes links to the bottom across equal-height cards
- `border border-black` matches the project's established border style (see Nav.jsx)
- Tag pills use `font-mono` — the monospace stack is already in tailwind.config.js
- `liveUrl &&` conditional — card renders correctly when `liveUrl` is absent

### Pattern 3: Projects Section

**What:** Section component that maps the data array through ProjectCard. Replaces the current stub.

```jsx
// src/sections/Projects.jsx
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tighter mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
```

**Key decisions:**
- Section id is `"projects"` — matches the Nav.jsx anchor `href="#projects"`
- Container class `max-w-5xl mx-auto px-6` matches About.jsx exactly
- `py-24` vertical breathing room matches About.jsx's `py-24`
- Grid collapses: `grid-cols-1` (mobile) → `md:grid-cols-2` (tablet) → `lg:grid-cols-3` (desktop)
- `key={project.title}` is acceptable for static data; if titles are guaranteed unique this is fine

### Anti-Patterns to Avoid

- **Using `<div>` for the card root:** Use `<article>` — cards are self-contained, semantically independent content units (HTML5 spec).
- **Hardcoding projects inside JSX:** Keep data in `projects.js`. The developer must be able to update content without touching component code.
- **Importing a card library:** This is a three-field card. Any external card component would add weight and fight the design system.
- **Adding color to tags:** No colored tag pills. Only `border border-black/30` and black text. This is a hard constraint.
- **Using `hover:scale-*` or transitions on card hover:** The design is editorial/static. Animations are out of scope until Phase 7, and even there the constraint is "CSS transitions" only. Skip hover lift effects.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Responsive card grid | Custom CSS grid with media queries | Tailwind `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | One class sequence covers all breakpoints; already in the project |
| Equal-height cards | JS height equalization | CSS Grid (default stretch behavior) | Grid items stretch to fill row height automatically |
| Conditional link rendering | Separate component variants | `{liveUrl && <a>...}` | JSX short-circuit is idiomatic; no extra component needed |

**Key insight:** Every "problem" in this phase is solved by a single Tailwind utility or a one-line JSX pattern. Custom solutions are strictly worse.

---

## Common Pitfalls

### Pitfall 1: Section ID Mismatch

**What goes wrong:** The section root `id` doesn't match the Nav anchor `href`. The Projects nav link silently stops working.

**Why it happens:** Forgetting to check Nav.jsx before writing the section id. Nav.jsx uses `href="#projects"`, so the section must be `id="projects"`.

**How to avoid:** Always verify against Nav.jsx before writing the section id. The correct value is `"projects"` (confirmed in Nav.jsx line 5).

**Warning signs:** Clicking "Projects" in the nav doesn't scroll. The anchor link 404s silently.

### Pitfall 2: External Links Missing Security Attributes

**What goes wrong:** GitHub links open in new tab without `rel="noopener noreferrer"`. REQ-053 is violated. This is also a security issue — the opened tab can access `window.opener`.

**Why it happens:** Writing `target="_blank"` but forgetting the `rel` attribute.

**How to avoid:** Every `<a>` with `target="_blank"` must include `rel="noopener noreferrer"`. This applies to both `githubUrl` and `liveUrl` links.

**Warning signs:** Code review catches it; browser doesn't warn.

### Pitfall 3: Breaking When `liveUrl` Is Undefined

**What goes wrong:** Rendering `<a href={undefined}>` produces a broken anchor. Some placeholder data objects may omit `liveUrl`.

**Why it happens:** Not gating the live link render on the field's presence.

**How to avoid:** Use `{liveUrl && <a href={liveUrl}>...}` — the conditional must come first before any href access.

**Warning signs:** Dev console shows `href` attribute is `undefined`. Link renders but does nothing.

### Pitfall 4: Using Colored Tag Pills

**What goes wrong:** Tag pills get background-color, colored text, or any non-black-white styling. This violates REQ-063 and REQ-064 and breaks the design system.

**Why it happens:** Tag chips in most design systems are colored. The temptation to use `bg-blue-100 text-blue-800` is strong.

**How to avoid:** Tags use only `border border-black/30` (or `border-black`), black text, and monospace font. No background fill other than white.

**Warning signs:** Any CSS color value outside `black`, `white`, `transparent`, or black opacity variants (`black/10`, `black/30`, etc.).

### Pitfall 5: Wrong Container Width

**What goes wrong:** The Projects section uses a different `max-w-*` or `px-*` than About.jsx, causing visual misalignment between sections.

**Why it happens:** Writing a new section without checking the established pattern.

**How to avoid:** Match About.jsx exactly: `max-w-5xl mx-auto px-6`. This is the site-wide container standard.

---

## Code Examples

Verified patterns from existing codebase:

### Established Container Pattern (from About.jsx)

```jsx
// Source: src/sections/About.jsx
<section
  id="about"
  className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto"
>
```

Projects section should match: `px-6 py-24 max-w-5xl mx-auto` (without `min-h-screen` — the grid height is content-driven).

### Established Border Style (from Nav.jsx and Layout.jsx)

```jsx
// Source: src/components/Nav.jsx line 14, src/components/Layout.jsx line 8
border border-black  // solid 1px black border — the project's border primitive
border-b border-black // directional variant
```

Card border: use `border border-black`. Tag pill border: use `border border-black/30` for a lighter feel.

### Established Typography (from About.jsx)

```jsx
// Source: src/sections/About.jsx
font-bold tracking-tighter  // used for h1 — use scaled-down variant for h2/h3
tracking-widest uppercase   // used for labels and small text (see Nav.jsx, Layout.jsx footer)
text-black/70               // subdued body text — established opacity convention
text-black/50               // very subdued text (footer)
```

For the Projects section heading: `text-4xl font-bold tracking-tighter` (scaled down from About.jsx's `text-6xl`).
For card title: `text-xl font-semibold tracking-tight`.
For description: `text-sm leading-relaxed text-black/70`.
For tags: `font-mono text-xs tracking-wide`.

### Tailwind Grid — Mobile-First Responsive (Tailwind CSS v3 docs)

```jsx
// Three-column grid collapsing to one on mobile:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

Breakpoints (Tailwind v3 defaults, confirmed unchanged by tailwind.config.js):
- default (< 768px): 1 column
- `md:` (>= 768px): 2 columns
- `lg:` (>= 1024px): 3 columns

With 1–3 project cards, `md:grid-cols-2` at tablet is the sweet spot. At desktop, `lg:grid-cols-3` handles 3 cards cleanly.

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Separate card-library component (e.g., Material UI Card) | Tailwind utility classes on semantic HTML | No dependency, full design control |
| JS-driven responsive layout | Tailwind responsive prefixes (`md:`, `lg:`) | Zero runtime JS for layout |
| Prop drilling with object destructuring split | Spread `{...project}` into component | Cleaner call site in `.map()` |

**Not applicable here (out of scope):**
- Animation libraries (Framer Motion, etc.) — Phase 7 only allows CSS transitions; animation libraries are permanently out of scope
- CMS integration (Contentful, Sanity, etc.) — static `projects.js` is correct for v1

---

## Open Questions

1. **Number of placeholder projects**
   - What we know: REQ-030 says 1–3 cards. The roadmap says "developer fills in real content later."
   - What's unclear: Should the planner provide 1, 2, or 3 placeholder entries?
   - Recommendation: Provide exactly 3 placeholder entries. 3 cards proves the responsive grid works at all column counts. The developer removes entries rather than adds them.

2. **`key` prop for `.map()`**
   - What we know: React requires a stable `key` for list items.
   - What's unclear: `project.title` is the natural key, but titles could theoretically be non-unique.
   - Recommendation: Use `project.title` as key. For a static 3-item list this is safe. If the developer later adds many projects, they can add an `id` field.

---

## Sources

### Primary (HIGH confidence)

- Existing codebase: `src/sections/About.jsx` — established section structure and class patterns
- Existing codebase: `src/components/Nav.jsx` — anchor IDs, border style, hover patterns
- Existing codebase: `src/components/Layout.jsx` — container and typography conventions
- Existing codebase: `tailwind.config.js` — confirmed design tokens (off-white, near-black, font stacks, font sizes)
- Existing codebase: `src/sections/Projects.jsx` — current stub (placeholder only, to be replaced)
- Existing codebase: `.planning/REQUIREMENTS.md` — REQ-030 through REQ-034, REQ-053, REQ-063, REQ-064
- Existing codebase: `.planning/STATE.md` — confirmed stack versions (React 19, Vite 7, Tailwind 3.4.19)

### Secondary (MEDIUM confidence)

- Tailwind CSS v3 documentation (grid): `grid-cols-*`, `md:`, `lg:` responsive prefixes are stable Tailwind v3 features unchanged since v3.0.
- HTML5 spec: `<article>` is the correct semantic element for a self-contained card with its own heading.

### Tertiary (LOW confidence)

- None. All findings are grounded in the existing codebase or confirmed Tailwind v3 features.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — stack is confirmed installed and operational; zero new packages needed
- Architecture: HIGH — three patterns derived directly from About.jsx and Nav.jsx in the live codebase
- Pitfalls: HIGH — derived from requirements analysis and code inspection, not external sources

**Research date:** 2026-03-04
**Valid until:** Stable — Tailwind v3 is pinned; no external APIs involved; patterns come from the project's own codebase
