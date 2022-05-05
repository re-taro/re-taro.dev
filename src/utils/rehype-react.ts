// HTML parser on "Client" side. Never include backend code (including remark).

import React from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import type { Options as RehypeReactOptions } from "rehype-react";
import { unified } from "unified";
import { Image } from "~/components/molecules/image";
import type { ImageProperties } from "~/components/molecules/image";
import {Link} from "~/components/molecules/link";
import type { LinkProperties } from "~/components/molecules/link";

const RehypeReact = (html: string) => {
  const result = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      components: {
        // eslint-disable-next-line id-length
        a: (properties: LinkProperties) => Link(properties),
        img: (properties: ImageProperties) => Image(properties),
      },
      createElement: React.createElement,
    } as RehypeReactOptions)
    .processSync(html);
  return result.result;
};

export { RehypeReact }
