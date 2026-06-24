---
id: style-guide
title: Style Guide
sidebar_position: 2
description: Voice, tone, formatting, and structural conventions for all documentation.
last_update:
  date: 2026-06-23
---

# Style Guide

Consistent documentation is easier to read, easier to maintain, and builds trust with readers. Follow these conventions in all documentation pages.

---

## Voice and Tone

- **Second-person, active voice.** Address the reader as "you": "Click **Save**", not "The user should click Save."
- **Present tense.** "Docusaurus builds the site", not "Docusaurus will build the site."
- **Concise.** One idea per sentence. Aim for sentences under 25 words.
- **Scannable.** Readers skim. Use headings, bullets, and tables over long prose paragraphs.

---

## Page Structure

Every page should follow this order:

1. **Front matter block** (`---` YAML block)
2. **Optional lead paragraph** — a single sentence describing the page (if the `description` front matter isn't enough)
3. **Body** — H2 sections, each covering one concept
4. **Next Step or See Also** section at the bottom — link to related pages

---

## Headings

- Use title case for H1 (`# My Page Title`) and sentence case for H2+ (`## My section heading`).
- Do not skip heading levels (H2 → H4). Keep the hierarchy clean.
- The page `title` in front matter generates the browser tab and breadcrumb label — you still need to write `# Title` as the first heading in the body.

---

## Code

- Always specify the language on fenced code blocks.
- Use real, runnable examples. Avoid pseudocode.
- When showing commands, use `bash` as the language tag.
- Inline code (backticks) for: file names, paths, command names, flag names, config keys, UI labels.
- Add `title="filename"` to code blocks when showing file contents.

---

## Admonitions

Use the built-in admonition types instead of custom blockquotes:

| Type | When to Use |
|---|---|
| `:::note` | Additional context that is helpful but not essential |
| `:::tip` | A shortcut or best practice |
| `:::info` | Feature context or background |
| `:::warning` | Something the reader should be careful about |
| `:::danger` | An action that could cause data loss or breakage |

Use sparingly — a page full of warnings loses impact.

---

## UI Elements

Bold UI labels and button names: "Click **Save**", "Navigate to **Settings > Security**."

---

## Formatting Specifics

| Element | Convention |
|---|---|
| File names | `backtick code` |
| Folder names | `backtick code` with trailing `/` — e.g. `docs/` |
| Configuration keys | `backtick code` |
| Button / UI label | **Bold** |
| First use of a term | *Italic* |
| External link | Full URL, opens in same tab unless explicitly new-tab |

---

## Images and Diagrams

- Store images in `static/img/<page-name>/`.
- Use descriptive `alt` text for accessibility.
- Keep screenshots up to date with the current UI.
- Prefer vector diagrams (SVG) over raster (PNG/JPG) for anything that might be zoomed.

---

## MDX vs Markdown

Use `.md` by default. Upgrade to `.mdx` only when the page needs React components:

| Use `.md` | Use `.mdx` |
|---|---|
| Plain prose and code | Tabs component |
| Tables and lists | Interactive demos |
| Admonitions | Custom React components |
| Standard code blocks | Live code editor |
