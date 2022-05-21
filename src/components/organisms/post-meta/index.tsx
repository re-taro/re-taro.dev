/* eslint-disable @typescript-eslint/restrict-template-expressions,no-secrets/no-secrets */

import Head from "next/head";
import React from "react";
import { Seo } from "../seo";
import type { SeoProperties } from "../seo";

type PostMetaPropeties = {
  meta: SeoProperties;
};

const PostMeta: React.FC<PostMetaPropeties> = ({ meta }) => (
  <React.Fragment>
    <Seo {...meta} />
    <Head>
      <link
        rel={"stylesheet"}
        href={"https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.css"}
        integrity={"sha384-ljao5I1l+8KYFXG7LNEA7DyaFvuvSCmedUf6Y6JI7LJqiu8q5dEivP2nDdFH31V4"}
        crossOrigin={"anonymous"}
      />
      <title></title>
    </Head>
  </React.Fragment>
);

export { PostMeta };

/* eslint-enable */
