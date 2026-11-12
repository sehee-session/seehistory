export const PATHS = {
  HOME: '/',
  STORY: {
    BASE: '/stories',
    DETAIL: (id: string) => `${PATHS.STORY.BASE}/${id}`,
    WRITE: `/stories/new`,
    EDIT: (id: string) => `${PATHS.STORY.BASE}/${id}/edit`,
  },
  USERS: {
    BASE: '/users',
    STORY: (id: string) => `${PATHS.USERS.BASE}/${id}`,
  },
} as const;
