import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../lib/theme.css';

const blink = keyframes({
  '0%, 50%': { opacity: 1 },
  '51%, 100%': { opacity: 0 },
});

export const terminal = style({
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  color: vars.color.bg,
  background: vars.color.text,
  padding: vars.spacing.md,
});

export const prompt = style({
  color: vars.color.accent,
});

export const cursor = style({
  animation: `${blink} 1s steps(1) infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});
