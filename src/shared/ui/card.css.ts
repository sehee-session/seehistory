import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  width: '100%',
  padding: vars.spacing.lg,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: 'border-color 150ms ease',
});
