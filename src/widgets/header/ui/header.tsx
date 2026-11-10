import { PencilLineIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button, ColorModeToggle } from '~/shared/ui';
import * as styles from './header.css';

type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => {
  return (
    <ul className={styles.header}>
      <li className={styles.logo}>
        <Link to="/">~/</Link>
        {text}
      </li>
      <li>
        <ColorModeToggle />
        <Button variant="icon" to={'/stories/new'}>
          <PencilLineIcon size={16} />
        </Button>
      </li>
    </ul>
  );
};
