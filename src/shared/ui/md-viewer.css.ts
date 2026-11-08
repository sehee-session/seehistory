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
  ${root} h6`,
  {
    marginTop: vars.spacing.lg,
    marginBottom: vars.spacing.lg,
  },
);
globalStyle(
  `${root} li,
  ${root} p,
  ${root} img,
  ${root} table,
  ${root} ul,
  ${root} ol`,
  {
    marginTop: vars.spacing.md,
    marginBottom: vars.spacing.md,
  },
);

// Heading
globalStyle(`${root} h1`, {
  fontSize: vars.fontSize['4xl'],
});

globalStyle(`${root} h2`, {
  fontSize: vars.fontSize['3xl'],
});

globalStyle(`${root} h3`, {
  fontSize: vars.fontSize['2xl'],
});

globalStyle(`${root} h4`, {
  fontSize: vars.fontSize.xl,
});

globalStyle(`${root} h5`, {
  fontSize: vars.fontSize.lg,
});

globalStyle(`${root} h6`, {
  fontSize: vars.fontSize.md,
});

// Paragraph
globalStyle(`${root} p`, {
  fontSize: vars.fontSize.md,
});

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

const listStyles = ['disc', 'circle', 'square'] as const;
listStyles.forEach((listStyleType, index) => {
  const selector = `${root} ${'ul '.repeat(index)}ul:not(.contains-task-list)`;

  globalStyle(selector, {
    listStyleType,
  });

  globalStyle(`${selector} > li::marker`, {
    color: vars.color.accent,
  });
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
  borderLeftColor: vars.color.accent,
  borderLeftWidth: vars.size.xs,
  borderStyle: 'solid',
  marginTop: vars.spacing.md,
  marginBottom: vars.spacing.md,
});
globalStyle(`${root} blockquote p`, {
  margin: vars.spacing.sm,
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
  backgroundColor: vars.color.terminal.bg,
  color: vars.color.terminal.text,
  padding: vars.spacing.xs,
  marginTop: `-${vars.spacing.xs}`,
  marginBottom: `-${vars.spacing.xs}`,
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

export const codeBlock = style({
  position: 'relative',
});

export const copyButton = style({
  position: 'absolute',
  top: vars.spacing.sm,
  right: vars.spacing.sm,
  width: vars.size.xl,
  height: vars.size.xl,
  padding: 0,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

globalStyle(`${codeBlock} pre`, {
  margin: 0,
});
