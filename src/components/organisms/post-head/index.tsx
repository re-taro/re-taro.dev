import Link from "next/link";
import React from "react";
import tw, { css } from "twin.macro";
import { Flex } from "~/components/atoms/flex";
import { Heading } from "~/components/atoms/heading";
import { Tag } from "~/components/atoms/tag";
import { Text } from "~/components/atoms/text";
import Twemoji from "~/components/atoms/twemojii";
import type { PostQuery } from "~/graphql";
import { formatDate } from "~/utils/date";

type PostHeadProperties = {
  data: PostQuery["postById"] | undefined;
};

const PostHead: React.FC<PostHeadProperties> = ({ data }) => (
  <Flex css={tw`items-center mb-16`}>
    <div
      css={css`
        flex-basis: 80%;
      `}
    >
      <Heading as={"h4"} css={tw`mb-8`}>
        {data?.header.title}
      </Heading>
      <Link href={"/about"} passHref>
        <Text as={"a"}>Rintaro Itokawa</Text>
      </Link>
      <Flex css={tw`justify-between`}>
        <Text>{formatDate(data?.header.date as string, "MMM D, YYYY")}</Text>
        <Flex css={tw`flex-wrap gap-2.5`}>
          {data?.header.tags.map((tag, key) => (
            <Tag tag={tag} key={key} />
          ))}
        </Flex>
      </Flex>
    </div>
    <Flex
      css={css`
        flex-basis: 20%;
      `}
    >
      <div css={tw`ml-auto w-3/5`}>
        <Twemoji emoji={data?.header.emoji as string} />
      </div>
    </Flex>
  </Flex>
);

export { PostHead };
