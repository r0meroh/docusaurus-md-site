---
id: docusaurus-config
title: Docusaurus Configuration
sidebar_position: 2
description: Complete reference for docusaurus.config.ts — the single source of truth for site-wide settings.
last_update:
  date: 2026-06-23
---

# Docusaurus Configuration

`docusaurus.config.ts` is the single configuration file for the entire site. It is a **TypeScript module** that exports a `Config` object.

## Minimal Config

```ts
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'My Site',
  url: 'https://r0meroh.github.io',
  baseUrl: '/docusaurus-md-site/',
};

export default config;
```

---

## Top-Level Fields

### `title`

**Type:** `string`

The site name. Appears in the browser tab and navbar.

```ts
title: 'DocHub'
```

---

### `url`

**Type:** `string`

The root URL where the site is hosted. For GitHub Pages project sites, this is `https://<username>.github.io`.

```ts
url: 'https://r0meroh.github.io'
```

---

### `baseUrl`

**Type:** `string`

The path prefix for the site. For project sites on GitHub Pages, this must be `/<repo-name>/`.

```ts
baseUrl: '/docusaurus-md-site/'
```

:::warning
Getting `baseUrl` wrong is the most common GitHub Pages deployment mistake. All asset paths and internal links are prefixed with this value at build time.
:::

---

### `organizationName` / `projectName`

Required when deploying with `npm run deploy` (Docusaurus's built-in deploy command).

```ts
organizationName: 'r0meroh',
projectName: 'docusaurus-md-site',
```

---

### `onBrokenLinks`

**Type:** `'throw' | 'warn' | 'ignore'`  
**Default:** `'throw'`

What to do when a broken internal link is detected at build time.

```ts
onBrokenLinks: 'throw'  // Recommended — fail the build on broken links
```

---

## `presets`

The preset bundles multiple plugins. The `classic` preset includes the docs plugin, blog plugin, and default theme.

```ts
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/r0meroh/docusaurus-md-site/tree/main/',
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
      blog: false,  // disable the blog plugin
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
],
```

---

## `themeConfig`

### Navbar

```ts
navbar: {
  title: 'DocHub',
  logo: { alt: 'DocHub Logo', src: 'img/logo.svg' },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'docsSidebar',
      position: 'left',
      label: 'Docs',
    },
    {
      href: 'https://github.com/r0meroh/docusaurus-md-site',
      label: 'GitHub',
      position: 'right',
    },
  ],
}
```

### Color Mode

```ts
colorMode: {
  defaultMode: 'light',
  disableSwitch: false,
  respectPrefersColorScheme: true,  // honors OS dark/light preference
}
```

### Prism Syntax Highlighting

```ts
prism: {
  theme: prismThemes.github,       // light mode theme
  darkTheme: prismThemes.dracula,  // dark mode theme
  additionalLanguages: ['bash', 'yaml', 'json', 'ruby'],
}
```

---

## Full Config Reference

See the [official Docusaurus configuration docs](https://docusaurus.io/docs/configuration) for the complete list of options.
