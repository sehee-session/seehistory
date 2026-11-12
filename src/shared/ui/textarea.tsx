import type React from 'react';
import * as styles from './textarea.css';

export const TextArea = (props: React.ComponentProps<'textarea'>) => (
  <textarea {...props} className={styles.container} />
);
