import { Link } from 'react-router';
import { PATHS } from '~/shared/constants';
import { formatDate } from '../lib/format-date';
import type { Story } from '../model/types';
import * as styles from './story-card.css';

export const StoryCard = ({
  id,
  thumbnailUrl,
  title,
  summary,
  createdAt,
}: Omit<Story, 'content'>) => (
  <Link to={PATHS.STORY.DETAIL(id)} className={styles.card}>
    <div className={styles.thumbnail}>
      {thumbnailUrl ? (
        <img className={styles.thumbnailImage} src={thumbnailUrl} alt="" />
      ) : (
        <span>~/story</span>
      )}
    </div>
    <div className={styles.content}>
      <time className={styles.date} dateTime={createdAt}>
        {formatDate(createdAt)}
      </time>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
    </div>
  </Link>
);
