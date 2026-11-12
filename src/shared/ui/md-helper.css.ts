import { style } from '@vanilla-extract/css';
import { vars } from '../styles';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
  width: '100%',
  padding: `${vars.spacing.sm} 0`,
});

export const group = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,

  selectors: {
    '&:not(:last-child)': {
      paddingRight: vars.spacing.md,
      borderRight: `1px solid ${vars.color.border}`,
    },
  },
});

export const headingSelect = style({
  height: '2.5rem',
  minWidth: '6rem',
  padding: `0 ${vars.spacing.sm}`,
  border: 'none',
  borderRadius: vars.radius.md,
  outline: 'none',
  background: 'transparent',
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  fontFamily: 'inherit',
  cursor: 'pointer',

  ':hover': {
    background: vars.color.surface,
  },

  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: 2,
  },
});

export const footnoteIcon = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: 1,
});
