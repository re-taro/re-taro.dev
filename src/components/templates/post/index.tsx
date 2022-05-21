import React from "react";
import tw from "twin.macro";
import { PostHead } from "~/components/organisms/post-head";
import { PostMeta } from "~/components/organisms/post-meta";
import type { SeoProperties } from "~/components/organisms/seo";
import type { PostQuery } from "~/graphql";
import Styles from "~/styles/post.module.scss";
import { RehypeReact } from "~/utils/rehype-react";

const PostBox = tw.article`transition delay-150 ease-out`

type PostProperties = {
  data: PostQuery | undefined;
  content: string;
  meta: SeoProperties;
};

const Post: React.FC<PostProperties> = ({ data, content, meta }) => (
  <PostBox>
    <PostMeta meta={meta} />
    <PostHead data={data?.postById} />
    <article className={Styles.content}>{RehypeReact(content)}</article>
  </PostBox>
);

export { Post };
