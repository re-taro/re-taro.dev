import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery } from "urql";
import type { SeoProperties } from "~/components/organisms/seo";
import { OGP_HOST } from "~/components/organisms/seo";
import { Home } from "~/components/templates/home";
import { HomeDocument } from "~/graphql";
import type { HomeQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ meta: SeoProperties; urqlState: SSRData }> = async () => {
  const client = await urqlClient();
  await client.query(HomeDocument).toPromise();
  const meta: SeoProperties = {
    description: "Rintaro Itokawa's Dev Site | re-taro",
    ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=re-taro`),
    pageRelPath: "",
    pagetype: "website",
    sitename: "re-taro.dev",
    title: "Rintaro Itokawa - Emotion Seeker",
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const HomePage: NextPage<Properties> = ({ meta }) => {
  const [response] = useQuery<HomeQuery>({ query: HomeDocument });
  return <Home data={response.data} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { neverSuspend: true, ssr: false },
)(HomePage);
