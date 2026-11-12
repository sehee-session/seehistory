import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  StrikethroughIcon,
  TableIcon,
} from 'lucide-react';
import { Button } from './button';
import * as styles from './md-helper.css';

export const MarkdownHelper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <select
          className={styles.headingSelect}
          aria-label="Heading"
          defaultValue="paragraph"
        >
          <option value="paragraph">본문</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="h6">Heading 6</option>
        </select>
      </div>

      <div className={styles.group}>
        <Button variant="icon" type="button" aria-label="Bold" title="Bold">
          <BoldIcon />
        </Button>
        <Button variant="icon" type="button" aria-label="Italic" title="Italic">
          <ItalicIcon />
        </Button>
        <Button
          variant="icon"
          type="button"
          aria-label="Strikethrough"
          title="Strikethrough"
        >
          <StrikethroughIcon />
        </Button>
      </div>

      <div className={styles.group}>
        <Button
          variant="icon"
          type="button"
          aria-label="Code block"
          title="Code block"
        >
          <CodeIcon />
        </Button>
        <Button
          variant="icon"
          type="button"
          aria-label="Unordered list"
          title="Unordered list"
        >
          <ListIcon />
        </Button>
        <Button
          variant="icon"
          type="button"
          aria-label="Ordered list"
          title="Ordered list"
        >
          <ListOrderedIcon />
        </Button>
        <Button variant="icon" type="button" aria-label="Link" title="Link">
          <LinkIcon />
        </Button>
        <Button variant="icon" type="button" aria-label="Table" title="Table">
          <TableIcon />
        </Button>
        <Button
          variant="icon"
          type="button"
          aria-label="Footnote"
          title="Footnote"
        >
          <span className={styles.footnoteIcon}>¹</span>
        </Button>
      </div>
    </div>
  );
};
