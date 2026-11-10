import React from 'react';
import type { MarkdownHeading } from '../lib/extract-headings';
import * as styles from './md-toc.css';

type MarkdownTocProps = {
  headings: MarkdownHeading[];
};

export const MarkdownToc = ({ headings }: MarkdownTocProps) => {
  const [activeId, setActiveId] = React.useState(headings[0]?.id ?? '');

  React.useEffect(() => {
    if (headings.length === 0) return;

    const offset = 40;

    const handleScroll = () => {
      const currentHeading = [...headings].reverse().find(({ id }) => {
        const element = document.getElementById(id);

        return element && element.getBoundingClientRect().top <= offset;
      });

      setActiveId(currentHeading?.id ?? headings[0].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <p className={styles.tocTitle}>On this page</p>

      <ul className={styles.tocList}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={() => setActiveId(heading.id)}
              className={
                activeId === heading.id ? styles.tocLinkActive : styles.tocLink
              }
              style={{
                paddingLeft: `${(heading.level - 1) * 12}px`,
              }}
              aria-current={activeId === heading.id ? 'location' : undefined}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
