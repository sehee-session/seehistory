import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { Button } from './button';
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
    } catch {
      setCopied(false);
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

export const MarkdownViewer = ({ content }: MarkdownViewerProps) => (
  <article className={styles.root}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        pre: MarkdownCodeBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  </article>
);
