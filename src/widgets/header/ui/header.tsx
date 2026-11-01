import { Button } from '~/shared/ui';
import * as styles from './header.css';

type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => (
  <ul className={styles.header}>
    <li className={styles.logo}>{text}</li>
    <li>
      <Button variant="secondary">Sign In</Button>
    </li>
  </ul>
);
