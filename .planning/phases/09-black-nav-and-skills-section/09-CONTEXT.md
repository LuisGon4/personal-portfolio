# Phase 9: Black Nav & Skills Section - Context

**Gathered:** 2026-03-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Invert the existing nav bar to a black theme and add a "Technologies" section between About and Projects. No new pages, no backend, no content beyond what's listed here.

</domain>

<decisions>
## Implementation Decisions

### Nav theme
- Background: black (`bg-black`), text: white — on all breakpoints
- Border: keep the bottom border; use `border-white/10` or `border-black` (Claude's discretion — subtle)
- Logo/wordmark ("Luis"): white text on black, same size/weight
- Hamburger lines: change from `bg-black` to `bg-white`
- Mobile menu: black background with white text links; hover inverts to white bg / black text (this pattern already exists in the code for mobile links — just invert the base colors)
- Desktop link hover: white underline (`hover:underline underline-offset-4`) — same pattern as current, just on black background

### Nav link addition
- Add `{ label: 'Skills', href: '#skills' }` to the `navLinks` array in `Nav.jsx`, positioned between About and Projects

### Technologies section content
Three categories with these exact skills:

**Languages:** Java, C++, SQL, JavaScript, HTML, CSS

**Frameworks:** React, Spring Boot, PostgreSQL

**Tools:** Git, GitHub, IntelliJ IDEA, VS Code, Postman, Docker, AWS (Basics), Vercel, Render

Note: PostgreSQL was listed in both Frameworks and Tools. Keep it in Frameworks only — it's a data layer technology, not a dev tool. Remove from Tools.

### Technologies section layout
- Stacked rows: each category label above its pills, full width — not columns
- Category label: styled as a small uppercase tracking-widest label (like existing section sub-labels in the codebase)
- Tag pills: exactly match ProjectCard style — `font-mono text-xs px-2 py-1 border border-black/30 tracking-wide hover:border-indigo-400 hover:text-indigo-600 transition-colors`
- Section id: `id="skills"` for nav scroll target
- Section background: white (same as About — not slate-50)

### Claude's Discretion
- Exact border color for the black nav bottom border
- Section heading size/weight for "Technologies" (match the editorial style of other section headings)
- Spacing between category rows within the section
- Whether to use `<section>` or keep the existing section pattern from About/Projects

</decisions>

<specifics>
## Specific Ideas

No specific references or "I want it like X" moments — implementation follows the existing codebase patterns.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ProjectCard.jsx` tag pill classes: `font-mono text-xs px-2 py-1 border border-black/30 tracking-wide hover:border-indigo-400 hover:text-indigo-600 transition-colors` — copy exactly
- `Nav.jsx` mobile menu hover pattern: `hover:bg-black hover:text-white transition-colors` — invert to `hover:bg-white hover:text-black` for dark menu

### Established Patterns
- Nav is in `src/components/Nav.jsx`; `navLinks` array is at the top of the file — easy to extend
- App.jsx stacks sections: `<About /> <Projects /> <Resume /> <Contact />` — insert `<Skills />` between About and Projects
- Section files live in `src/sections/` — create `src/sections/Skills.jsx` (or `Technologies.jsx`) following the same pattern

### Integration Points
- `App.jsx`: import and render `<Skills />` between `<About />` and `<Projects />`
- `Nav.jsx`: add Skills link to `navLinks`, change `bg-white` → `bg-black`, text/border colors, hamburger line colors
- New file: `src/sections/Skills.jsx` — standalone section component, no data file needed (skills are hardcoded content)

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 09-black-nav-and-skills-section*
*Context gathered: 2026-03-05*
