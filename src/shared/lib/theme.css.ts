import {
  createGlobalTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import { color, shadow } from './color';
import { fontSize, fontWeight, radius, size, spacing } from './size';

export const vars = createThemeContract({
  color: {
    white: null,
    bg: null,
    surface: null,
    border: null,
    text: null,
    textDim: null,

    // color
    accent: null,
    success: null,
    error: null,

    terminal: {
      bg: null,
      surface: null,
      border: null,
      text: null,
      textDim: null,
      red: null,
      yellow: null,
      green: null,
    },
  },
  size: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
  },
  spacing: { xs: null, sm: null, md: null, lg: null, xl: null, '2xl': null },
  radius: { sm: null, md: null, lg: null, full: null },
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
  },
  fontWeight: { regular: null, medium: null, semibold: null, bold: null },
  shadow: { sm: null, md: null, lg: null },
});

// Light Theme (Default)
createGlobalTheme(':root', vars, {
  color,
  radius,
  size,
  spacing,
  fontSize,
  fontWeight,
  shadow,
});

// Dark Theme (System Preference)
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [vars.color.white]: '#050505',
        [vars.color.bg]: '#0d1117',
        [vars.color.surface]: '#161b22',
        [vars.color.border]: '#21262d',
        [vars.color.text]: '#c9d1d9',
        [vars.color.textDim]: '#6e7681',
        [vars.color.accent]: '#A78BFA',
        [vars.color.error]: '#DC2626',
        [vars.color.success]: '#16A34A',

        [vars.color.terminal.bg]: '#1c2028',
        [vars.color.terminal.surface]: '#242a34',
        [vars.color.terminal.border]: '#303642',
        [vars.color.terminal.text]: '#e5e7eb',
        [vars.color.terminal.textDim]: '#9ca3af',
        [vars.color.terminal.red]: '#f87171',
        [vars.color.terminal.yellow]: '#fbbf24',
        [vars.color.terminal.green]: '#4ade80',
      },
    },
  },
});
