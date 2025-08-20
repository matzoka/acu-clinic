# Repository Guidelines

## Project Structure & Module Organization
- Root contains `index.html`, `styles.css`, and `main.js`.
- Assets live in `images/` and `icons/`.
- No build system or dependencies; the site is plain HTML/CSS/JS.

## Build, Test, and Development Commands
- Run locally (static): open `index.html` in a browser.
- Serve locally (recommended): `python3 -m http.server 5173` then visit `http://localhost:5173/`.
- Deploy: push to `main`. Cloudflare Pages auto-deploys to `https://acu-clinic.pages.dev/`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for HTML/CSS/JS; UTF-8; LF line endings.
- HTML: prefer semantic elements, meaningful `alt`, `aria-*`, and minimal inline styles.
- CSS: keep variables in `:root`; classes in kebab-case (modifiers like `btn--ghost`).
- JS: vanilla, ES5-compatible patterns (IIFE, no transpilation). Avoid frameworks and large libs.
- Filenames: lower-kebab-case (e.g., `safari-pinned-tab.svg`, `worktime.png`).

## Testing Guidelines
- Manual QA on `http://localhost:5173/`:
  - All links and buttons navigate correctly (tel:, mailto:, forms, maps).
  - Images load (PNG/WebP fallbacks) and icons render.
  - JSON-LD stays valid and reflects current content.
  - Layout is responsive at 360px, 768px, 1024px+; focus styles visible.
- Accessibility: verify headings order, contrast, and keyboard focus.
- Performance: prefer optimized images; remove unused CSS.

## Commit & Pull Request Guidelines
- Commits: short, imperative subject (≤50 chars), e.g., "Add reservation links"; include a body for context when needed.
- Scope small, atomic changes; reference issues (e.g., `#12`) if applicable.
- PRs must include:
  - Summary of changes and rationale.
  - Screenshots/GIFs for UI changes (desktop + mobile widths).
  - Notes on content/SEO updates (OGP, JSON-LD, titles/descriptions).
  - Checklist: local test done, links verified, images optimized.

## Security & Configuration Tips
- Do not commit secrets. External URLs (calendar, forms, maps) should be public.
- Keep metadata (OGP/Twitter/JSON-LD) consistent with visible content and public URL.

## Architecture Overview
- Single-page, static delivery. No client-side routing, no backend.
- Progressive enhancement only: features must gracefully degrade without JS.
