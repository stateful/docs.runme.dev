import React from 'react'
import Head from '@docusaurus/Head'

import { title, imageUrl, description, previewImages } from '@site/src/constants'

const DEFAULT_META_TAGS = { title, imageUrl, description, previewImages }

export default function MetaTags (props: Partial<typeof DEFAULT_META_TAGS>) {
  const meta = {
    ...DEFAULT_META_TAGS,
    ...props
  }

  return (
    <Head>
      <meta property="og:image" content={meta.imageUrl} />
      <meta property="twitter:image" content={meta.imageUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="description" content={meta.description} />
      <meta property="og:description" content={meta.description} />
      <meta property="twitter:description" content={meta.description} />
      {meta.previewImages.map((imageUrl) => (
        <meta property="og:image" content={imageUrl} />
      ))}
    </Head>
  )
}
