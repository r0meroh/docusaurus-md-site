---
id: front-matter-fields
title: Front Matter Fields
sidebar_position: 4
description: Complete reference for every Docusaurus front matter key supported in docs pages.
last_update:
  date: 2026-06-23
---

# Front Matter Fields

Complete reference for every front matter key supported in `docs/` pages.

:::info Less required than Jekyll
Docusaurus front matter is minimal — only `title` is practically required. Fields like `layout`, `parent`, and `has_children` (Jekyll concepts) do not exist; structure is driven by `sidebars.ts`.
:::

---

## `title`

**Type:** `string`  
**Required:** recommended

The page title. Appears in the browser tab, sidebar, breadcrumbs, and as the top heading (unless you write your own `# H1`).

```yaml
title: "Getting Started"
```

---

## `sidebar_position`

**Type:** `number`  
Controls the position of this page within its sidebar category. Lower numbers appear higher. Equivalent to Jekyll's `nav_order`.

```yaml
sidebar_position: 3
```

---

## `sidebar_label`

**Type:** `string`  
Override the sidebar display label without changing the page `title`.

```yaml
title: "Installation Guide for macOS, Linux, and Windows"
sidebar_label: "Installation"
```

---

## `description`

**Type:** `string`  
A short summary used in SEO `<meta name="description">` tags and in OpenGraph cards.

```yaml
description: "Step-by-step guide to setting up SAML 2.0 SSO."
```

---

## `last_update`

**Type:** object  
Manually override the last-updated metadata. Usually not needed since `showLastUpdateTime: true` in config reads from Git history automatically.

```yaml
last_update:
  date: 2026-06-23
  author: r0meroh
```

---

## `slug`

**Type:** `string`  
Override the default URL slug (derived from the file path).

```yaml
slug: /custom-path
```

---

## `displayed_sidebar`

**Type:** `string`  
Force a specific sidebar to show when viewing this page. Useful for shared pages linked from multiple sections.

```yaml
displayed_sidebar: docsSidebar
```

---

## `hide_title`

**Type:** `boolean` (default: `false`)  
Set to `true` to hide the auto-generated `<h1>` from front matter. Use when you want to write your own custom heading with extra formatting.

```yaml
hide_title: true
```

---

## `hide_table_of_contents`

**Type:** `boolean` (default: `false`)  
Set to `true` to hide the right-side table of contents panel.

```yaml
hide_table_of_contents: true
```

---

## `pagination_prev` / `pagination_next`

**Type:** `string | null`  
Override the previous/next page navigation links at the bottom of the page.

```yaml
pagination_prev: getting-started/quick-start
pagination_next: null   # hides the "next" link
```

---

## `keywords`

**Type:** `string[]`  
Keywords added to the page's SEO meta tags.

```yaml
keywords:
  - docusaurus
  - documentation
  - github pages
```

---

## `draft`

**Type:** `boolean` (default: `false`)  
Set to `true` to mark a page as a draft. Draft pages are excluded from production builds but visible in development (`npm start`).

```yaml
draft: true
```

---

## Comparison: Jekyll vs Docusaurus Front Matter

| Jekyll key | Docusaurus equivalent | Notes |
|---|---|---|
| `layout: default` | — | Not needed; automatic |
| `title:` | `title:` | Same |
| `nav_order:` | `sidebar_position:` | Same concept |
| `parent:` | — | Handled by `sidebars.ts` |
| `has_children:` | — | Handled by `sidebars.ts` |
| `nav_exclude: true` | `displayed_sidebar: null` | Hides from nav |
| `description:` | `description:` | Same |
| `last_modified_date:` | `last_update.date:` | Docusaurus also reads from Git |
| `permalink:` | `slug:` | Same concept |
