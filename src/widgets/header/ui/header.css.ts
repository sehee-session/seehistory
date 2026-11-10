import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/styles';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: `${vars.spacing.md}`,
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  letterSpacing: '-0.04em',
});
