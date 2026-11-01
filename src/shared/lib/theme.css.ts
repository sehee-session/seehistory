import {
  createGlobalTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import { color } from './color';
import { fontSize } from './font-size';
import { radius } from './radius';
import { spacing } from './spacing';

export const vars = createThemeContract({
  color: {
    bg: null,
    surface: null,
    border: null,
    text: null,
    textDim: null,
    accent: null,
  },
  spacing: { xs: null, sm: null, md: null, lg: null, xl: null, '2xl': null },
  radius: { sm: null, md: null, lg: null, full: null },
  fontSize: { xs: null, sm: null, md: null, lg: null, xl: null, '2xl': null },
});

// Light Theme (Default)
createGlobalTheme(':root', vars, { color, spacing, radius, fontSize });

// Dark Theme (System Preference)
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [vars.color.bg]: '#0d1117',
        [vars.color.surface]: '#161b22',
        [vars.color.border]: '#21262d',
        [vars.color.text]: '#c9d1d9',
        [vars.color.textDim]: '#6e7681',
        [vars.color.accent]: '#A78BFA',
      },
    },
  },
});
