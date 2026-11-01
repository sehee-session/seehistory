import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Reset CSS
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd', {
  margin: 0,
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('button, input, textarea, select', {
  font: 'inherit',
});

globalStyle('button', {
  cursor: 'pointer',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

// Global CSS
globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  minHeight: '100vh',
  fontFamily: 'Inter, system-ui, sans-serif',
  lineHeight: 1.5,
  backgroundColor: vars.color.bg,
  color: vars.color.text,
});

globalStyle('.root', {
  minHeight: '100vh',
  isolation: 'isolate',
});
