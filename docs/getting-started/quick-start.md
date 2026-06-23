---
id: quick-start
title: Quick Start
sidebar_position: 3
description: Run the Docusaurus dev server and preview your changes before publishing.
last_update:
  date: 2026-06-23
---

# Quick Start

Once Node.js and dependencies are installed, you can run the site locally in under one minute.

## Start the Dev Server

```bash
npm start
```

Open your browser and navigate to:

```
http://localhost:3000/docusaurus-md-site/
```

Docusaurus watches for file changes and **hot-reloads** the browser automatically — no page refresh needed, changes appear instantly.

:::tip Hot reload vs live reload
Jekyll's `--livereload` reloads the entire page. Docusaurus uses React's **hot module replacement (HMR)** — only the changed component re-renders, preserving scroll position and UI state.
:::

---

## Useful Dev Commands

| Command | Effect |
|---|---|
| `npm start` | Start dev server with hot reload on `localhost:3000` |
| `npm run build` | Production build to `build/` directory |
| `npm run serve` | Serve the production build locally |
| `npm run clear` | Clear `.docusaurus/` and `build/` cache |
| `npm run typecheck` | Run TypeScript type checks |

---

## Build for Production

```bash
npm run build
```

The compiled static site is written to the `build/` directory. This is what GitHub Pages serves. The `build/` folder is in `.gitignore` — it's generated during the CI deploy, not committed.

---

## Project Structure at a Glance

```
.
├── docusaurus.config.ts   ← Site-wide configuration (TypeScript)
├── sidebars.ts            ← Sidebar navigation structure
├── package.json           ← Node.js dependency manifest
├── tsconfig.json          ← TypeScript configuration
├── docs/                  ← All documentation pages (.md / .mdx)
│   ├── getting-started/
│   ├── guides/
│   ├── reference/
│   └── contributing/
├── src/
│   ├── pages/             ← Custom React pages (homepage, etc.)
│   └── css/custom.css     ← CSS variable overrides
├── static/                ← Static assets served as-is (images, favicon)
└── .github/
    └── workflows/
        └── deploy.yml     ← Auto-deploy to GitHub Pages
```

---

## Next Step

Continue to [Project Structure](./project-structure) for a detailed breakdown of each file and folder.
