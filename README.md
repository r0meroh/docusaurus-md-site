# DocHub — Docusaurus Docs on GitHub Pages

> **Write documentation as code. Review it like code. Ship it automatically.**

DocHub is an open-source, enterprise-ready documentation platform that turns plain Markdown files into a fully navigable, cross-linked knowledge base — hosted for **free** on GitHub Pages using **Docusaurus**.

This is the Docusaurus equivalent of the [Jekyll-based DocHub site](https://github.com/r0meroh/mock-md-central-doc-site). It contains the same documentation content but leverages Docusaurus-exclusive features including MDX, built-in dark mode, admonitions, tab groups, code block enhancements, and TypeScript configuration.

---

## Table of Contents

1. [Why Docusaurus + Markdown?](#why-docusaurus--markdown)
2. [Docusaurus-Exclusive Features](#docusaurus-exclusive-features)
3. [Project Structure](#project-structure)
4. [How to Create a New Documentation Page](#how-to-create-a-new-documentation-page)
5. [How to Edit an Existing Page](#how-to-edit-an-existing-page)
6. [How to Upload Images and Files](#how-to-upload-images-and-files)
7. [How to Deploy and Host on GitHub Pages](#how-to-deploy-and-host-on-github-pages)
8. [Local Development](#local-development)
9. [Doc Sections (Navigation Structure)](#doc-sections-navigation-structure)
10. [Front Matter Quick Reference](#front-matter-quick-reference)
11. [Jekyll vs Docusaurus — Pros & Cons](#jekyll-vs-docusaurus--pros--cons)
12. [Contributing](#contributing)

---

## Why Docusaurus + Markdown?

Docusaurus is a **React-based static site generator** built and maintained by Meta, purpose-built for documentation sites. It turns Markdown (and MDX) files into a fully featured documentation site with zero configuration for common needs.

### Key Benefits Over a Traditional Wiki

| Pain Point | Traditional Wiki | DocHub (Docusaurus) |
|---|---|---|
| Licensing cost | Per-seat, per-month | **Free** (GitHub Pages) |
| Version history | Opaque, hard to diff | **Full Git history** |
| Review workflow | Comments after the fact | **Pull requests** |
| Offline access | Requires internet + VPN | **Clone the repo** |
| Search | Vendor-dependent | **Algolia / local search** |
| Custom branding | Paid plan | **Full CSS + React control** |
| Dark mode | Paid plan or plugin | **Built-in** |
| React components in docs | Not possible | **MDX** |

### Why Docusaurus Specifically?

Docusaurus is the natural choice when your team is comfortable with Node.js and wants a modern, React-powered documentation experience.

**Key benefits:**

- **MDX** — embed React components (interactive demos, live code, charts) directly in Markdown pages
- **Built-in dark/light mode** — works out of the box, respects OS preference
- **Admonitions** — `:::note`, `:::tip`, `:::warning`, `:::danger`, `:::info` with zero CSS setup
- **Tabs component** — grouped, synchronized tab blocks across a page
- **Doc versioning** — snapshot documentation for multiple product releases
- **TypeScript config** — `docusaurus.config.ts` is type-safe with full IDE autocomplete
- **Broken link detection** — build fails on broken internal links (`onBrokenLinks: "throw"`)
- **Auto last-updated** — reads from Git history; no `last_modified_date` to remember per page
- **Component swizzling** — replace any built-in component with your own React implementation
- **Node.js only** — no Ruby, no Bundler, no Gemfile to manage

---

## Docusaurus-Exclusive Features

These features are available in this site and are **not** available in a standard Jekyll + Just the Docs setup without significant custom development.

### 1. MDX — React Components in Markdown

Any `.mdx` file can import and render React components:

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mac" label="macOS">brew install node</TabItem>
  <TabItem value="win" label="Windows">winget install OpenJS.NodeJS</TabItem>
</Tabs>
```

See [docs/guides/docusaurus-features.mdx](docs/guides/docusaurus-features.mdx) for live examples of all features.

### 2. Admonitions

```md
:::tip Pro tip
This renders as a styled callout box with an icon — no custom CSS needed.
:::
```

Five types: `:::note` · `:::tip` · `:::info` · `:::warning` · `:::danger`

### 3. Synchronized Tab Groups

```mdx
<Tabs groupId="os">
  <TabItem value="mac" label="macOS">...</TabItem>
  <TabItem value="linux" label="Linux">...</TabItem>
</Tabs>
```

The `groupId` prop syncs all `<Tabs>` blocks with the same ID across the entire page. The selection persists in `localStorage`.

### 4. Code Block Line Highlighting

````md
```js
const config = {
  // highlight-next-line
  title: 'DocHub',
};
```
````

Also: `title="filename"`, `showLineNumbers`, copy button (automatic).

### 5. Built-in Dark Mode

Toggle in the navbar. Respects `prefers-color-scheme`. Fully customizable via CSS variables in `src/css/custom.css`.

### 6. Doc Versioning

```bash
npm run docusaurus docs:version 1.0
```

Creates `versioned_docs/version-1.0/` and a version dropdown in the navbar.

### 7. TypeScript Configuration

`docusaurus.config.ts` gives you type-safe configuration with IDE autocomplete and compile-time errors.

### 8. Broken Link Enforcement

`onBrokenLinks: "throw"` in `docusaurus.config.ts` causes `npm run build` to **fail** if any internal link is broken — preventing dead links from reaching production.

### 9. Auto Last-Updated Metadata

`showLastUpdateTime: true` and `showLastUpdateAuthor: true` in the docs preset reads from Git history automatically — no per-page `last_modified_date` to maintain.

### 10. Component Swizzling

Replace any Docusaurus UI component with your own React implementation:

```bash
npm run swizzle @docusaurus/theme-classic Footer -- --wrap
```

---

## Project Structure

```
repo-root/
│
├── .github/
│   ├── workflows/
│   │   └── deploy.yml         ← GitHub Actions: build & deploy on push to main
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docusaurus.config.ts       ← Site-wide configuration (TypeScript)
├── sidebars.ts                ← Sidebar navigation structure
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
│   │   └── docusaurus-features.mdx  ← MDX: uses React components
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
│   │   ├── index.tsx          ← Homepage
│   │   └── index.module.css
│   └── css/
│       └── custom.css         ← Infima CSS variable overrides
│
└── static/                    ← Static assets (served at root URL)
    └── img/                   ← Images organized by page name
        └── <page-name>/       ← One subdirectory per page
```

---

## How to Create a New Documentation Page

> **Estimated time:** 2–3 minutes

### Step 1 — Decide Where It Belongs

Choose the section folder that best fits your content:

```
docs/getting-started/   ← Setup, prerequisites, first steps
docs/guides/            ← How-to articles, tutorials
docs/reference/         ← Config reference, syntax lookups
docs/contributing/      ← Contributor workflows and style
```

To create a **brand-new section**, create a new folder and add an `index.md` inside it.

---

### Step 2 — Create the Markdown File

Name your file using lowercase letters and hyphens only:

```
✅  docs/guides/configure-sso.md
✅  docs/reference/api-endpoints.md
❌  docs/guides/Configure SSO.md    (spaces not allowed)
❌  docs/guides/ConfigureSSO.md     (uppercase causes routing issues)
```

Use `.mdx` instead of `.md` if the page needs React components (Tabs, Admonitions in code examples, etc.).

---

### Step 3 — Add Front Matter

Paste this block at the very top and fill in the values:

```yaml
---
title: "Your Page Title"
sidebar_position: 10       # position in sidebar (lower = higher up)
description: "One-sentence summary of what this page covers."
last_update:
  date: 2026-06-23
---
```

No `layout`, `parent`, or `has_children` needed — Docusaurus handles this automatically.

---

### Step 4 — Register in the Sidebar

Add the page ID to `sidebars.ts` in the appropriate category:

```ts
{
  type: "category",
  label: "📖 Guides",
  items: [
    "guides/creating-pages",
    "guides/linking-pages",
    "guides/configure-sso",   // ← add your page here
  ],
}
```

---

### Step 5 — Write Your Content

```md
---
title: Configure SSO
sidebar_position: 4
description: "Step-by-step guide to setting up SAML 2.0 SSO."
last_update:
  date: 2026-06-23
---

# Configure SSO

This guide walks you through configuring Single Sign-On.

## Prerequisites

- Admin access to your Identity Provider (IdP)
- Admin rights in the DocHub settings panel

## Steps

1. Navigate to **Settings > Authentication > SSO**.
2. Enter your **IdP Metadata URL**.
3. Click **Save and Test**.
4. Verify the login flow with a test account.
```

---

### Step 6 — Preview Locally

```bash
npm start
# Open http://localhost:3000/docusaurus-md-site/
# Your new page appears in the sidebar immediately
```

---

### Step 7 — Submit a Pull Request

```bash
git checkout -b docs/add-sso-guide
git add docs/guides/configure-sso.md sidebars.ts
git commit -m "docs: add SSO configuration guide"
git push -u origin docs/add-sso-guide
```

Open a pull request on GitHub. The page deploys automatically when the PR is merged to `main`.

---

## How to Edit an Existing Page

> **Estimated time:** 1–3 minutes

### Option A — Edit in GitHub's Web UI

1. Navigate to the file on GitHub (e.g., `docs/guides/creating-pages.md`)
2. Click the **pencil icon** (✏️) in the top-right of the file view
3. Make your changes in the built-in editor
4. Select **"Create a new branch for this commit and start a pull request"**
5. Fill in the PR form and submit

Every page also has an **"Edit this page"** link at the bottom (configured via `editUrl` in `docusaurus.config.ts`) that links directly to the GitHub editor.

### Option B — Edit Locally

```bash
# 1. Pull the latest changes
git checkout main
git pull origin main

# 2. Create a branch
git checkout -b docs/update-installation-guide

# 3. Open the file in your editor
code docs/getting-started/installation.md

# 4. Preview
npm start

# 5. Commit and push
git add docs/getting-started/installation.md
git commit -m "docs: update Node.js version requirement to 20 LTS"
git push -u origin docs/update-installation-guide

# 6. Open a pull request on GitHub
```

---

## How to Upload Images and Files

### Images

Images are organized by page. Every page that uses images gets its own subdirectory named after the page's title slug under `static/img/`:

```
static/img/<page-name>/<image-files>
```

**Examples:**

```
static/img/configure-sso/saml-flow.png
static/img/configure-sso/idp-settings-screenshot.png
static/img/installation/node-version-check.png
```

#### Create the Directory and Add the Image

```bash
mkdir -p static/img/configure-sso
cp ~/Downloads/saml-flow.png static/img/configure-sso/
git add static/img/configure-sso/saml-flow.png
```

#### Reference in Markdown

```md
![SAML flow diagram](/img/configure-sso/saml-flow.png)
```

No `relative_url` filter needed — Docusaurus resolves `static/` paths automatically.

### Naming the Image Directory

| Page title | `.md` filename | Image directory |
|---|---|---|
| `Configure SSO` | `configure-sso.md` | `static/img/configure-sso/` |
| `API Endpoints` | `api-endpoints.md` | `static/img/api-endpoints/` |
| `Installation` | `installation.md` | `static/img/installation/` |

### Image Best Practices

| Guideline | Why |
|---|---|
| One subdirectory per page (`static/img/<page-name>/`) | Keeps images scoped to the page that uses them |
| Use descriptive file names (`sso-flow.png` not `img1.png`) | Easier to reference and maintain |
| Prefer SVG for diagrams | Scales to any screen size without blurring |
| Keep files under 500 KB | Keeps the repository lean and Pages loads fast |
| Always add `alt` text | Accessibility and SEO |

---

## How to Deploy and Host on GitHub Pages

### One-Time Setup (4 steps)

#### Step 1 — Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

#### Step 2 — Update `docusaurus.config.ts` with Your URLs

```ts
url: "https://<your-username>.github.io",
baseUrl: "/<your-repo-name>/",
organizationName: "<your-username>",
projectName: "<your-repo-name>",
```

#### Step 3 — Push to `main`

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically runs on every push to `main`:

```bash
git add .
git commit -m "chore: configure site URL for GitHub Pages"
git push origin main
```

#### Step 4 — Watch the Deployment

1. Go to the **Actions** tab of your repository
2. You'll see a workflow run named **"Deploy to GitHub Pages"**
3. Click it to monitor the build and deploy steps

```
Actions tab
┌──────────────────────────────────────────────────────┐
│  All workflows                                       │
│  ─────────────────────────────────────────────────── │
│  ✅ Deploy to GitHub Pages    main   1 minute ago    │
│     ├── build    ✅  30s                             │
│     └── deploy   ✅  10s                             │
│                                                      │
│  Site URL: https://r0meroh.github.io/docusaurus-md-site/ │
└──────────────────────────────────────────────────────┘
```

Total time from push to live: **~40–60 seconds** (faster than Jekyll's ~60–90s).

### Deployment Checklist

Before your first deploy, verify:

- [ ] `docusaurus.config.ts` has correct `url`, `baseUrl`, `organizationName`, `projectName`
- [ ] **Settings → Pages → Source** is set to **GitHub Actions**
- [ ] The workflow file exists at `.github/workflows/deploy.yml`
- [ ] `npm run build` passes locally with no errors

---

## Local Development

### Prerequisites

| Tool | Version | Install |
|---|---|---|
| Node.js | ≥ 18.0 | [nodejs.org](https://nodejs.org/) — LTS recommended |
| npm | latest | Ships with Node.js |
| Git | ≥ 2.30 | [git-scm.com](https://git-scm.com) |

### Setup

```bash
# Clone the repository
git clone https://github.com/r0meroh/docusaurus-md-site.git
cd docusaurus-md-site

# Install dependencies
npm install

# Start the dev server with hot reload
npm start

# Open in browser
open http://localhost:3000/docusaurus-md-site/
```

### Useful Commands

```bash
# Start dev server (hot reload)
npm start

# Production build (outputs to build/)
npm run build

# Serve the production build locally
npm run serve

# Clear all caches
npm run clear

# Type-check TypeScript files
npm run typecheck

# Check for broken links (included in build)
npm run build   # fails fast on any broken internal link
```

---

## Doc Sections (Navigation Structure)

The sidebar is organized into **sections** — top-level categories defined in `sidebars.ts`.

### Existing Sections

| Section | Folder | Purpose |
|---|---|---|
| Getting Started | `docs/getting-started/` | Setup, installation, first steps |
| Guides | `docs/guides/` | How-to articles, tutorials, and Docusaurus features |
| Reference | `docs/reference/` | Config, MDX components, front matter fields |
| Contributing | `docs/contributing/` | How to contribute docs, style guide |

### Adding a New Section

1. Create the folder: `docs/my-new-section/`
2. Create `docs/my-new-section/index.md` with a `title` and `sidebar_label`
3. Add the category to `sidebars.ts`:

```ts
{
  type: "category",
  label: "⚙️ My New Section",
  collapsible: true,
  collapsed: false,
  link: { type: "doc", id: "my-new-section/index" },
  items: [
    "my-new-section/first-page",
    "my-new-section/second-page",
  ],
}
```

---

## Front Matter Quick Reference

```yaml
---
# ── Commonly used ────────────────────────────────────────────
title: "Page Title"             # shown in nav, tab, and as <h1>
sidebar_position: 3             # sidebar order (lower = higher up)
sidebar_label: "Short Label"    # override sidebar display name
description: "One-line summary."

# ── Content control ──────────────────────────────────────────
draft: true                     # exclude from production build
hide_title: false               # hide the auto-generated <h1>
hide_table_of_contents: false   # hide the right-side TOC

# ── Metadata ─────────────────────────────────────────────────
last_update:
  date: 2026-06-23
  author: r0meroh
keywords: [docusaurus, docs, github-pages]

# ── URL ──────────────────────────────────────────────────────
slug: /custom-path              # override default URL

# ── Navigation ───────────────────────────────────────────────
pagination_prev: null           # hide previous page link
pagination_next: null           # hide next page link
---
```

---

## Jekyll vs Docusaurus — Pros & Cons

Both Jekyll and Docusaurus are excellent choices for free documentation sites on GitHub Pages. The right choice depends on your team's stack and feature requirements.

---

### Jekyll

**Best for:** Teams that want zero JavaScript tooling, work in Ruby, or need GitHub Pages' native build support.

#### ✅ Pros

| Advantage | Detail |
|---|---|
| **Native GitHub Pages support** | Push to `main` and GitHub builds Jekyll automatically — no Actions workflow needed at all |
| **No Node.js required** | Only Ruby and Bundler; simpler for teams already in a Ruby ecosystem |
| **Lightweight** | No npm, no `node_modules`, smaller repo footprint |
| **Mature ecosystem** | Large library of themes (Just the Docs, Minimal Mistakes) and plugins |
| **Pure Markdown** | Writers who don't know React or JSX can contribute without learning anything new |
| **Low cognitive overhead** | Front matter + Markdown is the whole mental model |
| **Long-term stability** | Jekyll 3.x/4.x is feature-frozen and extremely stable |

#### ❌ Cons

| Disadvantage | Detail |
|---|---|
| **Ruby dependency** | Requires managing Ruby versions (rbenv, asdf) — painful on macOS with system Ruby 2.6 |
| **No MDX / React** | Cannot embed interactive React components in docs |
| **No built-in dark mode** | Requires theme support or custom CSS hacks |
| **No built-in admonitions** | Requires kramdown attribute syntax (`{: .callout-note}`) + custom CSS |
| **No built-in versioning** | Multi-version docs require manual folder management |
| **Slower builds** | Ruby is slower than Node.js for large sites; no incremental rebuild by default |
| **Liquid template syntax** | Liquid is less powerful than JSX; raw/endraw escaping required in code examples |
| **Broken links are silent** | Jekyll generates pages even if internal links are broken |
| **No TypeScript config** | `_config.yml` is untyped YAML — no autocomplete or validation |
| **Gems can conflict** | `github-pages` gem pins dependency versions; upgrading is non-trivial |

---

### Docusaurus

**Best for:** Teams comfortable with Node.js, React, or TypeScript who want a modern, feature-rich documentation platform.

#### ✅ Pros

| Advantage | Detail |
|---|---|
| **MDX support** | Embed React components (Tabs, live code, charts) directly in Markdown |
| **Built-in dark/light mode** | Works out of the box; respects OS preference |
| **Built-in admonitions** | `:::note`, `:::tip`, `:::warning`, etc. — zero CSS setup |
| **Doc versioning** | Snapshot multiple product versions natively |
| **Broken link enforcement** | `onBrokenLinks: "throw"` fails the build on broken internal links |
| **TypeScript config** | Full type safety and IDE autocomplete for `docusaurus.config.ts` |
| **Auto last-updated** | Reads from Git history — no per-page metadata to maintain |
| **Faster builds** | Node.js + webpack/Rspack is significantly faster than Jekyll for large sites |
| **Component swizzling** | Replace any theme component with a custom React implementation |
| **Active development** | Meta-backed, frequent releases, large community |
| **Algolia search** | First-class Algolia DocSearch integration |
| **i18n built-in** | Multi-language support built into the framework |

#### ❌ Cons

| Disadvantage | Detail |
|---|---|
| **Node.js required** | Adds Node.js + npm to the contributor toolchain |
| **No native GitHub Pages build** | Requires a GitHub Actions workflow (simple, but an extra file) |
| **Heavier footprint** | `node_modules/` is large; first `npm install` takes longer than `bundle install` |
| **React knowledge needed for advanced use** | MDX and swizzling require JSX/React familiarity |
| **More moving parts** | `package.json`, `tsconfig.json`, `sidebars.ts`, `docusaurus.config.ts` vs Jekyll's single `_config.yml` |
| **Breaking changes between major versions** | Docusaurus 2 → 3 required migration; actively evolving |
| **Overkill for simple sites** | For a basic 5-page site, Jekyll is simpler |
| **Cold start time** | `npm start` takes a few seconds to compile; Jekyll's `jekyll serve` is faster to start |

---

### Side-by-Side Summary

| Factor | Jekyll | Docusaurus |
|---|---|---|
| Language runtime | Ruby | Node.js |
| Config format | YAML (`_config.yml`) | TypeScript (`docusaurus.config.ts`) |
| Templating | Liquid + HTML | React + MDX |
| Dark mode | Theme-dependent | ✅ Built-in |
| Admonitions | Custom CSS required | ✅ Built-in |
| Tabs | Custom HTML/JS | ✅ Built-in component |
| Versioning | Manual | ✅ Built-in |
| Broken link detection | ❌ Silent | ✅ Build error |
| GitHub Pages deploy | ✅ Native (no Actions needed) | Requires Actions workflow |
| Search | Theme-dependent | ✅ Algolia / local |
| i18n | Plugin | ✅ Built-in |
| Node.js required | ❌ | ✅ |
| Ruby required | ✅ | ❌ |
| Recommended for | Simple sites, Ruby teams | Feature-rich sites, JS/React teams |

---

### Recommendation

**Choose Jekyll if:**
- Your team has no Node.js/React experience
- You want the simplest possible setup (no workflow file, no `node_modules`)
- You need a stable, low-maintenance, long-lived documentation site

**Choose Docusaurus if:**
- You want dark mode, admonitions, and Tabs without custom CSS
- You need doc versioning for multiple product releases
- Your team is comfortable with Node.js or React
- You want type-safe configuration and IDE autocomplete
- You're building a large documentation site and need faster builds

---

## Contributing

We welcome documentation contributions from everyone on the team.

### Quick Start

```bash
git checkout -b docs/<your-topic>
# create or edit files in docs/
# add new pages to sidebars.ts
git add .
git commit -m "docs: describe what you added or changed"
git push -u origin docs/<your-topic>
# open a pull request on GitHub
```

### Before You Open a PR

- [ ] Front matter has `title` and `sidebar_position`
- [ ] File name is `lowercase-with-hyphens.md` (or `.mdx`)
- [ ] Code blocks have language tags
- [ ] Internal links use relative paths
- [ ] New pages are registered in `sidebars.ts`
- [ ] `npm run build` passes with no errors (verifies no broken links)
- [ ] Preview runs locally with `npm start`

### Review and Merge

PRs are reviewed by any team member with write access. Merging to `main` automatically triggers a deploy. The live site updates within ~40–60 seconds.

---

## License

This project is released under the [MIT License](LICENSE).

---

*Powered by [Docusaurus](https://docusaurus.io) · Hosted on [GitHub Pages](https://pages.github.com) · Built with ❤️ and Markdown*
