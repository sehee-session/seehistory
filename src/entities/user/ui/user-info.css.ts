import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib';

export const root = style({
  display: 'flex',
  alignItems: 'start',
  gap: vars.spacing.lg,
  padding: vars.spacing.md,
});

export const avatar = style({
  width: vars.size['3xl'],
  height: vars.size['3xl'],
  objectFit: 'cover',
  borderRadius: vars.radius.full,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
});

export const name = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text,
});

export const nickname = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textDim,
  fontFamily: 'monospace',
});

export const intro = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  lineHeight: 1.5,
});
