# Phase 1: Foundation & Styling Setup - Research

**Researched:** 2026-03-03
**Domain:** Tailwind CSS v3 setup with Vite 7 + React 19 (JSX), editorial design tokens
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-001 | Install and configure Tailwind CSS v3 with PostCSS | Install command verified against v3.tailwindcss.com; PostCSS-based setup confirmed to work with Vite 7 |
| REQ-002 | Configure Tailwind with a custom design token set (black/white palette, editorial font sizes) | theme.extend patterns documented with exact syntax; font strategy (Fontsource vs link tag) covered |
| REQ-003 | Replace default Vite scaffold (App.jsx, App.css, index.css) with portfolio shell | Safe scaffold replacement pattern documented; import dependency chain mapped |
| REQ-004 | Set up React Router or anchor-based smooth scroll navigation | Research confirms this belongs to Phase 2 — Phase 1 creates the blank App.jsx shell only |
</phase_requirements>

---

## Summary

Phase 1 establishes the styling foundation: Tailwind CSS v3 installed via PostCSS, design tokens configured, and the Vite scaffold stripped to a blank canvas. The project already has React 19, Vite 7, and `@vitejs/plugin-react` installed (`package.json` confirmed). Tailwind is the only missing dependency.

The critical finding is that **Tailwind CSS v4's `@tailwindcss/vite` plugin does NOT support Vite 7** (peer dep constraint is `"^5.2.0 || ^6"`, issue closed as not planned). The project decision to use Tailwind CSS **v3** via PostCSS sidesteps this incompatibility entirely — v3 uses PostCSS as middleware and has no Vite version constraint. This is the correct choice.

The project uses `"type": "module"` in `package.json`. The official Tailwind v3 Vite guide (v3.tailwindcss.com/docs/guides/vite) generates config files using `export default` (ESM), which is fully compatible. The `npx tailwindcss init -p` CLI command detects ESM projects and generates the correct syntax automatically.

**Primary recommendation:** Install `tailwindcss@3` + `postcss` + `autoprefixer` as dev deps, run `npx tailwindcss init -p`, configure content paths and design tokens, replace scaffold files, and verify `npm run dev`.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| tailwindcss | v3 (latest 3.x, currently 3.4.x) | Utility-first CSS framework | Locked decision; v3 is stable and avoids v4/Vite7 incompatibility |
| postcss | latest (auto-resolved) | CSS transformation pipeline that Tailwind uses as a plugin | Required peer dependency; Vite uses PostCSS natively |
| autoprefixer | latest (auto-resolved) | Adds vendor prefixes automatically | Required peer; Tailwind does not self-prefix |

### Supporting (Font Strategy)

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @fontsource/inter | latest | Self-hosted Inter font (npm package) | Recommended: no external network request, privacy-friendly, zero CORS issues |
| @fontsource-variable/inter | latest | Variable font version of Inter | When you want weight flexibility with a single font file |

**Font alternative:** `<link>` tag in `index.html` with Google Fonts URL + `display=swap` is simpler but makes a third-party network request. Fontsource via npm is preferred for performance and privacy.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| tailwindcss@3 (PostCSS) | tailwindcss@4 (@tailwindcss/vite plugin) | v4 plugin declares peer `vite@"^5.2.0 \|\| ^6"` — FAILS with Vite 7. Do not use v4. |
| tailwindcss@3 (PostCSS) | tailwindcss@4 (@tailwindcss/postcss) | v4 via PostCSS would work with Vite 7 but uses CSS-first config (`@import "tailwindcss"`) not `tailwind.config.js` — different paradigm, avoid for this project |
| @fontsource/inter | Google Fonts `<link>` tag | Simpler but adds external dependency and third-party request |
| system-ui fallback only | @fontsource/inter | Zero install cost but less distinctive typography |

**Installation:**
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

---

## Architecture Patterns

### Recommended Project Structure (Post-Phase 1)

```
src/
├── index.css        # Tailwind directives only — @tailwind base/components/utilities
├── main.jsx         # Entry point — imports index.css, renders App
└── App.jsx          # Minimal shell — no scaffold content, no App.css import
```

Files to delete:
```
src/App.css          # Delete — scaffold styles conflict with Tailwind Preflight
src/assets/react.svg # Delete — scaffold asset, not needed
```

File to leave untouched:
```
src/main.jsx         # Already imports './index.css' and App — no changes needed
index.html           # Leave for Phase 7 (meta tags, title update)
public/vite.svg      # Leave for now — harmless
```

### Pattern 1: Tailwind v3 PostCSS Installation

**What:** Install tailwindcss, postcss, autoprefixer; generate configs with the CLI; configure content paths.

**When to use:** Always for Tailwind v3 with Vite.

**Step 1 — Install:**
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

