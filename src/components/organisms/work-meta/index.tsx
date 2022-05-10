/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { NextSeo, ArticleJsonLd } from 'next-seo'
import React from 'react'
import type { WorkQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

type WorkMetaPropeties = {
  data: WorkQuery['work'] | undefined
}

const WorkMeta: React.FC<WorkMetaPropeties> = ({ data }) => (
  <React.Fragment>
    <NextSeo
      title={data?.workPage.title}
      canonical={`https://re-taro.dev/works/${data?.id}`}
      openGraph={{
        images: [
          {
            alt: `${data?.workPage.title} ogp`,
            url: GenOgp(data?.workPage.title as string)
          }
        ],
        title: `${data?.workPage.title} | re-taro`,
        url: `https://re-taro.dev/works/${data?.id}`
      }}
    />
    <ArticleJsonLd
      url={`https://re-taro.dev/works/${data?.id}`}
      title={`${data?.workPage.title} | re-taro`}
      images={[]}
      datePublished={new Date(data?.date as string).toISOString()}
      dateModified={new Date(data?.date as string).toISOString()}
      authorName={'Rintaro Itokawa'}
      description={`A works by Rintaro Itokawa explaining about ${data?.workPage.title}`}
    />
  </React.Fragment>
)

export { WorkMeta }

/* eslint-enable */
