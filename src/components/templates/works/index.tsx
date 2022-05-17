import { useRouter } from "next/router";
import React, { useEffect } from "react";
import tw from "twin.macro";
import { Heading } from "~/components/atoms/heading";
import { ProjectCard } from "~/components/molecules/project-card";
import { OGP_HOST, Seo } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import type { WorksQuery } from "~/graphql";

const meta: SeoProperties = {
  description: "ポートフォリオ",
  ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=Works | re-taro`),
  pageRelPath: "",
  pagetype: "website",
  sitename: "re-taro.dev",
  title: "Works | re-taro",
  twcardtype: "summary_large_image",
};

type WorksProperties = {
  data: WorksQuery | undefined;
};

const Works: React.FC<WorksProperties> = ({ data }) => {
  const router = useRouter();
  useEffect(() => {
    data?.works
      .sort((workA, workB) => (workA.date < workB.date ? 1 : -1))
      .map(project => router.prefetch("/works/[id]", `/works/${project.id}`));
  }, [data]);
  return (
    <React.Fragment>
      <Seo {...meta} />
      <div css={tw`mb-8`}>
        <Heading as={"h3"} css={tw`mb-2`}>
          Works
        </Heading>
      </div>
      <ProjectCard projects={data?.works} />
    </React.Fragment>
  );
};

export { Works };
