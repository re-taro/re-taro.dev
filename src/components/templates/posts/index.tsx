import { useRouter } from "next/router";
import React, { useEffect } from "react";
import tw from "twin.macro";
import { Grid } from "~/components/atoms/grid";
import { Heading } from "~/components/atoms/heading";
import { Text } from "~/components/atoms/text";
import { PostCard } from "~/components/molecules/post-card";
import { OGP_HOST, Seo } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import type { PostsQuery } from "~/graphql";

const PostsHead = tw.div`mb-[22px]`;

const meta: SeoProperties = {
  description: "記事一覧",
  ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=Posts | re-taro`),
  pageRelPath: "",
  pagetype: "website",
  sitename: "re-taro.dev",
  title: "Blog Posts | re-taro",
  twcardtype: "summary_large_image",
};

type PostsProperties = {
  data: PostsQuery | undefined;
};

const Posts: React.FC<PostsProperties> = ({ data }) => {
  const router = useRouter();
  useEffect(() => {
    data?.posts
      .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
      .map(post => router.prefetch("/posts/[id]", `/posts/${post.id}`));
  }, [data]);
  return (
    <React.Fragment>
      <Seo {...meta} />
      <PostsHead>
        <Heading as={"h3"} css={tw`mb-2`}>
          Blog Posts
        </Heading>
        <Text css={tw`text-center text-xl`}>All posts</Text>
      </PostsHead>
      <Grid css={tw`gap-16 my-12`}>
        {data?.posts
          .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
          .map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
      </Grid>
    </React.Fragment>
  );
};

export { Posts };
