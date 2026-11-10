import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/styles';

export const author = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  width: '100%',
  color: vars.color.text,
  textDecoration: 'none',
  padding: vars.spacing.md,
});

export const avatar = style({
  width: vars.size.xl,
  height: vars.size.xl,
  borderRadius: vars.radius.full,
  objectFit: 'cover',
});

export const avatarFallback = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vars.size.xl,
  height: vars.size.xl,
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.surface,
  color: vars.color.text,
  fontWeight: vars.fontWeight.semibold,
});

export const name = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
});
