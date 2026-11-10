import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../lib';
import { root } from './md-viewer.css';

export const toc = style({
  position: 'fixed',
  top: '6rem',
  left: 'calc(50% + 400px)',
  width: '200px',
  maxHeight: 'calc(100vh - 8rem)',
  overflowY: 'auto',

  '@media': {
    'screen and (max-width: 1200px)': {
      display: 'none',
    },
  },
});

export const tocTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
});

export const tocList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

export const tocLink = style({
  display: 'block',
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  color: 'inherit',
  opacity: 0.6,
  textDecoration: 'none',
  transition: 'opacity 150ms ease',

  selectors: {
    '&:hover': {
      opacity: 1,
    },
  },
});

export const tocLinkActive = style([
  tocLink,
  { fontWeight: vars.fontWeight.semibold, opacity: 1 },
]);

globalStyle(
  `${root} h1, ${root} h2, ${root} h3, ${root} h4, ${root} h5, ${root} h6`,
  { scrollMarginTop: vars.spacing.md },
);
