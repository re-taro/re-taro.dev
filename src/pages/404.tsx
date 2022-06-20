import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { Button } from "~/components/atoms/button";
import { Heading } from "~/components/atoms/heading";
import { Image } from "~/components/atoms/image";
import { Text } from "~/components/atoms/text";
import { Seo, OGP_HOST } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";

const ImageBox = tw.div`w-full sm:w-[70%] md:w-[60%] lg:w-[60%] my-0 mx-auto`;

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ meta: SeoProperties }> = () => {
  const meta: SeoProperties = {
    description: "Rintaro Itokawa's Dev Site | re-taro",
    ogimage_url: encodeURI(`${OGP_HOST}/api/ogp?title=re-taro`),
    pageRelPath: "",
    pagetype: "website",
    sitename: "re-taro.dev",
    title: "Rintaro Itokawa - Emotion Seeker",
    twcardtype: "summary_large_image",
  };
  return {
    props: {
      meta,
    },
  };
};

const NotFound: NextPage<Properties> = ({ meta }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);
  return (
    <React.Fragment>
      <Seo {...meta} />
      <main>
        <ImageBox>
          <Image
            src={mounted && theme === "dark" ? "/not_found_dark.svg" : "/not_found_light.svg"}
            alt={"404 Not found"}
          />
        </ImageBox>
        <Text css={tw`text-center text-sm cursor-pointer hover:underline`}>
          <a href={"https://undraw.co/illustrations"} target={"_blank"} rel={"noopener noreferrer"}>
            Illustrations by undraw
          </a>
        </Text>
        <div css={tw`my-4`}>
          <Heading as={"h3"} css={tw`text-center mb-2`}>
            Seems like you&apos;re lost.
          </Heading>
          <div css={tw`text-center`}>
            <Link href={"/"} passHref>
              <Button variant={"normal"} as={"a"}>
                <Text css={tw`text-lg`}>Let&apos;s Head Back</Text>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default NotFound;
