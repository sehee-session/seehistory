import { style } from '@vanilla-extract/css';
import { vars } from '../lib/theme.css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '12px 20px',
  margin: 0,
  listStyle: 'none',
  backgroundColor: vars.color.bg,
  color: vars.color.text,
});

export const loginButton = style({
  padding: '8px 16px',
  border: 0,
  borderRadius: '8px',
  backgroundColor: vars.color.accent,
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',

  ':hover': {
    opacity: 0.85,
  },
});
