import React from "react";
import tw from "twin.macro";
import { Heading } from "~/components/atoms/heading";
import { Text } from "~/components/atoms/text";

type ContentSectionProperties = React.ComponentProps<React.ReactHTML["section"]> & {
  data: string | undefined;
};

const ContentSection: React.FC<ContentSectionProperties> = ({ data, ...rest }) => (
  <section css={tw`transition delay-150 ease-out`} {...rest}>
    <Heading css={tw`mb-4`} as={"h3"}>
      👋 Hi, how are you?
    </Heading>
    <Text css={tw`text-lg`}>{data}</Text>
  </section>
);

export { ContentSection };
