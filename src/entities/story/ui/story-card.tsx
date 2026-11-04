import { Link } from 'react-router';
import { formatDate } from '../lib/format-date';
import type { Story } from '../model/types';
import * as styles from './story-card.css';

export const StoryCard = ({
  id,
  thumbnailUrl,
  title,
  summary,
  createdAt,
}: Story) => (
  <Link to={`/stories/${id}`} className={styles.card}>
    <div className={styles.thumbnail}>
      {thumbnailUrl ? (
        <img className={styles.thumbnailImage} src={thumbnailUrl} alt="" />
      ) : (
        <span>~/story</span>
      )}
    </div>

    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
    </div>

    <div className={styles.footer}>
      <time className={styles.date} dateTime={createdAt}>
        {formatDate(createdAt)}
      </time>
    </div>
  </Link>
);
