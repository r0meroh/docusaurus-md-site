---
id: installation
title: Installation
sidebar_position: 2
description: Install Node.js and scaffold a Docusaurus site locally.
last_update:
  date: 2026-06-23
---

# Installation

## 1 — Install Node.js

Docusaurus requires Node.js 18 or higher.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="os">
  <TabItem value="mac" label="macOS">

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload shell
source ~/.zshrc

# Install and use the LTS version
nvm install --lts
nvm use --lts

# Verify
node -v   # v20.x.x or higher
npm -v    # 10.x.x or higher
```

  </TabItem>
  <TabItem value="windows" label="Windows">

Download and run the [Node.js LTS installer](https://nodejs.org/en/download/) from nodejs.org. This installs both `node` and `npm`.

```powershell
# Verify in PowerShell
node -v
npm -v
```

  </TabItem>
  <TabItem value="linux" label="Linux (Ubuntu/Debian)">

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

# Install LTS
nvm install --lts
nvm use --lts

# Verify
node -v
npm -v
```

  </TabItem>
</Tabs>

---

## 2 — Clone the Repository

```bash
git clone https://github.com/r0meroh/docusaurus-md-site.git
cd docusaurus-md-site
```

---

## 3 — Install Project Dependencies

```bash
npm install
```

This reads `package.json` and installs Docusaurus and all required packages into `node_modules/`.

:::info Why npm instead of bundler?
Unlike the Jekyll equivalent that requires `bundle install` with a Ruby gem manifest, Docusaurus uses the standard Node.js npm ecosystem — no additional runtime or version manager configuration needed beyond Node.js itself.
:::

---

## 4 — Verify the Installation

```bash
npx docusaurus --version
# 3.x.x
```

---

## Next Step

Continue to [Quick Start](./quick-start) to start the dev server and see the site in your browser.
