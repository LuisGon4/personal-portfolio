# Phase 11: Fix Resume Preview - Context

**Gathered:** 2026-03-10
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a toggle button to the Resume section. The iframe is hidden by default. Clicking "Preview Resume" reveals it; clicking "Hide Preview" hides it again. No new pages, no PDF replacement, no backend.

</domain>

<decisions>
## Implementation Decisions

### Toggle behavior
- Resume iframe is hidden on initial load (not rendered or display:none)
- Button label changes based on state: "Preview Resume" (closed) → "Hide Preview" (open)
- No animation — instant show/hide

### Button placement
- Same row as the Download Resume link: Download on the left, Preview button on the right

### Button style
- Outlined: `border border-black bg-transparent` with appropriate padding — matches editorial aesthetic
- Hover: Claude's discretion (subtle, consistent with existing hover patterns in the codebase)

### Claude's Discretion
- Exact padding/sizing on the outlined button
- Whether to use `useState` or a simpler toggle pattern
- Hover state styling (e.g., `hover:bg-black hover:text-white` or `hover:text-black/60`)

</decisions>

<specifics>
## Specific Ideas

No specific references — implementation follows existing codebase patterns.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Resume.jsx` (src/sections/Resume.jsx): Current file to modify — has the iframe and download link
- Download link pattern: `inline-block underline underline-offset-4 hover:text-black/60 transition-colors`

### Established Patterns
- Tailwind utilities only, no CSS modules
- React state via `useState` for interactive behavior
- Black/white aesthetic, no gradients or glows

### Integration Points
- Only file to modify: `src/sections/Resume.jsx`
- Add `useState` import, toggle state, conditionally render iframe, add outline button

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 11-fix-resume-preview*
*Context gathered: 2026-03-10*
