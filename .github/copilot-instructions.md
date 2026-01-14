# Copilot instructions — Website-for-Anastasia

Purpose: help AI coding agents make small, safe changes to a static single-page site.

- **Big picture**: this repo is a static, multi-file single-page site. Key pieces:
  - `index.html` — main page (uses deferred script `<script defer src="./js/main.js"></script>`).
  - `css/` and `css/styles/` — site styles; `css/normalize.css` is included before `main.css`.
  - `js/main.js` — DOM-driven UI glue (e.g. toggling body classes for menu colors).
  - `js/modules/` — place for small feature modules (currently `home-page.js` is empty).

- **Make minimal, local changes**: modify HTML/CSS/JS in place. There is no bundler or build step.
  - To test pages, open `index.html` in a browser or use a static server (e.g. VSCode Live Server or `npx http-server`).

- **Patterns & conventions in this codebase**:
  - CSS uses BEM-like class names (example: `header__nav-link`, `header__nav-item`). Prefer keeping this naming.
  - Scripts are loaded with `defer` and operate on DOMContentLoaded; keep DOM queries inside `DOMContentLoaded` handlers.
  - Assets are referenced with relative paths (e.g. `img/icons/telegram_logo_icon.svg`) — do not change paths without updating references in HTML/CSS.
  - There are some filenames with spaces (example: `css/styles/home page.css`) — preserve existing names unless you update all references.

- **Examples of safe edits**:
  - Add a small behavior: update `js/main.js` to register new event listeners (follow existing style: IIFE + DOMContentLoaded).
  - Update styling: add new class in `css/main.css` and toggle it from `js/main.js` (no build required).

- **What *not* to do**:
  - Do not introduce a build tool or change file structure without explicit human approval.
  - Avoid renaming files that are referenced from HTML (images, CSS, scripts) — update references if renaming.

- **Where to look for context**:
  - `index.html` (root) — document structure and script/style includes.
  - `js/main.js` — current interaction logic (menu color toggles).
  - `js/modules/` — intended place for modular code; check for empty stubs before adding duplicates.

If anything is unclear or you want a different tone/level of detail, tell me which area to expand.
