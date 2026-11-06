import { PencilLineIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/shared/ui';
import * as styles from './header.css';

type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => (
  <ul className={styles.header}>
    <li className={styles.logo}>
      <Link to="/">~/</Link>
      {text}
    </li>
    <li>
      <Button variant="icon">
        <PencilLineIcon />
      </Button>
    </li>
  </ul>
);
