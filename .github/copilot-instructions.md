# Copilot instructions — Website-for-Anastasia

Purpose: help AI coding agents make small, safe changes to a React/Vite single-page application.

- **Big picture**: this repo is a React 19 + Vite SPA (portfolio site for an immigration consultant). Key pieces:
  - `src/main.jsx` — app entry point; wraps `<App />` in `MantineProvider` (dark/light theme) and `AuthProvider` (Firebase Google Auth).
  - `src/App.jsx` — top-level component; manages `activePage` state, renders page with `framer-motion AnimatePresence` fade, and mounts a fixed `<SocialLinks fixed />` in the bottom-right corner.
  - `src/firebase.js` — Firebase app init and `googleProvider` export. **Replace placeholder keys** with real values from Firebase Console before using Google Auth.
  - `src/context/AuthContext.jsx` — `AuthProvider` + `useAuth()` hook; exposes `currentUser`, `signInWithGoogle()`, `signOut()`.
  - `src/components/Header/` — hero/home page with `HeroTitle`, `Nav` sub-components.
  - `src/components/Header/Nav/` — navigation list + dark/light theme toggle (Mantine `ActionIcon`) + Google login/logout button.
  - `src/components/Header/SocialLinks/` — Telegram, Instagram, WhatsApp links using `react-icons`. Rendered fixed bottom-right via `<SocialLinks fixed />` in `App.jsx` on every page.
  - `src/components/sections/` — individual page components: `AboutMe`, `Services`, `Prices`, `Reviews`, `Contacts`.
  - `src/index.css` — global CSS reset, CSS variables (`--color-bg`, `--color-accent`, `--color-text`, `--color-white`, `--transition-fast`, `--transition-slow`), and font-face declarations.
  - `src/assets/` — static assets: `img/` (backgrounds, icons) and `fonts/` (local font files). Reference images as `../../assets/img/...` from component CSS Modules.

- **Navigation model**: no URL routing or scrolling — `App.jsx` tracks `activePage` state and swaps the rendered page component with a smooth opacity fade (300 ms) via `framer-motion AnimatePresence`. `Nav` is fixed at the top and receives `onMenuClick` + `activePage` props.

- **Make minimal, local changes**: modify JSX/CSS Modules in place. Run `npm run dev` to test in the browser (Vite HMR updates instantly).

- **Patterns & conventions in this codebase**:
  - **CSS Modules** — every component has a co-located `.module.css` file; use `styles.className` (not global class names or BEM).
  - **CSS variables** — use `var(--color-accent)`, `var(--color-text)`, etc. defined in `src/index.css`; do not hardcode colours.
  - **Component structure** — each component lives in its own folder: `ComponentName/ComponentName.jsx` + `ComponentName/ComponentName.module.css`.
  - **Images** — reference assets with relative paths from the component file (e.g. `../../assets/img/backgrounds/feather.jpg` in a CSS Module), not absolute paths from the project root.
  - **Fonts** — already loaded globally; just use `font-family: var(--font-main)` or inherit.
  - **Theme** — use `useMantineColorScheme()` to read/toggle `colorScheme`; avoid hardcoding dark/light colours.

- **Examples of safe edits**:
  - Add content to a stub section: edit the JSX and its `.module.css` file.
  - Add a new sub-component inside an existing section folder and import it.
  - Add a CSS animation: define `@keyframes` in the relevant `.module.css` and apply via a class.

- **What _not_ to do**:
  - Do not introduce additional routers, state managers, or build-tool changes without explicit approval.
  - Do not use global CSS class names — always use CSS Modules.
  - Do not hardcode colours or transitions — use CSS variables.
  - Do not rename or move files without updating all imports.

- **Where to look for context**:
  - `src/App.jsx` — page-switching logic (framer-motion fade, fixed SocialLinks).
  - `src/components/Header/Nav/Nav.jsx` — navigation items, theme toggle, Google auth button.
  - `src/context/AuthContext.jsx` — Google Auth logic and `useAuth()` hook.
  - `src/firebase.js` — Firebase config (replace placeholder keys before use).
  - `src/index.css` — all CSS variables and global reset.
  - `src/components/sections/` — stub sections waiting for content.

If anything is unclear or you want a different tone/level of detail, tell me which area to expand.
