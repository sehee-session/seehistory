import type { Story } from '~/entities/story';
import type { User } from '~/entities/user';

export type StoryWithAuthor = Story & {
  author: Pick<User, 'name' | 'nickname' | 'avatarUrl'>;
};

export const stories: StoryWithAuthor[] = [
  {
    id: '1',
    thumbnailUrl: 'https://picsum.photos/seed/react2/600/400',
    title: 'Understanding React Server Components',
    summary:
      'A deep dive into React Server Components and how they change the way we build applications.',
    createdAt: '2026-11-02T10:00:00.000Z',
    author: {
      name: 'John Developer',
      avatarUrl: null,
      nickname: 'John',
    },
  },
  {
    id: '2',
    thumbnailUrl: 'https://picsum.photos/seed/react2/600/400',
    title: 'Mastering TypeScript Utility Types',
    summary:
      'Learn how to leverage advanced TypeScript utility types to write more robust and maintainable code.',
    createdAt: '2026-11-01T14:30:00.000Z',
    author: {
      name: 'Jane Smith',
      avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
      nickname: 'Jane',
    },
  },
  {
    id: '3',
    thumbnailUrl: 'https://picsum.photos/seed/react3/600/400',
    title: 'Tailwind CSS v4: What is New?',
    summary:
      'Explore the latest performance improvements and configuration changes in Tailwind CSS v4.',
    createdAt: '2026-10-28T09:15:00.000Z',
    author: {
      name: 'Alex Johnson',
      avatarUrl: null,
      nickname: 'Alex',
    },
  },
  {
    id: '4',
    thumbnailUrl: null,
    title: 'Building Custom Hooks for Form Management',
    summary:
      'A practical guide to creating reusable and clean custom React hooks for complex form states.',
    createdAt: '2026-10-25T16:45:00.000Z',
    author: {
      name: 'Emily Davis',
      avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
      nickname: 'Emily',
    },
  },
  {
    id: '5',
    thumbnailUrl: 'https://picsum.photos/seed/react5/600/400',
    title: 'State Management in 2026: Zustand vs Redux',
    summary:
      'Comparing modern state management solutions to find the best fit for your next large-scale project.',
    createdAt: '2026-10-20T11:20:00.000Z',
    author: {
      name: 'Michael Brown',
      avatarUrl: null,
      nickname: 'Michael',
    },
  },
];
