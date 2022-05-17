import React from "react";
import tw from "twin.macro";
import { HeroSection } from "~/components/organisms/hero";
import { PostsSection } from "~/components/organisms/posts";
import { ProjectsSection } from "~/components/organisms/projects";
import { OGP_HOST, Seo } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import { TimeLineSection } from "~/components/organisms/timeline";
import type { HomeQuery } from "~/graphql";

const HomeBox = tw.div`mt-[-24]`;

const meta: SeoProperties = {
  description: "Rintaro Itokawa's Dev Site | re-taro",
  ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=re-taro`),
  pageRelPath: "",
  pagetype: "website",
  sitename: "re-taro.dev",
  title: "Rintaro Itokawa - Emotion Seeker",
  twcardtype: "summary_large_image",
};

type HomeProperties = React.ComponentProps<React.ReactHTML["div"]> & {
  data: HomeQuery | undefined;
};

const Home: React.FC<HomeProperties> = ({ data, ...rest }) => (
  <HomeBox {...rest}>
    <Seo {...meta} />
    <main>
      <HeroSection data={data?.basic} />
      <TimeLineSection data={data?.bio} />
      <ProjectsSection data={data?.works} />
      <PostsSection data={data?.posts} />
    </main>
  </HomeBox>
);

export { Home };
