import type { GetServerSideProps } from "next";
import { generateFeed } from "~/utils/feed";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps: GetServerSideProps<Record<string, never>> = async ({ res }) => {
  const feed = await generateFeed();
  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(feed.atom1());
  return {
    props: {},
  };
};

// eslint-disable-next-line unicorn/no-null
const AtomXml = () => null;

export default AtomXml;
