import type { ParsedUrlQuery } from 'node:querystring'
import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery, createClient, fetchExchange } from 'urql'
import { OGP_HOST } from '~/components/organisms/seo'
import type { SeoProperties } from '~/components/organisms/seo'
import { Tag } from '~/components/templates/tag'
import { TagDocument, TagsDocument } from '~/graphql'
import type { TagQuery, TagsQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

type Parameters = ParsedUrlQuery & {
  tag: string
}

export const getStaticPaths: GetStaticPaths<Parameters> = async () => {
  const client = createClient({ exchanges: [fetchExchange], url: END_POINT })
  const response = await client.query<TagsQuery>(TagsDocument).toPromise()
  const result = response.data?.posts.flatMap(post => post.tags)
  const tags = [...new Set(result)]
  return {
    fallback: false,
    paths: tags.map(tag => ({
      params: {
        tag
      }
    }))
  }
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<
  { urqlState: SSRData; tag: string | undefined; meta: SeoProperties },
  Parameters
> = async ({ params }) => {
  const client = await urqlClient()
  await client.query(TagDocument, { tag: params?.tag }).toPromise()
  const meta: SeoProperties = {
    description: `#${params?.tag as string}の記事一覧`,
    ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=#${params?.tag as string} | re-taro`),
    pageRelPath: '',
    pagetype: 'website',
    sitename: 're-taro.dev',
    title: `#${params?.tag as string} | re-taro`,
    twcardtype: 'summary_large_image'
  }
  return {
    props: {
      meta,
      tag: params?.tag,
      urqlState: ssrCache.extractData()
    }
  }
}

const TagPage: NextPage<Properties> = ({ tag, meta }) => {
  const [response] = useQuery<TagQuery>({ query: TagDocument, variables: { tag } })
  return <Tag data={response.data} tag={tag as string} meta={meta} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { neverSuspend: true, ssr: false }
)(TagPage)
