import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', { boxSizing: 'border-box', margin: 0 });

globalStyle('body', {
  margin: 0,
  fontFamily: 'system-ui, sans-serif',
});

globalStyle('root', { isolation: 'isolate' });
