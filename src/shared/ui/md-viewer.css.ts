import { style } from '@vanilla-extract/css';
import { vars } from '../lib';

export const root = style({
  color: vars.color.text,

  selectors: {
    '& h1': {},
    '& h2': {},
    '& h3': {},
    '& p': {},
    '& a': {},
    '& ul, & ol': {},
    '& li': {},
    '& blockquote': {},
    '& pre': {},
    '& code': {},
    '& :not(pre) > code': {},
    '& img': {},
    '& table': {},
    '& th, & td': {},
    '& hr': {},
  },
});
