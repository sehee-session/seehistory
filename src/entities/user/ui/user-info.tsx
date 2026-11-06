import type { User } from '../model/types';
import * as styles from './user-info.css';

type UserInfoProps = Pick<User, 'name' | 'nickname' | 'avatarUrl' | 'intro'>;

export const UserInfo = ({
  name,
  nickname,
  avatarUrl,
  intro,
}: UserInfoProps) => (
  <section className={styles.root}>
    <img className={styles.avatar} src={avatarUrl ?? ''} alt="" />
    <div className={styles.content}>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.nickname}>~/{nickname}</span>
      <p className={styles.intro}>{intro}</p>
    </div>
  </section>
);
