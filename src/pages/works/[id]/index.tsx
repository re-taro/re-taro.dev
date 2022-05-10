import type { ParsedUrlQuery } from 'node:querystring'
import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { withUrqlClient } from 'next-urql'
import type { SSRData } from 'next-urql'
import React from 'react'
import { useQuery, createClient, fetchExchange } from 'urql'
import { Work } from '~/components/templates/work'
import { WorkDocument, WorksDocument } from '~/graphql'
import type { WorkQuery, WorksQuery } from '~/graphql'
import { urqlClient, ssrCache, END_POINT } from '~/utils/client'

type Properties = InferGetStaticPropsType<typeof getStaticProps>

type Parameters = ParsedUrlQuery & {
  id: string
}

export const getStaticPaths: GetStaticPaths<Parameters> = async () => {
  const client = createClient({ exchanges: [fetchExchange], url: END_POINT })
  const response = await client.query<WorksQuery>(WorksDocument).toPromise()
  const result = response.data?.works.map(work => work.id)
  const ids = [...new Set(result)]
  return {
    fallback: false,
    paths: ids.map(id => ({
      params: {
        id
      }
    }))
  }
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ urqlState: SSRData; id: string | undefined }, Parameters> = async ({
  params
}) => {
  const client = await urqlClient()
  await client.query(WorkDocument, { id: params?.id }).toPromise()
  return {
    props: {
      id: params?.id,
      urqlState: ssrCache.extractData()
    }
  }
}

const WorkPage: NextPage<Properties> = ({ id }) => {
  const [response] = useQuery<WorkQuery>({ query: WorkDocument, variables: { id } })
  return <Work data={response.data} />
}

export default withUrqlClient(
  () => ({
    url: END_POINT
  }),
  { neverSuspend: true, ssr: false }
)(WorkPage)
