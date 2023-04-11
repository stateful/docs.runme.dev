import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Footer from '@site/src/components/Footer'

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: Events`}
      description="Runme Community Events"
      wrapperClassName="main"
    >
      <iframe
        src="https://notioniframe.com/notion/wfwbs2chcc"
        style={{ width: '100%', height: '100vh', border: 0, padding: 0 }}>
      </iframe>
      <Footer />
    </Layout>
  );
}
