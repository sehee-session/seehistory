// terminal.css.ts
import { keyframes, style } from '@vanilla-extract/css';

const blink = keyframes({
  '0%, 50%': { opacity: 1 },
  '51%, 100%': { opacity: 0 },
});

export const terminal = style({
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

export const prompt = style({ color: '#4ade80' });

export const cursor = style({
  animation: `${blink} 1s steps(1) infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': { animation: 'none' },
  },
});
