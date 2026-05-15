# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite HMR)
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # preview production build locally
```

No test suite is configured.

## Architecture

Single-page React 19 + TypeScript landing site built with Vite. No router — all navigation is smooth-scroll via `document.getElementById(id)?.scrollIntoView`.

**Page layout** (`src/App.tsx`): linear stack of section components rendered in order — `Navbar → Hero → Features → Contact → Footer`. Each section component owns its own section element and `id` anchor.

**Planned sections** (nav buttons already wired, sections not yet built): `#calculator`, `#booking`, `#transfer`, `#contacts`. Currently only `#contact` (Contact form) exists.

**Styling**: hybrid approach — global CSS custom properties in `src/index.css` (design tokens: `--accent`, `--text`, `--bg`, etc.) combined with Tailwind v4 utility classes. `#root` is a centered 1126px column with border gutters. Dark mode is handled via `@media (prefers-color-scheme: dark)` in CSS, not a JS toggle. Framer Motion is installed but not yet used.

**Contact form** (`src/components/Contact.tsx`): currently only logs to console and shows an alert — no backend integration yet.
