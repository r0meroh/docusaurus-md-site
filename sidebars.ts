import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "category",
      label: "🚀 Getting Started",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "getting-started/index" },
      items: [
        "getting-started/installation",
        "getting-started/quick-start",
        "getting-started/project-structure",
      ],
    },
    {
      type: "category",
      label: "📖 Guides",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "guides/index" },
      items: [
        "guides/creating-pages",
        "guides/linking-pages",
        "guides/docusaurus-features",
      ],
    },
    {
      type: "category",
      label: "📋 Reference",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "reference/index" },
      items: [
        "reference/docusaurus-config",
        "reference/mdx-and-components",
        "reference/front-matter-fields",
      ],
    },
    {
      type: "category",
      label: "🤝 Contributing",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "contributing/index" },
      items: ["contributing/style-guide"],
    },
  ],
};

export default sidebars;
