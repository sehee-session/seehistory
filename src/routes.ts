import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('pages/ui/home.tsx'),
  route('stories', 'pages/ui/stories.tsx'),
] satisfies RouteConfig;
