import { useTyping } from '../hooks/use-typing';
import * as styles from './terminal.css';

type TerminalVariant = 'default' | 'error' | 'success';

type TerminalLine = {
  text: string;
  type?: 'command' | 'output' | 'error' | 'success';
  typo?: boolean;
};

type TerminalProps = {
  lines: TerminalLine[];
  title?: string;
  variant?: TerminalVariant;
  cursor?: boolean;
};

export const Terminal = ({
  lines,
  title = 'terminal',
  variant = 'default',
  cursor = true,
}: TerminalProps) => (
  <section
    className={`${styles.root} ${styles.variants[variant]}`}
    aria-label={title}
  >
    <header className={styles.header}>
      <div className={styles.dots} aria-hidden="true">
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>

      <span className={styles.title}>{title}</span>
    </header>

    <div className={styles.body}>
      {lines.map((line, index) => (
        <TerminalLineView
          key={`${index}-${line.text}`}
          line={line}
          showCursor={cursor && index === lines.length - 1}
        />
      ))}
    </div>
  </section>
);

type TerminalLineViewProps = {
  line: TerminalLine;
  showCursor: boolean;
};

const TerminalLineView = ({ line, showCursor }: TerminalLineViewProps) => (
  <p className={styles.line}>
    {line.type === 'command' && (
      <>
        <span className={styles.prompt}>~/heestory</span>
        {' $ '}
      </>
    )}

    <span className={styles.lineText[line.type ?? 'output']}>
      {line.typo ? <TypingText text={line.text} /> : line.text}
    </span>

    {showCursor && <span className={styles.cursor} aria-hidden="true" />}
  </p>
);

const TypingText = ({ text }: { text: string }) => {
  const output = useTyping(text);

  return <>{output}</>;
};
