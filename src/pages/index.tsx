import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery } from 'urql'
import { Home } from '~/components/templates/home'
import { HomeDocument } from '~/graphql'
import type { HomeQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ [key: string]: SSRData }> = async () => {
  const client = await urqlClient()
  await client.query(HomeDocument).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

const HomePage: NextPage<Properties> = () => {
  const [response] = useQuery<HomeQuery>({ query: HomeDocument })
  return <Home data={response.data} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { ssr: false }
)(HomePage)
