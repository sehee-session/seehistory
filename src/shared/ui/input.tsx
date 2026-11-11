import * as styles from './input.css';

export const Input = (props: React.ComponentProps<'input'>) => (
  <input {...props} className={styles.container} placeholder="Title" />
);
