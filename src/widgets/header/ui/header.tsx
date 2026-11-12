import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ColorModeToggle } from '~/shared/ui';
import * as styles from './header.css';

type HeaderProps = {
  text: string;
  actions?: ReactNode;
};

export const Header = ({ text, actions }: HeaderProps) => {
  return (
    <ul className={styles.header}>
      <li className={styles.logo}>
        <Link to="/">~/</Link>
        {text}
      </li>
      <li className={styles.actions}>
        <ColorModeToggle />
        {actions}
      </li>
    </ul>
  );
};
