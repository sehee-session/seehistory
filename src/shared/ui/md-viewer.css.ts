import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../lib';

export const root = style({
  color: vars.color.text,
  padding: vars.spacing.md,
});

globalStyle(
  `${root} h1,
  ${root} h2,
  ${root} h3,
  ${root} h4,
  ${root} h5,
  ${root} h6,
  ${root} p,
  ${root} img,
  ${root} table,
  ${root} ul,
  ${root} ol`,
  {
    marginTop: vars.spacing.lg,
    marginBottom: vars.spacing.lg,
  },
);
globalStyle(`${root} li`, {
  marginTop: vars.spacing.md,
  marginBottom: vars.spacing.md,
});

// Heading
globalStyle(`${root} h1`, { fontSize: '4rem' });
globalStyle(`${root} h2`, { fontSize: '3rem' });
globalStyle(`${root} h3`, { fontSize: '2.5rem' });
globalStyle(`${root} h4`, { fontSize: '2rem' });
globalStyle(`${root} h5`, { fontSize: '1.5rem' });
globalStyle(`${root} h6`, { fontSize: '1rem' });

// Paragraph
globalStyle(`${root} p`, {});

// Text Formatting
globalStyle(`${root} strong`, {
  fontWeight: vars.fontWeight.bold,
});
globalStyle(`${root} em`, {
  fontStyle: 'italic',
});
globalStyle(`${root} del`, {
  textDecoration: 'line-through',
});

// Link
globalStyle(`${root} a`, {});
globalStyle(`${root} a:hover`, {});
globalStyle(`${root} a:focus-visible`, {});

// List
// List
globalStyle(`${root} ul, ${root} ol`, {
  paddingLeft: vars.spacing.md,
  margin: 0,
  fontWeight: vars.fontWeight.medium,
});

globalStyle(`${root} ul:not(.contains-task-list)`, {
  listStyleType: 'disc',
});

globalStyle(`${root} ul ul:not(.contains-task-list)`, {
  listStyleType: 'circle',
});

globalStyle(`${root} ul ul ul:not(.contains-task-list)`, {
  listStyleType: 'square',
});

globalStyle(`${root} ol`, {
  listStyle: 'none',
  counterReset: 'list-counter',
  paddingLeft: 0,
});

globalStyle(`${root} ol > li`, {
  position: 'relative',
  counterIncrement: 'list-counter',
  paddingLeft: vars.spacing.lg,
  marginBottom: vars.spacing.sm,
});

globalStyle(`${root} ol > li::before`, {
  content: 'counter(list-counter)',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  color: vars.color.accent,
});

// Blockquote
globalStyle(`${root} blockquote`, {
  padding: vars.spacing.md,
  borderRight: 1,
  borderTop: 1,
  borderBottom: 1,
  borderColor: vars.color.border,
  borderLeftColor: vars.color.success,
  borderLeftWidth: vars.size.xs,
  borderStyle: 'solid',
  marginTop: vars.spacing.md,
  marginBottom: vars.spacing.md,
});
globalStyle(`${root} blockquote p`, {
  padding: 0,
  margin: 0,
});

// Code
globalStyle(`${root} pre`, {
  padding: vars.size.lg,
  borderRadius: vars.radius.md,
  background: vars.color.terminal.bg,
  color: vars.color.terminal.text,
});
globalStyle(`${root} pre > code`, {});
globalStyle(`${root} :not(pre) > code`, {
  border: `1px solid ${vars.color.border}`,
  padding: vars.spacing.sm,
  margin: vars.spacing.sm,
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.xs,
});

globalStyle(`${root} .hljs`, {});

// Image
globalStyle(`${root} img`, {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
});

// Table
globalStyle(`${root} table`, {
  width: '100%',
  overflowX: 'auto',
  borderCollapse: 'collapse',
});

globalStyle(`${root} thead`, {
  fontWeight: vars.fontWeight.semibold,
});

globalStyle(`${root} tbody`, {
  color: vars.color.text,
});

globalStyle(`${root} tbody tr:nth-child(odd)`, {
  backgroundColor: vars.color.surface,
});

globalStyle(`${root} tbody tr:nth-child(even)`, {
  backgroundColor: vars.color.bg,
});

globalStyle(`${root} thead tr`, {
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`${root} th, ${root} td`, {
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  textAlign: 'left',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
});

globalStyle(`${root} th`, {
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: vars.color.white,
});

// Horizontal Rule
globalStyle(`${root} hr`, {
  border: 0,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
});

// Footnote
globalStyle(`${root} sup`, {
  fontSize: vars.fontSize.xs,
  lineHeight: 1,
});

globalStyle(`${root} sup a`, {
  color: vars.color.accent,
  textDecoration: 'none',
  fontWeight: vars.fontWeight.semibold,
});

globalStyle(`${root} sup a::before`, {
  content: '"⌜"',
  fontSize: vars.fontSize.md,
});

globalStyle(`${root} sup a::after`, {
  content: '"⌟"',
  fontSize: vars.fontSize.md,
});

globalStyle(`${root} section[data-footnotes]`, {
  marginTop: vars.spacing.xl,
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
});

globalStyle(`${root} section[data-footnotes] a`, {
  color: vars.color.accent,
  textDecoration: 'none',
});

globalStyle(`${root} section[data-footnotes] ol > li::before`, {
  content: '"[" counter(list-counter) "]"',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  color: vars.color.accent,
});
