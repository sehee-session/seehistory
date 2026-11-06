import { Link } from 'react-router';
import type { User } from '../model/types';
import * as styles from './user-author.css';

type UserAuthorProps = Pick<User, 'name' | 'nickname' | 'avatarUrl'>;

export const UserAuthor = ({ name, nickname, avatarUrl }: UserAuthorProps) => (
  <Link to={`/users/${nickname}`} className={styles.author}>
    {avatarUrl ? (
      <img className={styles.avatar} src={avatarUrl} alt="" />
    ) : (
      <span className={styles.avatarFallback}>
        {name.charAt(0).toUpperCase()}
      </span>
    )}
    <span className={styles.name}>{name}</span>
  </Link>
);