**Step 2 — Generate configs:**
```bash
npx tailwindcss init -p
```

This generates two files. Because `package.json` has `"type": "module"`, the CLI auto-generates ESM syntax:

`tailwind.config.js` (generated, then customized):
```javascript
// Source: https://v3.tailwindcss.com/docs/guides/vite
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`postcss.config.js` (generated — typically looks like):
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Note: If the CLI generates CJS (`module.exports`) versions instead, rename them to `.cjs` extension OR convert to `export default` syntax. Both approaches work. ESM (`export default`) in `.js` files is correct when `"type": "module"` is set.

### Pattern 2: Tailwind Directives in index.css

**What:** Replace ALL content in `src/index.css` with Tailwind directives.

**When to use:** Always — the existing Vite scaffold CSS in `index.css` must be wiped. It contains styles that will conflict with Tailwind Preflight (e.g., `color-scheme: light dark`, `rgba(255,255,255,0.87)`, blue link colors).

```css
/* Source: https://v3.tailwindcss.com/docs/guides/vite */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Do NOT keep any Vite scaffold rules in `index.css`.

### Pattern 3: Design Tokens in tailwind.config.js

**What:** Use `theme.extend` to add custom tokens without replacing Tailwind defaults.

**When to use:** When adding project-specific values while preserving Tailwind's default scale.

```javascript
// Source: https://v3.tailwindcss.com/docs/theme (theme.extend pattern)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Explicit black/white (already in Tailwind defaults — re-declare for clarity)
        // For gray shades, Tailwind's default 'gray' or 'neutral' scale covers 50–950
        // Add custom named tokens only if the default scale is insufficient
        'off-white': '#f8f8f8',
        'near-black': '#0a0a0a',
      },
      fontSize: {
        // Editorial large headline sizes beyond Tailwind's defaults (8xl = 6rem)
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
```

**Key insight on colors:** Tailwind v3 already includes a full gray scale (`gray-50` through `gray-950`) and `black`/`white`. For a black-and-white editorial palette, extending with a few named semantic tokens (`off-white`, `near-black`) is sufficient. Avoid declaring `theme.colors` (not `theme.extend.colors`) as it replaces the entire palette including defaults like `transparent` and `currentColor`.

### Pattern 4: Minimal App.jsx Shell

**What:** Replace the default scaffold App.jsx with the simplest possible valid React component.

**When to use:** Phase 1 — App.jsx must render without errors and import no deleted files.

```jsx
// src/App.jsx — minimal portfolio shell
function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Portfolio sections will be added in subsequent phases */}
    </main>
  );
}

export default App;
```

Critical: Remove `import './App.css'` — this file will be deleted. Remove `import { useState } from 'react'` — not needed. Remove all SVG imports (`reactLogo`, `viteLogo`).

### Pattern 5: Font Setup with Fontsource

**What:** Self-host Inter via npm for zero external network dependency.

**Install:**
```bash
npm install @fontsource/inter
```

**Import in main.jsx** (add after existing imports):
```javascript
// main.jsx — add after existing imports
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
```

Then reference in `tailwind.config.js` `fontFamily.sans`.

