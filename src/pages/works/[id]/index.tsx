import type { ParsedUrlQuery } from "node:querystring";
import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery, createClient, fetchExchange } from "urql";
import { OGP_HOST } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import { Work } from "~/components/templates/work";
import { WorkDocument, WorksDocument } from "~/graphql";
import type { WorkQuery, WorksQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

type Parameters = ParsedUrlQuery & {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Parameters> = async () => {
  const client = createClient({ exchanges: [fetchExchange], url: END_POINT });
  const response = await client.query<WorksQuery>(WorksDocument).toPromise();
  const result = response.data?.works.map(work => work.id);
  const ids = [...new Set(result)];
  return {
    fallback: false,
    paths: ids.map(id => ({
      params: {
        id,
      },
    })),
  };
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<
  { urqlState: SSRData; id: string | undefined; meta: SeoProperties },
  Parameters
> = async ({ params }) => {
  const client = await urqlClient();
  const fetcher = createClient({ exchanges: [fetchExchange], url: END_POINT });
  await client.query(WorkDocument, { id: params?.id }).toPromise();
  const response = await fetcher.query<WorkQuery>(WorkDocument, { id: params?.id }).toPromise();
  const meta: SeoProperties = {
    description: response.data?.work.workPage.title as string,
    ogimageUrl: encodeURI(
      `${OGP_HOST}/api/ogp?title=${response.data?.work.workPage.title as string} | re-taro&date=${response.data?.work.date as string
      }`,
    ),
    pageRelPath: `works/${params?.id as string}`,
    pagetype: "article",
    sitename: "re-taro.dev",
    title: `${response.data?.work.workPage.title as string} | re-taro`,
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      id: params?.id,
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const workPage: NextPage<Properties> = ({ id, meta }) => {
  const [response] = useQuery<WorkQuery>({ query: WorkDocument, variables: { id } });
  return <Work data={response.data} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { neverSuspend: true, ssr: false },
)(workPage);
