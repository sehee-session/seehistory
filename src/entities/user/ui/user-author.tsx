import { Link } from 'react-router';
import { PATHS } from '~/shared/constants';
import type { User } from '../model/types';
import * as styles from './user-author.css';

type UserAuthorProps = Pick<User, 'id' | 'name' | 'nickname' | 'avatarUrl'>;

export const UserAuthor = ({ id, name, avatarUrl }: UserAuthorProps) => (
  <Link to={PATHS.USERS.STORY(id)} className={styles.author}>
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
