import { style } from '@vanilla-extract/css';
import { vars } from '~/shared/styles';

export const root = style({
  width: '100%',
  padding: vars.spacing.md,
});

export const thumbnail = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  aspectRatio: '4 / 3',
  overflow: 'hidden',
  color: vars.color.textDim,
  fontFamily: 'monospace',
});

export const thumbnailImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const list = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.lg,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const tab = style({
  appearance: 'none',
  border: 'none',
  background: 'transparent',
  padding: `${vars.spacing.md} ${vars.spacing.xs}`,
  color: vars.color.textDim,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  transition: 'color 150ms ease',
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing.sm,
  alignItems: 'center',

  selectors: {
    '&[data-active]': {
      color: vars.color.accent,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: '-2px',
      borderRadius: vars.radius.sm,
    },
  },
});

export const indicator = style({
  position: 'absolute',
  bottom: 0,
  left: 'var(--active-tab-left)',
  width: 'var(--active-tab-width)',
  height: '2px',
  backgroundColor: vars.color.accent,
  transition: 'left 200ms ease, width 200ms ease',
});

export const panel = style({
  paddingTop: vars.spacing.lg,
  display: 'flex',
  flexDirection: 'column',
});

export const panelItem = style({
  selectors: {
    [`${panel} & + &`]: {
      borderTop: `1px solid ${vars.color.border}`,
      paddingTop: vars.spacing['2xl'],
      marginTop: vars.spacing['2xl'],
    },
  },
});
