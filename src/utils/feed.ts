import { Feed } from "feed";
import { createClient, fetchExchange } from "urql";
import { END_POINT } from "./client";
import { MdStrip } from "./parser";
import { FeedDocument, SlugDocument } from "~/graphql";
import type { FeedQuery, SlugQuery } from "~/graphql";

const HOST = "https://re-taro.dev";

const generateFeed = async () => {
  const author = {
    email: "me@re-taro.dev",
    link: HOST,
    name: "Rintaro Itokawa",
  };
  const date = new Date();
  const feed = new Feed({
    author,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    description: "Rintaro Itokawa's Dev Site | re-taro",
    favicon: `${HOST}/favicon.ico`,
    feedLinks: {
      atom: `${HOST}/rss/atom.xml`,
      json: `${HOST}/rss/feed.json`,
      rss2: `${HOST}/rss/feed.xml`,
    },
    id: HOST,
    image: `${HOST}/rintaro.png`,
    language: "ja",
    link: HOST,
    title: "Rintaro Itokawa - Emotion Seeker",
    updated: date,
  });
  const client = createClient({ exchanges: [fetchExchange], url: END_POINT });
  const allPosts = await client.query<FeedQuery>(FeedDocument).toPromise();
  for (const post of allPosts.data?.posts as FeedQuery["posts"]) {
    const url = `${HOST}/blog/posts/${post.id}`;
    // eslint-disable-next-line no-await-in-loop
    const slug = await client.query<SlugQuery>(SlugDocument, { id: post.id }).toPromise();
    feed.addItem({
      date: new Date(post.date),
      description: `<p>${MdStrip(slug.data?.postById.content as string).slice(0, 300)}</p>`,
      id: url,
      link: url,
      title: post.title,
    });
  }
  return feed;
};

export { generateFeed };
