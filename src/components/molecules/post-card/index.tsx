import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import { Flex } from "~/components/atoms/flex";
import { Heading } from "~/components/atoms/heading";
import { Tag } from "~/components/atoms/tag";
import { Text } from "~/components/atoms/text";
import Twemoji from "~/components/atoms/twemojii";
import type { PostHeader } from "~/graphql";
import { formatDate } from "~/utils/date";
import { trackEventToUmami } from "~/utils/umami";

const PostBox = tw.div`w-full transition delay-150 ease-out hover:scale-[1.03]`;

type PostCardProperties = React.ComponentProps<React.ReactHTML["div"]> & {
  post: PostHeader;
};

const PostCard: React.FC<PostCardProperties> = ({ post, ...rest }) => (
  <PostBox key={post.id} {...rest}>
    <Link href={`/posts/${post.id}`} passHref>
      <Flex
        as={"a"}
        onClick={() => trackEventToUmami({ eventType: "navigate", eventValue: `Blog post: ${post.title}` })}
        css={tw`flex-wrap items-center w-full`}
      >
        <Flex css={tw`justify-center items-center flex-1`}>
          <div css={tw`w-[70%] h-[70%]`}>
            <Twemoji emoji={post.emoji} />
          </div>
        </Flex>
        <div css={tw`flex-[9 9 0] pl-[11] sm:pl-[22]`}>
          <Heading as={"h5"}>{post.title}</Heading>
          <Text as={"time"}>{formatDate(post.date, "MMM D, YYYY")}</Text>
          <Flex css={tw`flex-wrap gap-2.5 mt-1`}>
            {post.tags.map((tag, key) => (
              <Tag tag={tag} key={key} />
            ))}
          </Flex>
        </div>
      </Flex>
    </Link>
  </PostBox>
);

export { PostCard };
