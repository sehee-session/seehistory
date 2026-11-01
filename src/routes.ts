import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  index('pages/home.tsx'),
  ...prefix(':nickname', [
    index('pages/profile.tsx'),
    route('articles', 'pages/articles.tsx'),
    route('articles/:id', 'pages/article.tsx'),
  ]),
] satisfies RouteConfig;
