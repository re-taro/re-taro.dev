import Head from "next/head";
import React from "react";

const PageType = {
  Article: "article",
  Website: "website",
} as const;

type PageType = typeof PageType[keyof typeof PageType];

const TwCardType = {
  Summary: "summary",
  Summary_Large_Image: "summary_large_image",
} as const;

type TwCardType = typeof TwCardType[keyof typeof TwCardType];

export type SeoProperties = {
  title: string;
  sitename: string;
  description: string;
  ogimage_url: string;
  pageRelPath: string;
  pagetype: PageType;
  twcardtype: TwCardType;
};

const OGP_HOST = process.env.OGP_HOST ?? "";

const Seo: React.FC<SeoProperties> = properties => (
  <Head>
    <title>{properties.title}</title>
    <meta name="description" content={properties.description} lang="ja" />
    <meta name="twitter:site" content="@10969_rintaro" />
    <meta name="twitter:creator" content="@10969_rintaro" />
    <meta name="twitter:image" content={properties.ogimage_url} />
    <meta name="twitter:card" content={properties.twcardtype} />
    <meta property="og:url" content={`https://re-taro.dev/${properties.pageRelPath}`} />
    <meta property="og:type" content={properties.pagetype} />
    <meta property="og:title" content={`${properties.title}`} />
    <meta property="og:description" content={properties.description} />
    <meta property="og:site_name" content={properties.sitename} />
    <meta property="og:image" content={properties.ogimage_url} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export { Seo, OGP_HOST };
