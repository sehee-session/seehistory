import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const list = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
});

export const listItem = style({
  selectors: {
    [`${list} & + &`]: {
      borderTop: `1px solid ${vars.color.border}`,
      paddingTop: vars.spacing['2xl'],
      marginTop: vars.spacing['2xl'],
    },
  },
});
