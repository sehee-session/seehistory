import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  // index('pages/ui/home.tsx'),

  // story
  // route('stories', 'pages/ui/stories.tsx'),
  route('stories/:id', 'pages/ui/story.tsx'),

  // user
  route('users/:nickname', 'pages/ui/user.tsx'),

  //
  route('*', 'pages/ui/not-found.tsx'),
] satisfies RouteConfig;
