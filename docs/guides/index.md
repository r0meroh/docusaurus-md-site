---
id: index
title: Guides
sidebar_label: Overview
sidebar_position: 1
description: Step-by-step guides for writing, linking, and using Docusaurus features in your documentation pages.
---

# Guides

Practical walkthroughs for the most common documentation tasks.

## In This Section

- [Creating Pages](./creating-pages) — Add new Markdown or MDX pages to any section
- [Linking Between Pages](./linking-pages) — Cross-link pages using relative paths
- [Docusaurus Features](./docusaurus-features) — MDX, Admonitions, Tabs, Code highlights, and more

## The Golden Rule

Every documentation file is a `.md` or `.mdx` file. The only required metadata is a front matter block at the top:

```md
---
title: My New Page
sidebar_position: 5
---

# My New Page

Your content goes here.
```

:::tip No `layout` key needed
Unlike Jekyll where every page must declare `layout: default`, Docusaurus applies the correct layout automatically based on the file location. Less boilerplate per page.
:::
