import { globby } from "globby";
import prettier from "prettier";
import { createClient, fetchExchange } from "urql";
import type { PostsQuery } from "~/graphql";
import { PostsDocument } from "~/graphql";
import { END_POINT } from "~/utils/client";

const HOST = "https://re-taro.dev";
const formatXml = (sitemap: string) => prettier.format(sitemap, { parser: "html" });

// eslint-disable-next-line max-statements
const generateSitemapXml = async (): Promise<string> => {
  const solidPaths = await globby(["src/pages/*.tsx", "src/pages/posts/*.tsx"], {
    ignore: ["src/pages/_*.tsx", "src/pages/404.tsx", "src/pages/sitemap.xml.tsx"],
  });
  const solidInfos = solidPaths.map(filePath => ({
    lastmod: new Date().toISOString(),
    relpath: filePath.replace("src/pages/", "").replace(".tsx", "").replace("index", ""),
  }));
  const client = createClient({ exchanges: [fetchExchange], url: END_POINT });
  const allPosts = await client.query<PostsQuery>(PostsDocument).toPromise();
  const postInfos = (allPosts.data?.posts as PostsQuery["posts"]).map(item => ({
    lastmod: item.date,
    relpath: `posts/${item.id}`,
  }));
  const sitemapInfos = [...solidInfos, ...postInfos];
  const pagesSitemap = `
  ${sitemapInfos
    .map(
      info => `
        <url>
          <loc>${HOST}/${info.relpath}</loc>
          <lastmod>${info.lastmod}</lastmod>
        </url>
      `,
    )
    .join("")}
  `;
  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;
  return formatXml(generatedSitemap);
};

export { generateSitemapXml };
