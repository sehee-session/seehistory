import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const root = style({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: vars.color.bg,
  flexDirection: 'column',
});

export const content = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  flex: 1,
});

export const message = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const code = style({
  display: 'inline-block',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  color: vars.color.error,
  backgroundColor: `${vars.color.error}14`,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.xs,
  fontWeight: 700,
  letterSpacing: '0.08em',
});

export const heading = style({
  color: vars.color.text,
  fontSize: 'clamp(2rem, 6vw, 2.75rem)',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.05em',
});

export const description = style({
  color: vars.color.textDim,
  fontSize: vars.fontSize.md,
  lineHeight: 1.7,
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
});

export const homeButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  color: '#fff',
  backgroundColor: vars.color.accent,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'opacity 150ms ease, transform 150ms ease',

  ':hover': {
    opacity: 0.9,
    transform: 'translateY(-2px)',
  },

  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '3px',
  },
});

export const storiesButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'border-color 150ms ease, transform 150ms ease',

  ':hover': {
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },

  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '3px',
  },
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  borderTop: `1px solid ${vars.color.border}`,
  color: vars.color.textDim,
  fontSize: vars.fontSize.xs,
  fontFamily: 'monospace',
});
