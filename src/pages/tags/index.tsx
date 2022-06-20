import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery } from "urql";
import type { SeoProperties } from "~/components/organisms/seo";
import { OGP_HOST } from "~/components/organisms/seo";
import { Tags } from "~/components/templates/tags";
import { TagsDocument } from "~/graphql";
import type { TagsQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ meta: SeoProperties; urqlState: SSRData }> = async () => {
  const client = await urqlClient();
  await client.query(TagsDocument).toPromise();
  const meta: SeoProperties = {
    description: "タグ一覧",
    ogimageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=Tags | re-taro`),
    pageRelPath: "",
    pagetype: "website",
    sitename: "re-taro.dev",
    title: "Tags | re-taro",
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const TagsPage: NextPage<Properties> = ({ meta }) => {
  const [response] = useQuery<TagsQuery>({ query: TagsDocument });
  return <Tags data={response.data} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { neverSuspend: true, ssr: false },
)(TagsPage);
