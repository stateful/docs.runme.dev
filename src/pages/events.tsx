import React from 'react'
import Layout from '@theme/Layout'

import Meta from '@site/src/components/Meta'
import Footer from '@site/src/components/Footer'
import { EventsHero } from '@site/src/components/Hero'

export default function Home() {
  const bgImage = 'https://runme.dev/svg/community-events.svg'
  const title = 'Runme Community Events'
  const description = 'Join us in our Runme community meetings and let us have a chat on Runme and the DevX space as a whole'

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="main"
    >
      <Meta title={title} description={description} imageUrl={bgImage} previewImages={[bgImage]} />
      <EventsHero />
      <div className="relative overflow-x-hidden events">
        <iframe
          src="https://notioniframe.com/notion/wfwbs2chcc"
          style={{ width: '100%', height: '100vh', border: 0, padding: 0 }}>
        </iframe>
      </div>
      <Footer />
    </Layout>
  );
}
