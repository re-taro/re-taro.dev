import React from "react";
import { ContentSection } from "~/components/organisms/content";
import { HeadingSection } from "~/components/organisms/heading";
import { LinksSection } from "~/components/organisms/links";
import { Seo } from "~/components/organisms/seo";
import type { SeoProperties } from "~/components/organisms/seo";
import type { AboutQuery } from "~/graphql";

type AboutProperties = {
  data: AboutQuery | undefined;
  meta: SeoProperties;
};

const About: React.FC<AboutProperties> = ({ data, meta }) => (
  <React.Fragment>
    <Seo {...meta} />
    <HeadingSection data={data?.basic.affiliation} />
    <ContentSection data={data?.basic.introduction} />
    <LinksSection />
  </React.Fragment>
);

export { About };
