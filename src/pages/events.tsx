import React from 'react';
import Layout from '@theme/Layout';

import Meta from '@site/src/components/Meta'
import Footer from '@site/src/components/Footer'
import { EventsHero } from '@site/src/components/Hero'

export default function Home() {
  const bgImage = 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d406d03-69e3-4c5c-91da-2e81854f9148%2Frunmebg.png?table=block&id=acbb9b36-230e-4602-8613-8bfbd2bf8eac&cache=v2'
  const title = 'Runme Community Events'
  const description = 'Join us in our bi-weekly Runme community meetings and let us have a chat on Runme and the DevX space as a whole'

  console.log(EventsHero);

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="main events"
    >
      <Meta title={title} description={description} imageUrl={bgImage} />
      <EventsHero />
      <iframe
        src="https://notioniframe.com/notion/wfwbs2chcc"
        style={{ width: '100%', height: '100vh', border: 0, padding: 0 }}>
      </iframe>
      <Footer />
    </Layout>
  );
}
