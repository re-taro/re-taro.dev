import { initUrqlClient } from "next-urql";
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from "urql";
import type { Client } from "urql";

const END_POINT = process.env.END_POINT || "http://localhost:3003/graphql";

const ssrCache = ssrExchange({ isClient: false });

const urqlClient = (): Promise<Client> =>
  new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
        url: END_POINT,
      },
      false,
    );
    // eslint-disable-next-line no-negated-condition
    if (!client) {
      reject(new Error("Failed to init initUrqlClient."));
    } else {
      resolve(client);
    }
  });

export { urqlClient, ssrCache, END_POINT };
