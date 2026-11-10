import { createCookie } from 'react-router';

export type ColorMode = 'dark' | 'white';
export const DEFAULT_COLOR_MODE: ColorMode = 'white';

export const colorModeCookie = createCookie('color-mode', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
});

export const getColorMode = async (request: Request): Promise<ColorMode> => {
  const cookie = await colorModeCookie.parse(request.headers.get('Cookie'));

  return cookie === 'dark' || cookie === 'white' ? cookie : DEFAULT_COLOR_MODE;
};
