import { useTyping } from '../hooks/use-typing.tsx';
import * as s from './terminal.css.ts';

export const Terminal = ({ text }: { text: string }) => {
  const output = useTyping(text);

  return (
    <pre className={s.terminal} aria-label={text}>
      <span className={s.prompt}>$ </span>
      {output}
      <span className={s.cursor}>▍</span>
    </pre>
  );
};
