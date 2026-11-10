import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { extractHeadings } from '../lib/extract-headings';
import { remarkHeadingId } from '../lib/remark-heading-id';
import { toast } from '../lib/toast';
import { Button } from './button';
import { MarkdownToc } from './md-toc';
import * as styles from './md-viewer.css';

type MarkdownViewerProps = {
  content: string;
};

type MarkdownPreProps = React.ComponentProps<'pre'> & {
  node?: unknown;
};

const getTextContent = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join('');
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getTextContent(node.props.children);
  }

  return '';
};

const MarkdownCodeBlock = ({
  children,
  node: _node,
  ...props
}: MarkdownPreProps) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  const code = getTextContent(children);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('성공적으로 복사되었습니다.');
    } catch {
      setCopied(false);
      toast.error('복사에 실패했습니다.');
    }
  };

  return (
    <div className={styles.codeBlock}>
      <Button
        variant="secondary"
        className={styles.copyButton}
        onClick={handleCopy}
      >
        {copied ? (
          <ClipboardCheckIcon size={16} />
        ) : (
          <ClipboardIcon size={16} />
        )}
      </Button>
      <pre {...props}>{children}</pre>
    </div>
  );
};

export const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  const headings = React.useMemo(() => extractHeadings(content), [content]);

  const headingPlugin = React.useMemo(
    () => remarkHeadingId(headings),
    [headings],
  );

  const remarkPlugins = React.useMemo(
    () => [remarkGfm, headingPlugin],
    [headingPlugin],
  );

  return (
    <>
      <article className={styles.root}>
        <ReactMarkdown
          remarkPlugins={remarkPlugins}
          rehypePlugins={[rehypeHighlight]}
          components={{
            pre: MarkdownCodeBlock,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      <MarkdownToc headings={headings} />
    </>
  );
};
