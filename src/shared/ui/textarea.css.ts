import { style } from '@vanilla-extract/css';
import { vars } from '../styles';

export const container = style({
  width: '100%',
  padding: vars.spacing.sm,

  outline: 'none',
  border: 'none',
  borderBottom: `2px solid ${vars.color.border}`,
  background: 'transparent',

  color: vars.color.text,
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.medium,
  lineHeight: 1.4,
  fontFamily: 'inherit',
  resize: 'none',

  selectors: {
    '&::placeholder': {
      color: vars.color.textDim,
      opacity: 1,
    },

    '&:focus-visible': {
      borderColor: vars.color.accent,
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});
