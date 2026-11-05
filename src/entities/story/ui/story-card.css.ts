import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
  color: 'inherit',
  textDecoration: 'none',
  transition: 'transform 150ms ease',
  gap: vars.spacing.md,

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
  aspectRatio: '4 / 3',
  overflow: 'hidden',
  color: vars.color.textDim,
  fontFamily: 'monospace',
  padding: `0 ${vars.spacing.md}`,
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
  padding: `0 ${vars.spacing.md}`,
});

export const title = style({
  display: '-webkit-box',
  overflow: 'hidden',
  color: vars.color.text,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
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

export const date = style({
  color: vars.color.textDim,
  fontSize: vars.fontSize.xs,
  textAlign: 'end',
});
