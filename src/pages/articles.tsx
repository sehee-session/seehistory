import type { Route } from './+types/articles';

export const meta = () => {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

export const loader = async ({ params: { nickname } }: Route.LoaderArgs) => {
  if (!nickname.startsWith('~')) {
    throw new Response('Not Found', { status: 404 });
  }

  return { nickname: nickname.slice(1) };
};

const Page = ({ params }: Route.ComponentProps) => {
  return params.nickname;
};

export default Page;
