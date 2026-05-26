# Copilot instructions — Website-for-Anastasia

Purpose: help AI coding agents make small, safe changes to a React/Vite single-page application.

- **Big picture**: this repo is a React 19 + Vite SPA (portfolio site for an immigration consultant). Key pieces:
  - `src/main.jsx` — app entry point, mounts `<App />` into `#root`.
  - `src/App.jsx` — top-level component; manages active page state and color-flash transitions between pages.
  - `src/components/Header/` — hero/home page with `HeroTitle`, `Nav`, `SocialLinks` sub-components.
  - `src/components/sections/` — individual page components: `AboutMe`, `Services`, `Prices`, `Reviews`, `Contacts`.
  - `src/index.css` — global CSS reset, CSS variables (`--color-bg`, `--color-accent`, `--color-text`, `--color-white`, `--transition-fast`, `--transition-slow`), and font-face declarations.
  - `img/` — static assets (backgrounds, icons, photos) referenced via absolute paths (e.g. `/img/about/welcome.jpg`).
  - `fonts/` — local font files loaded via `@font-face` in `src/index.css`.

- **Navigation model**: no URL routing or scrolling — `App.jsx` tracks `activePage` state and swaps the rendered page component with a color-flash overlay transition (350 ms fade in/out). `Nav` is fixed at the top and receives `onMenuClick` + `activePage` props.

- **Make minimal, local changes**: modify JSX/CSS Modules in place. Run `npm run dev` to test in the browser (Vite HMR updates instantly).

- **Patterns & conventions in this codebase**:
  - **CSS Modules** — every component has a co-located `.module.css` file; use `styles.className` (not global class names or BEM).
  - **CSS variables** — use `var(--color-accent)`, `var(--color-text)`, etc. defined in `src/index.css`; do not hardcode colours.
  - **Component structure** — each component lives in its own folder: `ComponentName/ComponentName.jsx` + `ComponentName/ComponentName.module.css`.
  - **Images** — reference with absolute paths from the project root (e.g. `src="/img/about/welcome.jpg"`), not relative paths.
  - **Fonts** — already loaded globally; just use `font-family: var(--font-main)` or inherit.

- **Examples of safe edits**:
  - Add content to a stub section: edit the JSX and its `.module.css` file.
  - Add a new sub-component inside an existing section folder and import it.
  - Add a CSS animation: define `@keyframes` in the relevant `.module.css` and apply via a class.

- **What *not* to do**:
  - Do not introduce additional routers, state managers, or build-tool changes without explicit approval.
  - Do not use global CSS class names — always use CSS Modules.
  - Do not hardcode colours or transitions — use CSS variables.
  - Do not rename or move files without updating all imports.

- **Where to look for context**:
  - `src/App.jsx` — page-switching logic and color map.
  - `src/components/Header/Nav/Nav.jsx` — navigation items list and active-page highlighting.
  - `src/index.css` — all CSS variables and global reset.
  - `src/components/sections/` — stub sections waiting for content.

If anything is unclear or you want a different tone/level of detail, tell me which area to expand.
