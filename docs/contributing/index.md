---
id: index
title: Contributing
sidebar_label: Overview
sidebar_position: 1
description: Guidelines for contributing documentation, reviewing PRs, and maintaining quality.
---

# Contributing

Documentation is a team effort. This section explains how to contribute new pages, edit existing ones, and get your changes reviewed and published.

## The Contribution Workflow

```
Fork / branch → Edit / create files → Commit → Push → Open PR → Review → Merge → Auto-deploy
```

## In This Section

- [Style Guide](./style-guide.md) — Voice, tone, formatting conventions

## Quick Contribution Checklist

- [ ] Page has a `title` in front matter
- [ ] File name is lowercase with hyphens only (`my-topic.md`)
- [ ] Headings are hierarchical (H2 under H1, H3 under H2)
- [ ] Code blocks have language tags for syntax highlighting
- [ ] All internal links use relative paths
- [ ] `last_update.date` is updated if you made significant changes
- [ ] Preview runs locally without errors (`npm start`)
- [ ] `npm run build` completes with no broken link errors
