import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const list = style({
  paddingTop: vars.spacing.lg,
  display: 'grid',
  flexDirection: 'column',
  gap: vars.spacing.md,
  gridTemplateColumns: 'repeat(1, 1fr)',
});
