import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery } from 'urql'
import { Tags } from '~/components/templates/tags'
import { TagsDocument } from '~/graphql'
import type { TagsQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ [key: string]: SSRData }> = async () => {
  const client = await urqlClient()
  await client.query(TagsDocument).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

const TagsPage: NextPage<Properties> = () => {
  const [response] = useQuery<TagsQuery>({ query: TagsDocument })
  return <Tags data={response.data} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { neverSuspend: true, ssr: false }
)(TagsPage)
