import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/lib/theme.css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
  padding: vars.spacing.lg,
  backgroundColor: vars.color.bg,
});

export const content = style({
  width: '100%',
  maxWidth: '560px',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const message = style({
  textAlign: 'center',
});

export const code = style({
  display: 'inline-block',
  marginBottom: vars.spacing.md,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  color: vars.color.error,
  backgroundColor: `${vars.color.error}14`,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.xs,
  fontWeight: 700,
  letterSpacing: '0.08em',
});

export const heading = style({
  margin: 0,
  color: vars.color.text,
  fontSize: 'clamp(2rem, 6vw, 2.75rem)',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.05em',
});

export const description = style({
  maxWidth: '420px',
  margin: `${vars.spacing.lg} auto 0`,
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
  marginTop: vars.spacing.xl,
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
  marginTop: vars.spacing['2xl'],
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.color.border}`,
  color: vars.color.textDim,
  fontSize: '10px',
  fontFamily: 'monospace',
  letterSpacing: '0.04em',
});
