// useTyping.ts
import React from 'react';

type Options = {
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export const useTyping = (
  text: string,
  { speed = 40, deleteSpeed = 20, pause = 5000 }: Options = {},
) => {
  const [out, setOut] = React.useState('');

  React.useEffect(() => {
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        i++;
        setOut(text.slice(0, i));

        if (i >= text.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        i--;
        setOut(text.slice(0, i));

        if (i <= 0) {
          deleting = false;
        }
        timer = setTimeout(tick, deleting ? deleteSpeed : speed);
      }
    };

    setOut('');
    timer = setTimeout(tick, speed);

    return () => clearTimeout(timer);
  }, [text, speed, deleteSpeed, pause]);

  return out;
};
