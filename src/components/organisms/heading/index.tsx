import React from "react";
import tw from "twin.macro";
import { Flex } from "~/components/atoms/flex";
import { Heading } from "~/components/atoms/heading";
import { Text } from "~/components/atoms/text";
import type { Affiliation } from "~/graphql";

const HeadingBox = tw.section`mb-16`;

type HeadingSectionProperties = React.ComponentProps<React.ReactHTML["section"]> & {
  data: Affiliation | undefined;
};

const HeadingSection: React.FC<HeadingSectionProperties> = ({ data, ...rest }) => (
  <HeadingBox {...rest}>
    <Heading as={"h2"}>Rintaro</Heading>
    <Flex>
      <Text css={tw`text-xl`}>
        {data?.location} | {data?.assign}
      </Text>
    </Flex>
  </HeadingBox>
);

export { HeadingSection };
