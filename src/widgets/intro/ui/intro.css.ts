import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/styles';

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
  padding: vars.spacing.lg,
  listStyle: 'none',
});

export const featureCard = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing.md,
});
