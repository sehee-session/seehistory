import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const card = style({
  display: 'block',
  width: '100%',
  overflow: 'hidden',
  color: 'inherit',
  textDecoration: 'none',
  backgroundColor: vars.color.surface,
  transition: 'border-color 150ms ease, transform 150ms ease',

  ':hover': {
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },

  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: '3px',
    },
  },
});

export const thumbnail = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  backgroundColor: vars.color.bg,
  color: vars.color.textDim,
  fontFamily: 'monospace',
});

export const thumbnailImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
});

export const title = style({
  display: '-webkit-box',
  overflow: 'hidden',
  color: vars.color.text,
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
  lineHeight: 1.4,
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const summary = style({
  display: '-webkit-box',
  overflow: 'hidden',
  color: vars.color.textDim,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  borderTop: `1px solid ${vars.color.border}`,
});

export const date = style({
  color: vars.color.textDim,
  fontSize: vars.fontSize.xs,
});
