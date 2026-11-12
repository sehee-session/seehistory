type MarkdownContext = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

type StrategyResult = {
  text: string;
  selectionStart: number;
  selectionEnd: number;
};

type MarkdownStrategy = {
  label: string;
  value: string;
  execute: (context: MarkdownContext) => StrategyResult;
};

const wrap =
  (prefix: string, postfix: string) =>
  ({
    value,
    selectionStart,
    selectionEnd,
  }: MarkdownContext): StrategyResult => {
    const selected = value.slice(selectionStart, selectionEnd);
    const hasSelection = selectionStart !== selectionEnd;

    // 선택 영역이 이미 동일한 서식으로 감싸져 있는지 확인
    const isWrapped =
      hasSelection &&
      value.slice(selectionStart - prefix.length, selectionStart) === prefix &&
      value.slice(selectionEnd, selectionEnd + postfix.length) === postfix;

    if (isWrapped) {
      const nextValue =
        value.slice(0, selectionStart - prefix.length) +
        selected +
        value.slice(selectionEnd + postfix.length);

      return {
        text: nextValue,
        selectionStart: selectionStart - prefix.length,
        selectionEnd: selectionEnd - prefix.length,
      };
    }

    const text = selected || 'text';
    const inserted = `${prefix}${text}${postfix}`;

    return {
      text:
        value.slice(0, selectionStart) + inserted + value.slice(selectionEnd),
      selectionStart: selectionStart + prefix.length,
      selectionEnd: selectionStart + prefix.length + text.length,
    };
  };

// 문단 단위 변환 전략
const line =
  (prefix: string) =>
  ({
    value,
    selectionStart,
    selectionEnd,
  }: MarkdownContext): StrategyResult => {
    // 현재 커서 또는 선택 영역이 포함된 문단 범위 계산
    const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;

    const endPosition =
      selectionEnd > selectionStart && value[selectionEnd - 1] === '\n'
        ? selectionEnd - 1
        : selectionEnd;

    const nextLineBreak = value.indexOf('\n', endPosition);
    const lineEnd = nextLineBreak === -1 ? value.length : nextLineBreak;

    const selectedLines = value.slice(lineStart, lineEnd);

    const transformed = selectedLines
      .split('\n')
      .map((currentLine) => {
        // 기존 헤딩 및 리스트 prefix
        const headingPrefix = currentLine.match(/^#{1,6}\s/)?.[0] ?? '';
        const listPrefix = currentLine.match(/^(?:[-*+]|\d+\.)\s+/)?.[0] ?? '';

        const currentPrefix = headingPrefix || listPrefix;
        const content = currentLine.slice(currentPrefix.length);

        // 같은 prefix를 다시 선택하면 제거
        if (currentPrefix === prefix) {
          return content;
        }

        // 다른 prefix가 있으면 교체
        return `${prefix}${content}`;
      })
      .join('\n');

    const nextValue =
      value.slice(0, lineStart) + transformed + value.slice(lineEnd);

    return {
      text: nextValue,
      selectionStart: lineStart,
      selectionEnd: lineStart + transformed.length,
    };
  };

// 템플릿 삽입 전략
const template =
  (templateText: string) =>
  ({
    value,
    selectionStart,
    selectionEnd,
  }: MarkdownContext): StrategyResult => {
    const nextValue =
      value.slice(0, selectionStart) + templateText + value.slice(selectionEnd);

    return {
      text: nextValue,
      selectionStart: selectionStart + templateText.length,
      selectionEnd: selectionStart + templateText.length,
    };
  };

export const MARKDOWN_STRATEGIES = {
  // Heading
  h1: {
    label: 'Heading 1',
    value: 'h1',
    execute: line('# '),
  },
  h2: {
    label: 'Heading 2',
    value: 'h2',
    execute: line('## '),
  },
  h3: {
    label: 'Heading 3',
    value: 'h3',
    execute: line('### '),
  },
  h4: {
    label: 'Heading 4',
    value: 'h4',
    execute: line('#### '),
  },
  h5: {
    label: 'Heading 5',
    value: 'h5',
    execute: line('##### '),
  },
  h6: {
    label: 'Heading 6',
    value: 'h6',
    execute: line('###### '),
  },
  paragraph: {
    label: 'Paragraph',
    value: 'paragraph',
    execute: line(''),
  },

  // Text formatting
  bold: {
    label: 'Bold',
    value: 'bold',
    execute: wrap('**', '**'),
  },
  italic: {
    label: 'Italic',
    value: 'italic',
    execute: wrap('*', '*'),
  },
  strikethrough: {
    label: 'Strikethrough',
    value: 'strikethrough',
    execute: wrap('~~', '~~'),
  },

  // Other
  codeBlock: {
    label: 'Code block',
    value: 'codeBlock',
    execute: wrap('```\n', '\n```'),
  },
  unorderedList: {
    label: 'Unordered list',
    value: 'unorderedList',
    execute: line('- '),
  },
  orderedList: {
    label: 'Ordered list',
    value: 'orderedList',
    execute: line('1. '),
  },
  link: {
    label: 'Link',
    value: 'link',
    execute: ({ value, selectionStart, selectionEnd }: MarkdownContext) => {
      const selected = value.slice(selectionStart, selectionEnd);
      const text = selected || 'text';
      const url = 'url';

      const inserted = `[${text}](${url})`;

      return {
        text:
          value.slice(0, selectionStart) + inserted + value.slice(selectionEnd),
        selectionStart: selectionStart + text.length + 3,
        selectionEnd: selectionStart + text.length + 3 + url.length,
      };
    },
  },
  table: {
    label: 'Table',
    value: 'table',
    execute: template(
      '| Header 1 | Header 2 |\n| --- | --- |\n| Cell 1 | Cell 2 |',
    ),
  },
  footnote: {
    label: 'Footnote',
    value: 'footnote',
    execute: template('[^1]\n\n[^1]: '),
  },
} as const satisfies Record<string, MarkdownStrategy>;

export const HEADING_SELECT = [
  MARKDOWN_STRATEGIES.h1,
  MARKDOWN_STRATEGIES.h2,
  MARKDOWN_STRATEGIES.h3,
  MARKDOWN_STRATEGIES.h4,
  MARKDOWN_STRATEGIES.h5,
  MARKDOWN_STRATEGIES.h6,
  MARKDOWN_STRATEGIES.paragraph,
] as const;
