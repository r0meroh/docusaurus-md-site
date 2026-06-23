---
id: linking-pages
title: Linking Between Pages
sidebar_position: 3
description: How to cross-link documentation pages using relative paths and Docusaurus link helpers.
last_update:
  date: 2026-06-23
---

# Linking Between Pages

DocHub pages can be linked to each other using standard Markdown links.

## Relative Links (Recommended)

Relative links stay valid even if the site moves to a different base URL. Docusaurus validates all internal links at build time and throws an error for broken ones.

```md
<!-- From docs/guides/my-page.md -->

See [Installation](../getting-started/installation) for setup instructions.
See [MDX Reference](../reference/mdx-and-components) for syntax details.
See [another page in this group](./other-guide) for more.
```

:::tip Build-time link validation
Unlike Jekyll which silently generates pages with broken links, Docusaurus throws a **build error** on broken internal links when `onBrokenLinks: "throw"` is set in `docusaurus.config.ts`. This prevents dead links from ever reaching production.
:::

---

## Linking to Headings (Anchors)

Add `#heading-slug` to link directly to a section. Docusaurus auto-generates anchor IDs from headings.

```md
[Jump to Step 2](#step-2--create-the-markdown-file)
[See Prerequisites](./installation#prerequisites)
```

**How slugs are generated:**

| Heading | Anchor |
|---|---|
| `## Prerequisites` | `#prerequisites` |
| `## Step 1 — Install Node.js` | `#step-1--install-nodejs` |
| `## My Section (Advanced)` | `#my-section-advanced` |

You can also set explicit IDs with a comment:

```md
### Prerequisites {#custom-prerequisites-id}
```

---

## Linking to External Resources

```md
Visit the [Docusaurus documentation](https://docusaurus.io/docs) for more.
```

To open in a new tab, use standard HTML inside MDX:

```mdx
<a href="https://docusaurus.io/docs" target="_blank" rel="noopener">
  Docusaurus docs
</a>
```

---

## Linking to Images

Place images in `static/img/<page-name>/` and reference them with a root-relative path:

```md
![Architecture diagram](/img/architecture.png)
```

Docusaurus does not require a Liquid `relative_url` filter — paths in `static/` are always served from the site root correctly.

---

## Using the `@site` Alias

For imports in MDX files, use the `@site` alias to reference files relative to the repo root:

```mdx
import MyComponent from '@site/src/components/MyComponent';
```
