// Terminal.tsx
import { useTyping } from '../../hook/use-typing.tsx';
import * as s from './index.css.ts';

export const Terminal = ({ text }: { text: string }) => {
  const out = useTyping(text);

  return (
    <pre className={s.terminal} aria-label={text}>
      <span className={s.prompt}>$ </span>
      {out}
      <span className={s.cursor}>▍</span>
    </pre>
  );
};
