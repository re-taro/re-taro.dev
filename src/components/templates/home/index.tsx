import React from "react";
import tw from "twin.macro";
import { HeroSection } from "~/components/organisms/hero";
import { PostsSection } from "~/components/organisms/posts";
import { ProjectsSection } from "~/components/organisms/projects";
import { Seo } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import { TimeLineSection } from "~/components/organisms/timeline";
import type { HomeQuery } from "~/graphql";

const HomeBox = tw.div`mt-[-24]`;

type HomeProperties = React.ComponentProps<React.ReactHTML["div"]> & {
  data: HomeQuery | undefined;
  meta: SeoProperties;
};

const Home: React.FC<HomeProperties> = ({ data, meta, ...rest }) => (
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