**Alternative (simpler, slightly less optimal):** Add to `index.html` head:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
```

### Anti-Patterns to Avoid

- **Using `tailwindcss@latest` without version pin:** In early 2026, `@latest` may resolve to v4, which breaks with Vite 7 and uses a completely different config paradigm. Always pin `tailwindcss@3`.
- **Keeping Vite scaffold CSS in index.css:** The existing `index.css` has `color-scheme: light dark` and colored link styles that conflict with Tailwind Preflight and the black-and-white constraint.
- **Keeping `import './App.css'` in App.jsx while deleting App.css:** This will throw a module resolution error and break the dev server.
- **Using `theme.colors` instead of `theme.extend.colors`:** Replaces the entire color palette, losing `transparent`, `currentColor`, and all default utilities.
- **Using `@tailwindcss/vite` plugin:** This is the v4 plugin and does not support Vite 7.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| CSS normalization / browser reset | Custom reset.css | Tailwind Preflight (included in `@tailwind base`) | Preflight is a carefully crafted Normalize.css derivative; hand-rolling misses dozens of edge cases |
| Vendor-prefixed CSS properties | Manual `-webkit-` prefixes | autoprefixer (in PostCSS pipeline) | autoprefixer queries caniuse data; hand-rolling is always behind |
| Color scale generation | Custom hex values for every gray shade | Tailwind's built-in `gray`/`neutral` scale | Tailwind's scale is perceptually balanced; custom scales are not |
| Font loading infrastructure | Custom `@font-face` declarations | Fontsource npm package | Fontsource handles subsetting, format (woff2/woff), and correct `@font-face` declarations |

**Key insight:** The PostCSS pipeline (tailwindcss → autoprefixer) handles all CSS transformation concerns. The Vite dev server picks up the `postcss.config.js` automatically — no Vite config changes are needed.

---

## Common Pitfalls

### Pitfall 1: Installing Tailwind v4 Instead of v3

**What goes wrong:** `npm install -D tailwindcss` (without version) installs v4 in early 2026. v4 has no `tailwind.config.js`, uses `@import "tailwindcss"` in CSS, and its Vite plugin (`@tailwindcss/vite`) fails to install with Vite 7 due to peer dependency constraint.

**Why it happens:** `@latest` now resolves to v4.

**How to avoid:** Always specify `tailwindcss@3` in the install command.

**Warning signs:** `npx tailwindcss init` fails with "could not determine executable to run" — sign you installed v4.

### Pitfall 2: App.css Import After Deleting the File

**What goes wrong:** `src/App.jsx` has `import './App.css'` at the top. If you delete `App.css` without removing this import, Vite throws a module-not-found error and the dev server crashes.

**Why it happens:** The default scaffold imports App.css; deleting the file without updating the import breaks the dependency graph.

**How to avoid:** Remove the `import './App.css'` line from App.jsx before or at the same time as deleting the file.

**Warning signs:** `Error: Failed to load url /src/App.css` in terminal.

### Pitfall 3: ESM vs CJS Config File Conflict

**What goes wrong:** If `npx tailwindcss init -p` generates `module.exports = {...}` (CJS) syntax for `postcss.config.js` or `tailwind.config.js`, Node throws `SyntaxError: Cannot use import statement in a module` because `package.json` has `"type": "module"`.

**Why it happens:** The CLI may generate CJS syntax on some npm/Node versions despite the ESM project type.

**How to avoid:** After running `init`, check the generated files. If they use `module.exports`, either:
- Convert to `export default { ... }` syntax, OR
- Rename files to `.cjs` extension (`tailwind.config.cjs`, `postcss.config.cjs`)

**Warning signs:** Vite startup error mentioning `module.exports` or `require is not defined`.

### Pitfall 4: Vite Scaffold CSS Conflicting with Tailwind Preflight

**What goes wrong:** Leaving Vite scaffold rules in `index.css` creates style conflicts. The scaffold sets `color: rgba(255,255,255,0.87)` and a dark `background-color: #242424` on `:root`, while Tailwind Preflight has its own base resets. The `a:hover { color: #646cff }` rule adds blue — violating the no-color constraint.

**Why it happens:** Vite generates opinionated default CSS for its demo app.

**How to avoid:** Replace ALL content of `src/index.css` with only the three Tailwind directives.

**Warning signs:** Background is dark, links appear blue/purple in browser.

### Pitfall 5: Content Path Not Covering JSX Files

**What goes wrong:** Tailwind scans files to detect which classes are used. If `content` paths don't include `.jsx`, utility classes used in components are not included in the output CSS — they appear to silently do nothing.

**Why it happens:** Forgetting `.jsx` in the glob pattern.

**How to avoid:** Content array must include `"./src/**/*.{js,jsx}"` (not just `.js`).

**Warning signs:** Tailwind classes applied in `.jsx` files have no visual effect; classes work in `index.html` but not components.

### Pitfall 6: tailwind.config.js Not Using `export default` With ESM Project

**What goes wrong:** This project has `"type": "module"` in `package.json`. If `tailwind.config.js` uses `module.exports = {}` (CJS), Node throws an error when Tailwind reads the config.

**Why it happens:** Some Tailwind v3 documentation and older tutorials show `module.exports` syntax.

**How to avoid:** Use `export default {}` in `tailwind.config.js`, or rename to `tailwind.config.cjs` if keeping CJS.

---

## Code Examples

Verified patterns from official sources:

### Complete tailwind.config.js (Final)

```javascript
// Source: https://v3.tailwindcss.com/docs/guides/vite (content paths)
//         https://v3.tailwindcss.com/docs/theme (theme.extend)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        'off-white': '#f8f8f8',
        'near-black': '#0a0a0a',
      },
      fontSize: {
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
```

### Complete index.css (Final)

```css
/* Source: https://v3.tailwindcss.com/docs/guides/vite */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Minimal App.jsx Shell

```jsx
// src/App.jsx — Phase 1 blank canvas
function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Portfolio sections added in Phase 2+ */}
    </main>
  );
}

