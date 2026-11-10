import type { Heading, PhrasingContent, Root } from 'mdast';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

export type MarkdownHeading = {
  id: string;
  text: string;
  level: number;
};

const getNodeText = (node: PhrasingContent): string => {
  if ('value' in node && typeof node.value === 'string') {
    return node.value;
  }

  if (node.type === 'image' || node.type === 'imageReference') {
    return node.alt ?? '';
  }

  if ('children' in node) {
    return node.children.map(getNodeText).join('');
  }

  return '';
};

const createSlug = (text: string): string => {
  return (
    text
      .trim()
      .toLowerCase()
      .normalize('NFKC')
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-') || 'section'
  );
};

export const extractHeadings = (content: string): MarkdownHeading[] => {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(content) as Root;

  const headings: MarkdownHeading[] = [];
  const slugCounts = new Map<string, number>();

  visit(tree, 'heading', (node: Heading) => {
    const text = node.children.map(getNodeText).join('').trim();
    if (!text) return;

    const slug = createSlug(text);
    const count = slugCounts.get(slug) ?? 0;

    slugCounts.set(slug, count + 1);

    headings.push({
      id: count === 0 ? slug : `${slug}-${count}`,
      text,
      level: node.depth,
    });
  });

  return headings;
};
