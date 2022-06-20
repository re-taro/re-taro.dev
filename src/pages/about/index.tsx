import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery } from "urql";
import type { SeoProperties } from "~/components/organisms/seo";
import { OGP_HOST } from "~/components/organisms/seo";
import { About } from "~/components/templates/about";
import { AboutDocument } from "~/graphql";
import type { AboutQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ meta: SeoProperties; urqlState: SSRData }> = async () => {
  const client = await urqlClient();
  await client.query(AboutDocument).toPromise();
  const meta: SeoProperties = {
    description: "自己紹介",
    ogimage_url: encodeURI(`${OGP_HOST}/api/ogp?title=About | re-taro`),
    pageRelPath: "",
    pagetype: "article",
    sitename: "re-taro.dev",
    title: "About | re-taro",
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const AboutPage: NextPage<Properties> = ({ meta }) => {
  const [response] = useQuery<AboutQuery>({ query: AboutDocument });
  return <About data={response.data} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { ssr: false },
)(AboutPage);
