import React from 'react'
import Head from 'next/head'

type MetaHeadProps = {
  title: string
  desc: string
  keyword: string
  image: string
  url: string
}

const MetaHead = ({
  title = '',
  desc = '',
  keyword = '',
  image = '',
  url = '',
}: MetaHeadProps) => (
  <Head>
    <title>
      {title} | {process.env.NEXT_PUBLIC_WEB_NAME}
    </title>
    <meta name="description" content={desc} />
    {keyword && <meta name="keywords" content={keyword} />}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="googlebot-news" content="index, follow, follow" />
    <meta name="googlebot" content="index, follow, follow" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={url} />
  </Head>
)

export default MetaHead
