import React from "react";
import tw from "twin.macro";
import { Heading } from "~/components/atoms/heading";
import { Text } from "~/components/atoms/text";
import type { HomeQuery } from "~/graphql";

const HeroWrapper = tw.div`h-[90vh] items-center grid`;

const HeroBox = tw.div`align-middle w-full sm:w-[80%] md:w-[60%] sm:mt-0 sm:self-center`;

type HeroSectionProperties = React.ComponentProps<React.ReactHTML["div"]> & {
  data: HomeQuery["basic"] | undefined;
};

const HeroSection: React.FC<HeroSectionProperties> = ({ data, ...rest }) => (
  <HeroWrapper {...rest}>
    <HeroBox>
      <Heading as={"h2"} css={tw`pb-11`}>
        {data?.name.primary}
      </Heading>
      <Text css={tw`text-base sm:text-xl`}>{data?.name.position}</Text>
    </HeroBox>
  </HeroWrapper>
);

export { HeroSection };
