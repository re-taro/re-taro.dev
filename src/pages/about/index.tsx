import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery } from 'urql'
import { About } from '~/components/templates/about'
import { AboutDocument } from '~/graphql'
import type { AboutQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ [key: string]: SSRData }> = async () => {
  const client = await urqlClient()
  await client.query(AboutDocument).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

const AboutPage: NextPage<Properties> = () => {
  const [response] = useQuery<AboutQuery>({ query: AboutDocument })
  return <About data={response.data} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { ssr: false }
)(AboutPage)
