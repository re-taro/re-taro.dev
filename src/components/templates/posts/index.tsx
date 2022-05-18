import { useRouter } from "next/router";
import React, { useEffect } from "react";
import tw from "twin.macro";
import { Grid } from "~/components/atoms/grid";
import { Heading } from "~/components/atoms/heading";
import { Text } from "~/components/atoms/text";
import { PostCard } from "~/components/molecules/post-card";
import { Seo } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import type { PostsQuery } from "~/graphql";

const PostsHead = tw.div`mb-[22px]`;

type PostsProperties = {
  data: PostsQuery | undefined;
  meta: SeoProperties;
};

const Posts: React.FC<PostsProperties> = ({ data, meta }) => {
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
