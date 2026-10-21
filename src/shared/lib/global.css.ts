import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });

globalStyle('body', {
  margin: 0,
  background: vars.color.bg,
  color: vars.color.fg,
  fontFamily: 'system-ui, sans-serif',
});
