import type { Heading, Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { MarkdownHeading } from './extract-headings';

export const remarkHeadingId = (headings: MarkdownHeading[]) => {
  return () => (tree: Root) => {
    let index = 0;

    visit(tree, 'heading', (node: Heading) => {
      const heading = headings[index++];

      if (!heading) return;

      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          id: heading.id,
        },
      };
    });
  };
};
