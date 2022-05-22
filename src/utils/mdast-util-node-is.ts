import type { Paragraph, Link } from "mdast";
import type { Node, Parent } from "unist";

const isObject = (target: unknown): target is { [key: string]: unknown } =>
  typeof target === "object" && target !== null;

// https://github.com/syntax-tree/unist#node
const isNode = (node: unknown): node is Node => isObject(node) && "type" in node;

// https://github.com/syntax-tree/unist#parent
const isParent = (node: unknown): node is Parent => isObject(node) && Array.isArray(node.children);

// https://github.com/syntax-tree/mdast#paragraph
const isParagraph = (node: unknown): node is Paragraph => isNode(node) && node.type === "paragraph";

const isLink = (node: unknown): node is Link => isNode(node) && node.type === "link";

export { isParent, isParagraph, isLink };
