---
id: project-structure
title: Project Structure
sidebar_position: 4
description: A detailed breakdown of every file and folder in the Docusaurus repository.
last_update:
  date: 2026-06-23
---

# Project Structure

Understanding the repository layout is key to contributing documentation effectively.

## Directory Tree

```
repo-root/
│
├── .github/
│   ├── workflows/
│   │   └── deploy.yml         ← GitHub Actions: build & deploy to Pages
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docusaurus.config.ts       ← Site-wide configuration (TypeScript)
├── sidebars.ts                ← Sidebar structure definition
├── package.json               ← Node.js dependency manifest
├── tsconfig.json              ← TypeScript configuration
├── .gitignore
│
├── docs/                      ← All documentation content
│   ├── getting-started/       ← "Getting Started" section
│   │   ├── index.md           ← Section landing page
│   │   ├── installation.md
│   │   ├── quick-start.md
│   │   └── project-structure.md
│   ├── guides/                ← "Guides" section
│   │   ├── index.md
│   │   ├── creating-pages.md
│   │   ├── linking-pages.md
│   │   └── docusaurus-features.mdx   ← MDX: uses React components
│   ├── reference/             ← "Reference" section
│   │   ├── index.md
│   │   ├── docusaurus-config.md
│   │   ├── mdx-and-components.mdx
│   │   └── front-matter-fields.md
│   └── contributing/          ← Contribution guidelines
│       ├── index.md
│       └── style-guide.md
│
├── src/
│   ├── pages/                 ← Custom React pages
│   │   ├── index.tsx          ← Homepage (React component)
│   │   └── index.module.css   ← Homepage styles
│   └── css/
│       └── custom.css         ← Infima CSS variable overrides
│
└── static/                    ← Static files copied as-is to build/
    └── img/                   ← Images, logo, favicon
```

---

## Key Files Explained

### `docusaurus.config.ts`

The main configuration file. Controls the site title, URL, navbar, footer, plugins, themes, and more. Written in TypeScript for full type safety and autocomplete in your editor.

:::note No YAML required
Unlike Jekyll's `_config.yml`, Docusaurus config is a TypeScript module — you get type checking, imports, and the full power of JavaScript logic.
:::

### `sidebars.ts`

Defines the sidebar navigation structure explicitly. You can:
- Auto-generate from the `docs/` folder structure
- Define custom ordering and categories
- Add external links into the sidebar
- Nest categories multiple levels deep

### `docs/` — `.md` vs `.mdx`

Any file in `docs/` can be either `.md` (plain Markdown) or `.mdx` (MDX — Markdown + JSX). Use `.mdx` when a page needs React components like `<Tabs>`, `<TabItem>`, custom charts, or interactive demos.

### `src/pages/`

Custom pages outside the `docs/` system. The homepage (`index.tsx`) is a React component. You can add any number of pages here — they map directly to URLs.

### `static/`

Files placed here are copied unchanged to the `build/` root. Use it for images, favicons, `robots.txt`, etc.

### `src/css/custom.css`

Override Docusaurus's [Infima](https://infima.dev) CSS variables here. Change the primary color, font, spacing — no component swizzling needed for simple style changes.

---

## Images Convention

Images are organized by page, matching the same convention as the Jekyll site:

```
static/img/<page-name>/<image-files>
```

**Examples:**

```
static/img/installation/node-version-check.png
static/img/configure-sso/saml-flow.svg
```

Reference them in Markdown:

```markdown
![Node version check](/img/installation/node-version-check.png)
```

Docusaurus serves everything in `static/` at the root URL path, so the `/img/` prefix maps to `static/img/`.
