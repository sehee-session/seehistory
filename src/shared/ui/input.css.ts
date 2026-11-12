import { style } from '@vanilla-extract/css';
import { vars } from '../styles';

export const container = style({
  width: '100%',
  padding: vars.spacing.sm,

  border: 'none',
  borderBottom: `2px solid ${vars.color.border}`,
  outline: 'none',
  background: 'transparent',

  color: vars.color.text,
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.medium,
  lineHeight: 1.4,
  fontFamily: 'inherit',

  caretColor: vars.color.accent,

  selectors: {
    '&::placeholder': {
      color: vars.color.textDim,
      opacity: 1,
    },

    '&:focus-visible': {
      borderBottomColor: vars.color.accent,
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});
