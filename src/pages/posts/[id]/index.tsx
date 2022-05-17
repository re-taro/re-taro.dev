import type { ParsedUrlQuery } from "node:querystring";
import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { withUrqlClient } from "next-urql";
import type { SSRData } from "next-urql";
import React from "react";
import { useQuery, createClient, fetchExchange } from "urql";
import { OGP_HOST } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import { Post } from "~/components/templates/post";
import { PostDocument, PostsDocument } from "~/graphql";
import type { PostQuery, PostsQuery } from "~/graphql";
import { urqlClient, ssrCache, END_POINT } from "~/utils/client";
import { MdToHtml } from "~/utils/parser";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

type Parameters = ParsedUrlQuery & {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Parameters> = async () => {
  const client = createClient({ exchanges: [fetchExchange], url: END_POINT });
  const response = await client.query<PostsQuery>(PostsDocument).toPromise();
  const result = response.data?.posts.map(post => post.id);
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
  { urqlState: SSRData; id: string | undefined; content: string; meta: SeoProperties },
  Parameters
> = async ({ params }) => {
  const client = await urqlClient();
  const fetcher = createClient({ exchanges: [fetchExchange], url: END_POINT });
  await client.query(PostDocument, { id: params?.id }).toPromise();
  const response = await fetcher.query<PostQuery>(PostDocument, { id: params?.id }).toPromise();
  const content = await MdToHtml(response.data?.postById.content as string);
  const meta: SeoProperties = {
    description: response.data?.postById.header.title as string,
    ogImageUrl: encodeURI(
      `${OGP_HOST}/api/ogp?title=${response.data?.postById.header.title as string} | re-taro&date=${
        response.data?.postById.header.date as string
      }`,
    ),
    pageRelPath: `posts/${params?.id as string}`,
    pagetype: "article",
    sitename: "re-taro.dev",
    title: `${response.data?.postById.header.title as string} | re-taro`,
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      content,
      id: params?.id,
      meta,
      urqlState: ssrCache.extractData(),
    },
  };
};

const PostPage: NextPage<Properties> = ({ id, content, meta }) => {
  const [response] = useQuery<PostQuery>({ query: PostDocument, variables: { id } });
  return <Post data={response.data} content={content} meta={meta} />;
};

export default withUrqlClient(
  () => ({
    url: END_POINT,
  }),
  { neverSuspend: true, ssr: false },
)(PostPage);
