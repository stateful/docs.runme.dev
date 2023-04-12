import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Footer from '@site/src/components/Footer'

export default function Home() {
  const bgImage = 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d406d03-69e3-4c5c-91da-2e81854f9148%2Frunmebg.png?table=block&id=acbb9b36-230e-4602-8613-8bfbd2bf8eac&cache=v2'
  const title = 'Runme Community Events'
  const description = 'Join us in our bi-weekly Runme community meetings and let us have a chat on Runme and the DevX space as a whole'

  return (
    <Layout
      title={title}
      description={title}
      wrapperClassName="main"
    >
      <Head>
        <meta property="og:image" content={bgImage} />
        <meta property="twitter:image" content={bgImage} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta property="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
      </Head>
      <iframe
        src="https://notioniframe.com/notion/wfwbs2chcc"
        style={{ width: '100%', height: '100vh', border: 0, padding: 0 }}>
      </iframe>
      <Footer />
    </Layout>
  );
}
