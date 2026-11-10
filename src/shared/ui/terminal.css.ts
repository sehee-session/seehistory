import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '~/shared/styles';

export const root = style({
  overflow: 'hidden',
  backgroundColor: vars.color.terminal.bg,
  border: `1px solid ${vars.color.terminal.border}`,
  borderRadius: vars.radius.lg,
  width: '100%',
});

export const header = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: vars.size.xl,
  borderBottom: `1px solid ${vars.color.terminal.border}`,
});

export const dots = style({
  position: 'absolute',
  left: vars.spacing.md,
  display: 'flex',
  gap: vars.spacing.xs,
});

export const dot = style({
  width: vars.size.xs,
  height: vars.size.xs,
  borderRadius: vars.radius.full,
});

export const red = style({
  backgroundColor: vars.color.terminal.red,
});

export const yellow = style({
  backgroundColor: vars.color.terminal.yellow,
});

export const green = style({
  backgroundColor: vars.color.terminal.green,
});

export const title = style({
  color: vars.color.terminal.textDim,
  fontSize: vars.fontSize.xs,
  fontFamily: 'monospace',
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  padding: vars.spacing.xl,
  color: vars.color.terminal.text,
  fontSize: vars.fontSize.sm,
  fontFamily: 'monospace',
  lineHeight: 1.6,
});

export const command = style({
  whiteSpace: 'pre-wrap',
});

export const prompt = style({
  color: vars.color.accent,
});

export const output = style({
  color: vars.color.terminal.red,
  whiteSpace: 'pre-wrap',
});

export const trailingPrompt = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

const blink = keyframes({
  '50%': {
    opacity: 0,
  },
});

export const cursor = style({
  display: 'inline-block',
  width: '0.4375rem',
  height: vars.spacing.md,
  backgroundColor: vars.color.terminal.text,
  animation: `${blink} 1s step-end infinite`,
  verticalAlign: 'middle',

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});

export const line = style({
  minHeight: '1.6em',
  whiteSpace: 'pre-wrap',
});

export const lineText = {
  command: style({
    color: vars.color.terminal.text,
  }),
  output: style({
    color: vars.color.terminal.text,
  }),
  error: style({
    color: vars.color.terminal.red,
  }),
  success: style({
    color: vars.color.terminal.green,
  }),
};

export const commandSymbol = style({
  color: vars.color.terminal.green,
});
