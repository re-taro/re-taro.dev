import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery } from 'urql'
import { Works } from '~/components/templates/works'
import { WorksDocument } from '~/graphql'
import type { WorksQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ urqlState: SSRData }> = async () => {
  const client = await urqlClient()
  await client.query(WorksDocument).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

const WorksPage: NextPage<Properties> = () => {
  const [response] = useQuery<WorksQuery>({ query: WorksDocument })
  return <Works data={response.data} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { neverSuspend: true, ssr: false }
)(WorksPage)
