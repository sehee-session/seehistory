import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars } from '../lib';

const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(8px) scale(0.98)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(8px) scale(0.98)',
  },
});

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const viewport = style({
  position: 'fixed',
  top: vars.spacing.lg,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 9999,

  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  gap: 0,

  width: 'calc(100% - 2rem)',
  maxWidth: '24rem',
  padding: vars.spacing.sm,

  pointerEvents: 'none',
});

// 겹쳐진 토스트 간격
globalStyle(`${viewport} > * + *`, {
  marginBottom: '-2.5rem',
});

globalStyle(`${viewport}:hover > * + *`, {
  marginBottom: vars.spacing.sm,
});

globalStyle(`${viewport} > :nth-child(1)`, {
  zIndex: 3,
});

globalStyle(`${viewport} > :nth-child(2)`, {
  zIndex: 2,
  scale: 0.95,
});

globalStyle(`${viewport} > :nth-child(3)`, {
  zIndex: 1,
  scale: 0.9,
});

globalStyle(`${viewport}:hover > *`, {
  scale: '1',
});

export const toast = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,

  width: '100%',
  padding: vars.spacing.md,

  borderRadius: vars.radius.lg,
  background: vars.color.bg,
  color: vars.color.text,

  boxShadow: vars.shadow.md,

  pointerEvents: 'auto',
  animation: `${fadeIn} 180ms ease-out both`,

  transformOrigin: 'center',
  transition: 'scale 180ms ease, margin-bottom 180ms ease',

  selectors: {
    '&[data-state="closing"]': {
      animation: `${fadeOut} 180ms ease-in both`,
      pointerEvents: 'none',
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      transition: 'none',

      selectors: {
        '&[data-state="closing"]': {
          animation: 'none',
        },
      },
    },
  },
});

export const content = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: vars.spacing.xs,
  minWidth: 0,
});

export const message = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: 1.5,
  wordBreak: 'break-word',
});

export const description = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.text,
  lineHeight: 1.5,
  wordBreak: 'break-word',
});

export const closeButton = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',

  width: vars.size.lg,
  height: vars.size.lg,
  padding: 0,

  border: 0,
  borderRadius: vars.radius.md,
  background: 'transparent',

  cursor: 'pointer',
});

export const spinner = style({
  flexShrink: 0,
  animation: `${spin} 1s linear infinite`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});
