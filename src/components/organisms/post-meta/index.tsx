/* eslint-disable @typescript-eslint/restrict-template-expressions,no-secrets/no-secrets */

import { NextSeo, ArticleJsonLd } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import type { PostQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

type PostMetaPropeties = {
  data: PostQuery['postById'] | undefined
}

const PostMeta: React.FC<PostMetaPropeties> = ({ data }) => (
  <React.Fragment>
    <NextSeo
      title={data?.header.title}
      canonical={`https://re-taro.dev/posts/${data?.header.id}`}
      openGraph={{
        images: [
          {
            alt: `${data?.header.title} ogp`,
            url: GenOgp(data?.header.title as string)
          }
        ],
        title: `${data?.header.title} | re-taro`,
        url: `https://re-taro.dev/posts/${data?.header.id}`
      }}
    />
    <ArticleJsonLd
      url={`https://re-taro.dev/posts/${data?.header.id}`}
      title={`${data?.header.title} | re-taro`}
      images={[]}
      datePublished={new Date(data?.header.date as string).toISOString()}
      dateModified={new Date(data?.header.date as string).toISOString()}
      authorName={'Rintaro Itokawa'}
      description={`A blog post by Rintaro Itokawa explaining about ${data?.header.title}`}
    />
    <Head>
      <link
        rel={'stylesheet'}
        href={'https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css'}
        integrity={'sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB'}
        crossOrigin={'anonymous'}
      />
    </Head>
  </React.Fragment>
)

export { PostMeta }

/* eslint-enable */
