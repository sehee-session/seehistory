import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Reset CSS
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd', {
  margin: 0,
});

globalStyle('h1', {
  fontSize: vars.fontSize['4xl'],
});

globalStyle('h2', {
  fontSize: vars.fontSize['3xl'],
});

globalStyle('h3', {
  fontSize: vars.fontSize['2xl'],
});

globalStyle('h4', {
  fontSize: vars.fontSize.xl,
});

globalStyle('h5', {
  fontSize: vars.fontSize.lg,
});

globalStyle('h6', {
  fontSize: vars.fontSize.md,
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
  margin: 'auto',
  minHeight: '100vh',
  maxWidth: '767px',
  fontFamily: 'Inter, system-ui, sans-serif',
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  lineHeight: 1.5,
});

globalStyle('.root', {
  minHeight: '100vh',
  isolation: 'isolate',
});
