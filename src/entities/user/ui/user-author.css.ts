import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const author = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  width: '100%',
  color: vars.color.text,
  textDecoration: 'none',
  padding: `${vars.spacing.md} 0`,
});

export const avatar = style({
  width: '32px',
  height: '32px',
  borderRadius: vars.radius.full,
  objectFit: 'cover',
});

export const avatarFallback = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.surface,
  color: vars.color.text,
  fontWeight: 600,
});

export const name = style({
  fontSize: '14px',
  fontWeight: 500,
});
