import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Footer from '@site/src/components/Footer'
import { Hero } from '@site/src/components/Hero'
import { HowItWorks, OpenSource, FinalCta, CLI, Documentation } from '@site/src/components/Sections';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: Run your Readme.md`}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="main"
    >
      <div className="relative overflow-x-hidden mb-24">
        <Hero />
        <HowItWorks />
        <OpenSource />
        <CLI />
        <Documentation />
        <FinalCta />
      </div>
      <Footer />
    </Layout>
  );
}
