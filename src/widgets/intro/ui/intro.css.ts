import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
});

export const heading = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const featureList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  margin: 0,
  padding: vars.spacing.lg,
  listStyle: 'none',
});

export const featureCard = style({
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing.md,
});
