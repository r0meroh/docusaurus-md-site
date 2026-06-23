---
id: creating-pages
title: Creating Pages
sidebar_position: 2
description: How to add new Markdown and MDX documentation pages to the site.
last_update:
  date: 2026-06-23
---

# Creating Pages

Adding a new documentation page is a two-step process.

## Step 1 — Create the File

Place a `.md` or `.mdx` file in the appropriate `docs/` subdirectory. The file name becomes part of the URL:

| File path | URL |
|---|---|
| `docs/guides/my-topic.md` | `/docs/guides/my-topic` |
| `docs/reference/api.md` | `/docs/reference/api` |

**Naming conventions:**
- Use lowercase letters and hyphens only: `my-topic.md` ✅
- No spaces or uppercase: `My Topic.md` ❌

Use `.mdx` instead of `.md` when the page needs React components (Tabs, custom callouts, charts, etc.).

---

## Step 2 — Add Front Matter

Every page should start with a YAML front matter block:

```yaml
---
title: "My Topic"
sidebar_position: 6
description: "One-line summary of this page."
last_update:
  date: 2026-06-23
---
```

After the closing `---`, write standard Markdown (or JSX in `.mdx` files).

:::info Simpler than Jekyll
Docusaurus front matter requires only `title`. There is no `layout`, `parent`, or `has_children` — the sidebar structure is driven by `sidebars.ts` and file organization, not per-page metadata.
:::

---

## Step 3 — Register in the Sidebar (Optional)

By default, Docusaurus **auto-generates** the sidebar from the `docs/` folder structure. If you use auto-generation, just adding the file is enough.

If you use a **manual sidebar** (as this project does), add the page ID to `sidebars.ts`:

```ts
// sidebars.ts
{
  type: "category",
  label: "📖 Guides",
  items: [
    "guides/creating-pages",
    "guides/linking-pages",
    "guides/my-topic",   // ← add your new page here
  ],
}
```

---

## Complete Example

```md
---
title: Configure SSO
sidebar_position: 4
description: "Step-by-step guide to setting up Single Sign-On."
last_update:
  date: 2026-06-23
---

# Configure SSO

This guide walks you through configuring SAML 2.0 SSO.

## Prerequisites
- Admin access to your Identity Provider
- Admin access to DocHub settings

## Steps

1. Log in as an administrator.
2. Navigate to **Settings > Authentication > SSO**.
3. Enter your IdP metadata URL.
4. Click **Save and Test**.
```

---

## Verify Your Page

Start the dev server and confirm your page appears in the sidebar:

```bash
npm start
# Open http://localhost:3000/docusaurus-md-site/docs/guides/configure-sso
```
