import React from 'react';
import { useFetcher, useRouteLoaderData } from 'react-router';
import type { ColorMode } from '../lib/color-mode.server';

export const useColorMode = () => {
  const rootData = useRouteLoaderData<typeof import('~/root').loader>('root');
  const [mode, setMode] = React.useState<ColorMode>(
    rootData?.colorMode ?? 'white',
  );
  const fetcher = useFetcher();

  const toggle = () => {
    if (fetcher.state !== 'idle') return;

    const nextMode: ColorMode = mode === 'dark' ? 'white' : 'dark';

    document.documentElement.dataset.mode = nextMode;

    setMode(nextMode);

    fetcher.submit(
      { mode: nextMode },
      { method: 'patch', action: '/color-mode' },
    );
  };

  return {
    mode,
    isDark: mode === 'dark',
    isSubmitting: fetcher.state !== 'idle',
    toggle,
  };
};
