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
  fontWeight: vars.fontWeight.medium,
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
      color: vars.color.bg,
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

  icon: [
    base,
    {
      padding: 0,
      width: `calc(${vars.fontSize.sm} * 1.5 + ${vars.spacing.sm} * 2 + 2px)`,
      height: `calc(${vars.fontSize.sm} * 1.5 + ${vars.spacing.sm} * 2 + 2px)`,
      color: vars.color.text,
      border: 'none',
      backgroundColor: 'transparent',

      ':hover': {
        backgroundColor: vars.color.surface,
      },
    },
  ],
});
