import type { Paragraph, Link, Literal } from "mdast";
import type { H } from "mdast-util-to-hast";
import getMetadata from "metadata-scraper";
import type { Plugin, Transformer } from "unified";
import type { Node, Parent } from "unist";
import { visit } from "unist-util-visit";
import type { VFileCompatible } from "vfile";
import { isParent, isLink, isParagraph } from "./mdast-util-node-is";

interface ExtensionLink extends Literal {
  type: "extlink";
  url: string;
  meta: LinkWidgetMeta;
}

export interface LinkWidgetMeta {
  url: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

const isExtensionLink = (node: unknown): node is Paragraph => {
  if (!isParagraph(node)) {
    return false;
  }
  const { children } = node;
  if (children.length !== 1) {
    return false;
  }
  // eslint-disable-next-line prefer-destructuring
  const singleChild = children[0];
  return isLink(singleChild) && singleChild.children[0].type === "text";
};

const fetchMeta = (url: string) =>
  getMetadata(url).then(data => {
    const metaData: LinkWidgetMeta = {
      description: data.description ?? "",
      icon: data.icon,
      image: data.image,
      title: data.title ?? "",
      url,
    };
    return metaData;
  });

const remarkLinkWidget: Plugin = function remarkLinkWidget(): Transformer {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return async (tree: Node, _file: VFileCompatible) => {
    const promises: (() => Promise<void>)[] = [];
    const visitor = (node: Paragraph, index: number, parent: Parent | undefined) => {
      if (!isParent(parent)) {
        return;
      }
      if (parent.type === "listItem") {
        return;
      }
      const child = node.children[0] as Link;
      promises.push(async () => {
        const data = await fetchMeta(child.url);
        // eslint-disable-next-line security/detect-object-injection
        parent.children[index] = {
          meta: data,
          type: "extlink",
          url: child.url,
        } as ExtensionLink;
      });
    };
    visit(tree, isExtensionLink, visitor);
    await Promise.all(promises.map(promise => promise()));
  };
};

const extensionLinkHandler = (_h: H, node: ExtensionLink) => ({
  children: [{ type: "text", value: JSON.stringify(node.meta) }],
  tagName: "extlink",
  type: "element",
});

export { remarkLinkWidget, extensionLinkHandler };
