import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery } from "urql";
import type { SeoProperties } from "~/components/organisms/seo";
import { OGP_HOST } from "~/components/organisms/seo";
import { Works } from "~/components/templates/works";
import { WorksDocument } from "~/graphql";
import type { WorksQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ meta: SeoProperties; urqlState: SSRData }> = async () => {
  const client = await urqlClient();
  await client.query(WorksDocument).toPromise();
  const meta: SeoProperties = {
    description: "ポートフォリオ",
    ogimage_url: encodeURI(`${OGP_HOST}/api/ogp?title=Works | re-taro`),
    pageRelPath: "",
    pagetype: "website",
    sitename: "re-taro.dev",
    title: "Works | re-taro",
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const WorksPage: NextPage<Properties> = ({ meta }) => {
  const [response] = useQuery<WorksQuery>({ query: WorksDocument });
  return <Works data={response.data} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { neverSuspend: true, ssr: false },
)(WorksPage);
