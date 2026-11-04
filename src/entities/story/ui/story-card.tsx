import { Link } from 'react-router';
import * as styles from './story-card.css';

type StoryCardProps = {
  id: string;
  thumbnailUrl: string | null;
  title: string;
  summary: string;
  createdAt: string;
  author: {
    name: string;
    avatarUrl: string | null;
    nickname: string;
  };
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));

export const StoryCard = ({
  id,
  thumbnailUrl,
  title,
  summary,
  createdAt,
  author,
}: StoryCardProps) => (
  <Link to={`/stories/${id}`} className={styles.card}>
    <article>
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

        <Link to={`/users/${author.nickname}`} className={styles.author}>
          {author.avatarUrl ? (
            <img className={styles.avatar} src={author.avatarUrl} alt="" />
          ) : (
            <div className={styles.avatarFallback}>
              {author.name.charAt(0).toUpperCase()}
            </div>
          )}

          <span>{author.name}</span>
        </Link>
      </div>
    </article>
  </Link>
);
