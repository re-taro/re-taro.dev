import React from "react";
import { Seo } from "../seo";
import type { SeoProperties } from "../seo";

type WorkMetaPropeties = {
  meta: SeoProperties;
};

const WorkMeta: React.FC<WorkMetaPropeties> = ({ meta }) => <Seo {...meta} />;

export { WorkMeta };
