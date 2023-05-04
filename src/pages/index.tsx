import React from 'react';
import Layout from '@theme/Layout';

import Meta from '@site/src/components/Meta'
import Footer from '@site/src/components/Footer'
import { Hero } from '@site/src/components/Hero'
import { Benefits, HowItWorks } from '@site/src/components/Sections';

export default function Home() {
  return (
    <Layout wrapperClassName="main">
      <Meta />
      <div className="relative mb-24 overflow-x-hidden">
        <Hero />
        <Benefits />
        {/* <HowItWorks /> */}
        {/* <OpenSource /> */}
        {/* <CLI /> */}
        {/* <Documentation /> */}
        {/* <FinalCta /> */}
      </div>
      <Footer />
    </Layout>
  );
}
