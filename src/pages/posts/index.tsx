import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery } from "urql";
import type { SeoProperties } from "~/components/organisms/seo";
import { OGP_HOST } from "~/components/organisms/seo";
import { Posts } from "~/components/templates/posts";
import { PostsDocument } from "~/graphql";
import type { PostsQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ meta: SeoProperties; urqlState: SSRData }> = async () => {
  const client = await urqlClient();
  await client.query(PostsDocument).toPromise();
  const meta: SeoProperties = {
    description: "記事一覧",
    ogimageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=Posts | re-taro`),
    pageRelPath: "",
    pagetype: "website",
    sitename: "re-taro.dev",
    title: "Blog Posts | re-taro",
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const PostsPage: NextPage<Properties> = ({ meta }) => {
  const [response] = useQuery<PostsQuery>({ query: PostsDocument });
  return <Posts data={response.data} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { ssr: false },
)(PostsPage);
