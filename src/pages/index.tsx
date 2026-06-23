import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const features: FeatureItem[] = [
  {
    title: "Getting Started",
    emoji: "🚀",
    description:
      "Install Node.js, scaffold a new Docusaurus site, and preview it locally in under five minutes.",
    link: "/docs/getting-started/",
  },
  {
    title: "Guides",
    emoji: "📖",
    description:
      "Step-by-step walkthroughs for creating pages, cross-linking content, and using Docusaurus-exclusive features like MDX, Tabs, and Admonitions.",
    link: "/docs/guides/",
  },
  {
    title: "Reference",
    emoji: "📋",
    description:
      "Complete reference for docusaurus.config.ts, front matter fields, MDX components, and the Docusaurus plugin system.",
    link: "/docs/reference/",
  },
  {
    title: "Contributing",
    emoji: "🤝",
    description:
      "Voice, tone, formatting conventions, and the PR checklist for keeping documentation consistent and high quality.",
    link: "/docs/contributing/",
  },
];

function Feature({ title, emoji, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--outline button--primary" to={link}>
          Explore →
        </Link>
      </div>
    </div>
  );
}

function ComparisonRow({
  feature,
  dochub,
  confluence,
  sharepoint,
}: {
  feature: string;
  dochub: string;
  confluence: string;
  sharepoint: string;
}) {
  return (
    <tr>
      <td>{feature}</td>
      <td>{dochub}</td>
      <td>{confluence}</td>
      <td>{sharepoint}</td>
    </tr>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Docs as Code on GitHub Pages`}
      description="DocHub: a Docusaurus-powered documentation site hosted free on GitHub Pages. Write Markdown, ship via PR."
    >
      {/* ── Hero ────────────────────────────────────────────── */}
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Welcome to DocHub
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started/"
            >
              Get Started — 5 min ⏱
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/guides/docusaurus-features"
            >
              Docusaurus Features ✨
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Feature cards ───────────────────────────────── */}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props) => (
                <Feature key={props.title} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Why DocHub comparison table ──────────────────── */}
        <section className={styles.comparison}>
          <div className="container">
            <Heading as="h2">Why DocHub?</Heading>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>DocHub (Docusaurus)</th>
                  <th>Confluence</th>
                  <th>SharePoint</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  feature="Free to host"
                  dochub="✅ GitHub Pages"
                  confluence="❌ Per-seat"
                  sharepoint="❌ Per-seat"
                />
                <ComparisonRow
                  feature="Version controlled"
                  dochub="✅ Full Git history"
                  confluence="Limited"
                  sharepoint="Limited"
                />
                <ComparisonRow
                  feature="PR-based review"
                  dochub="✅ Native"
                  confluence="❌"
                  sharepoint="❌"
                />
                <ComparisonRow
                  feature="Dark / light mode"
                  dochub="✅ Built-in"
                  confluence="Paid"
                  sharepoint="Limited"
                />
                <ComparisonRow
                  feature="Full-text search"
                  dochub="✅ Algolia / local"
                  confluence="✅"
                  sharepoint="✅"
                />
                <ComparisonRow
                  feature="React components in docs"
                  dochub="✅ MDX"
                  confluence="❌"
                  sharepoint="❌"
                />
                <ComparisonRow
                  feature="Doc versioning"
                  dochub="✅ Built-in"
                  confluence="Manual"
                  sharepoint="❌"
                />
                <ComparisonRow
                  feature="Offline access"
                  dochub="✅ Clone repo"
                  confluence="❌"
                  sharepoint="❌"
                />
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
}
