import type { GetServerSideProps } from "next";
import { generateSitemapXml } from "~/utils/sitemap";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps: GetServerSideProps<Record<string, never>> = async ({ res }) => {
  const xml = await generateSitemapXml();
  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);
  return {
    props: {},
  };
};

// eslint-disable-next-line unicorn/no-null
const Sitemap = () => null;

export default Sitemap;
