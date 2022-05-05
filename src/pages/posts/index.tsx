import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery } from 'urql'
import { Posts } from '~/components/templates/posts'
import { PostsDocument } from '~/graphql'
import type { PostsQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ [key: string]: SSRData }> = async () => {
  const client = await urqlClient()
  await client.query(PostsDocument).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

const PostsPage: NextPage<Properties> = () => {
  const [response] = useQuery<PostsQuery>({ query: PostsDocument })
  return <Posts data={response.data} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { ssr: false }
)(PostsPage)
