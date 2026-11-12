import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  // story
  index('pages/ui/stories.tsx'),
  route('stories/new', 'pages/ui/create-story.tsx'),
  route('stories/:id', 'pages/ui/story.tsx'),
  route('stories/:id/edit', 'pages/ui/edit-story.tsx'),

  // user
  route('users/:id', 'pages/ui/user.tsx'),

  // theme
  route('color-mode', 'api/action/color-mode.ts'),

  //
  route('*', 'pages/ui/not-found.tsx'),
] satisfies RouteConfig;
