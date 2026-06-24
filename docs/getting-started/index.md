---
id: index
title: Getting Started
sidebar_label: Overview
sidebar_position: 1
description: Set up your local environment and publish your first documentation page with Docusaurus and GitHub Pages.
---

# Getting Started

This section walks you through everything you need to go from zero to a live documentation site on GitHub Pages using Docusaurus.

## What You'll Learn

- [Installation](./installation.md) — Install Node.js and scaffold the site locally
- [Quick Start](./quick-start.md) — Run the dev server and preview your changes
- [Project Structure](./project-structure.md) — Understand what every file and folder does

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Node.js | ≥ 18.0 | [nodejs.org](https://nodejs.org/) — LTS recommended |
| npm / yarn / pnpm | latest | npm ships with Node.js |
| Git | ≥ 2.30 | [git-scm.com](https://git-scm.com) |
| GitHub account | — | Free tier is sufficient |

:::tip Use a version manager
On macOS/Linux, use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage Node.js versions. On Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows).
:::

## Docusaurus vs Jekyll — At a Glance

Docusaurus is a **React-based** static site generator built by Meta, purpose-built for documentation. Unlike Jekyll (Ruby-based), Docusaurus:

- Uses **MDX** — Markdown + JSX React components
- Has **built-in versioning**, dark mode, and search
- Requires only **Node.js** — no Ruby environment needed
- Ships with a **TypeScript-first** configuration
