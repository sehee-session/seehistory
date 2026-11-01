import { style } from '@vanilla-extract/css';
import { vars } from '/shared/lib/theme.css';

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.lg,
  padding: `${vars.spacing['2xl']} ${vars.spacing.lg}`,
  backgroundColor: vars.color.text,
  color: vars.color.bg,
});

export const description = style({
  color: vars.color.textDim,
  textAlign: 'center',
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.md,
  flexWrap: 'wrap',
});
