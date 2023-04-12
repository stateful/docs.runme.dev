import React from 'react';
import Layout from '@theme/Layout';

import Meta from '@site/src/components/Meta'
import Footer from '@site/src/components/Footer'
import { Hero } from '@site/src/components/Hero'
import { HowItWorks, OpenSource, FinalCta, CLI, Documentation } from '@site/src/components/Sections';

export default function Home() {
  return (
    <Layout wrapperClassName="main">
      <Meta />
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
