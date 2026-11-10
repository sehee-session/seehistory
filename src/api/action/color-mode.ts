import { colorModeCookie } from '~/shared/actions';
import type { Route } from './+types/color-mode';

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const mode = formData.get('mode');

  if (mode !== 'dark' && mode !== 'white') {
    return Response.json(
      { success: false, message: 'Invalid color mode' },
      { status: 400 },
    );
  }

  return Response.json(
    { success: true, mode },
    {
      headers: {
        'Set-Cookie': await colorModeCookie.serialize(mode),
      },
    },
  );
};
