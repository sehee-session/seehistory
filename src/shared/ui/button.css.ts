import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../lib/theme.css';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  lineHeight: 1.5,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'background-color 150ms ease, opacity 150ms ease',

  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '3px',
  },

  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const buttonVariants = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.accent,
      color: '#ffffff',
      border: `1px solid ${vars.color.accent}`,

      ':hover': {
        opacity: 0.9,
      },
    },
  ],

  secondary: [
    base,
    {
      backgroundColor: vars.color.bg,
      color: vars.color.text,
      border: `1px solid ${vars.color.border}`,

      ':hover': {
        backgroundColor: vars.color.surface,
      },
    },
  ],
});
