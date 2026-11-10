export const PATHS = {
  HOME: '/',
  STORY: {
    BASE: '/stories',
    DETAIL: (id: string) => `${PATHS.STORY.BASE}/${id}`,
    NEW: `/stories/new`,
  },
};
