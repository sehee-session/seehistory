import type { HTMLAttributes } from 'react';
import * as styles from './card.css';

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <div
    {...props}
    className={[styles.card, className].filter(Boolean).join(' ')}
  />
);
