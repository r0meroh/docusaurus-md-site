import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DocHub",
  tagline:
    "Write documentation as code. Review it like code. Ship it automatically.",
  favicon: "img/favicon.ico",

  url: "https://r0meroh.github.io",
  baseUrl: "/docusaurus-md-site/",

  organizationName: "r0meroh",
  projectName: "docusaurus-md-site",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/r0meroh/docusaurus-md-site/tree/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/dochub-social.png",
    navbar: {
      title: "DocHub",
       logo: {
         alt: "DocHub Logo",
         src: "img/mainHeaderLogo/cabi.png",
       },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          html: '<img src="/docusaurus-md-site/img/mainHeaderLogo/docs.png" alt="Docs" class="navbar-item-icon" /> Docs',
        },
        {
          href: "https://github.com/r0meroh/docusaurus-md-site",
          position: "right",
          html: '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" class="navbar-item-icon" /> GitHub',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "/docs/getting-started/" },
            { label: "Guides", to: "/docs/guides/" },
            { label: "Reference", to: "/docs/reference/" },
            { label: "Contributing", to: "/docs/contributing/" },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/r0meroh/docusaurus-md-site",
            },
            {
              label: "Docusaurus",
              href: "https://docusaurus.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DocHub. Built with Docusaurus. Hosted on GitHub Pages.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "yaml", "json", "diff", "ruby"],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
