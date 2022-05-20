import Image from "next/image";
import React from "react";
import tw, { css } from "twin.macro";
import { Flex } from "~/components/atoms/flex";
import { Heading } from "~/components/atoms/heading";
import { Text } from "~/components/atoms/text";
import type { WorkQuery } from "~/graphql";
import { formatDate } from "~/utils/date";

type WorkHeadProperties = {
  data: WorkQuery["work"] | undefined;
};

const WorkHead: React.FC<WorkHeadProperties> = ({ data }) => (
  <Flex css={tw`items-center mb-8 transition delay-150 ease-out`}>
    <div
      css={css`
        flex-basis: 60%;
      `}
    >
      <Heading as={"h4"}>{data?.workPage.title}</Heading>
      <Text>{formatDate(data?.date as string, "MMM D, YYYY")}</Text>
    </div>
    <div
      css={css`
        flex-basis: 40%;
      `}
    >
      <Image
        height={200}
        width={355}
        layout={"responsive"}
        objectFit={"cover"}
        objectPosition={"50% 0"}
        src={data?.imageUrl as string}
        alt={data?.workPage.title}
        css={tw`rounded-lg`}
      />
    </div>
  </Flex>
);

export { WorkHead };