export default App;
```

### Verification Snippet (can add temporarily to App.jsx)

```jsx
// Add a test element to verify Tailwind is working, then remove
<p className="text-4xl font-sans font-bold text-black">Tailwind OK</p>
```

If this renders as large black bold text, Tailwind is working correctly.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwindcss init` CJS (`module.exports`) | `tailwindcss init` ESM (`export default`) with `--esm` flag or auto-detection | Tailwind v3.3+ | Modern Vite projects use ESM; auto-detection handles this |
| `tailwindcss@latest` = v3 | `tailwindcss@latest` = v4 | January 2025 (v4.0 release) | Must pin `@3` explicitly |
| `@tailwindcss/vite` supports Vite 6 | `@tailwindcss/vite` peer dep is `"^5.2.0 \|\| ^6"` — fails Vite 7 | June 2025 (Vite 7 release) | Use v3 PostCSS approach for Vite 7 |
| Tailwind config in `tailwind.config.js` | v4 uses CSS-only `@import "tailwindcss"` config | Tailwind v4 (2025) | Irrelevant — project uses v3 |

**Deprecated/outdated:**
- `module.exports` in `tailwind.config.js`: Still works if renamed to `.cjs`, but new Vite projects should use `export default`
- PostCSS config with `require('tailwindcss')`: CJS require syntax — use package name string `'tailwindcss'` instead (already the default)

---

## Open Questions

1. **Whether to use Fontsource or Google Fonts `<link>` tag**
   - What we know: Both work; Fontsource is self-hosted (faster, private); `<link>` tag is one line in `index.html`
   - What's unclear: User preference for bundle size vs. simplicity
   - Recommendation: Use Fontsource (`@fontsource/inter`) — avoids external network dependency; install cost is minimal. If uncertain, the planner can default to `<link>` tag (no npm install) and note it as easily swappable.

2. **Whether system-ui is sufficient without Inter**
   - What we know: `system-ui` renders well on macOS (SF Pro) and Windows (Segoe UI); Inter is specifically designed for screens
   - What's unclear: User's aesthetic preference
   - Recommendation: Include Inter via Fontsource but fall back to `system-ui`. Inter at 400/500/700 weights is sufficient for this editorial design.

3. **REQ-004 scope in Phase 1**
   - What we know: REQ-004 says "Set up React Router or anchor-based smooth scroll navigation" — this is a nav concern
   - What's unclear: ROADMAP.md assigns nav setup to Phase 2, not Phase 1. REQ-004 is listed under Phase 1's requirements in REQUIREMENTS.md.
   - Recommendation: In Phase 1, satisfy REQ-004 minimally by ensuring `<main>` in App.jsx has the correct structure to accept anchor IDs. Full nav implementation belongs in Phase 2. The planner should address this scope ambiguity.

---

## Sources

### Primary (HIGH confidence)

- `https://v3.tailwindcss.com/docs/guides/vite` — Official Tailwind v3 Vite installation guide; install command, config file format, CSS directives
- `https://v3.tailwindcss.com/docs/theme` — Official Tailwind v3 theme configuration; `theme.extend` vs `theme` behavior
- `https://v3.tailwindcss.com/docs/customizing-colors` — Official color customization; `theme.colors` vs `theme.extend.colors` difference
- `https://v3.tailwindcss.com/docs/installation/using-postcss` — Official PostCSS installation docs; `postcss.config.js` format
- `package.json` (project file, read directly) — Confirmed: React 19.2, Vite 7.3.1, `"type": "module"`, NO Tailwind yet

### Secondary (MEDIUM confidence)

- `https://github.com/vitejs/vite/issues/20284` — Confirmed Vite 7 + `@tailwindcss/vite` incompatibility (peer dep `^5.2.0 || ^6`); closed as not planned June 2025
- `https://dev.to/its_dev_/fixing-tailwind-css-configuration-issues-in-vite-projects-with-es-modules-420a` — ESM vs CJS config file pitfall and solutions; corroborated by multiple sources
- `https://fontsource.org/fonts/inter/install` — Fontsource Inter installation and import patterns
- `https://dev.to/mosnyik/how-to-add-tailwindcss-to-a-react-app-built-with-vite-2025-guide-24oi` — 2025 guide confirming v3.4.x + PostCSS works with Vite

### Tertiary (LOW confidence — flag for validation)

- WebSearch results suggesting `tailwindcss@3.4.1` specifically — multiple sources recommend this version as stable; not independently verified against npm registry
- Claim that `npx tailwindcss init -p` auto-detects ESM — confirmed in Tailwind docs language but not independently tested against Vite 7 specifically

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — verified against official v3 docs; install command confirmed
- Architecture: HIGH — content paths, config format from official Vite guide
- Pitfalls: HIGH (ESM/CJS, App.css import, v3 vs v4) — MEDIUM (content paths) — all corroborated by multiple sources
- Design tokens: MEDIUM — syntax verified against official docs; specific token values (font names, hex values) are discretionary

**Research date:** 2026-03-03
**Valid until:** 2026-04-03 (Tailwind v3 is stable; Vite 7 peer dep issue unlikely to be resolved before then)
