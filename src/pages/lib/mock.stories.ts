import type { Story } from '~/entities/story';
import type { User } from '~/entities/user';

export type StoryWithAuthor = Omit<Story, 'content'> & {
  author: Pick<User, 'id' | 'name' | 'nickname' | 'avatarUrl'>;
};

export const stories: StoryWithAuthor[] = [
  {
    id: '1',
    thumbnailUrl: 'https://picsum.dev/600/400',
    title: 'Understanding React Server Components',
    summary:
      'A deep dive into React Server Components and how they change the way we build applications.',
    createdAt: '2026-11-02T10:00:00.000Z',
    author: {
      id: '1',
      name: 'John Developer',
      avatarUrl: null,
      nickname: 'John',
    },
  },
  {
    id: '2',
    thumbnailUrl: 'https://picsum.dev/600/400',
    title: 'Mastering TypeScript Utility Types',
    summary:
      'Learn how to leverage advanced TypeScript utility types to write more robust and maintainable code.',
    createdAt: '2026-11-01T14:30:00.000Z',
    author: {
      id: '2',
      name: 'Jane Smith',
      avatarUrl: 'https://picsum.dev/100/100',
      nickname: 'Jane',
    },
  },
  {
    id: '3',
    thumbnailUrl: 'https://picsum.dev/600/400',
    title: 'Tailwind CSS v4: What is New?',
    summary:
      'Explore the latest performance improvements and configuration changes in Tailwind CSS v4.',
    createdAt: '2026-10-28T09:15:00.000Z',
    author: {
      id: '3',
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
      id: '4',
      name: 'Emily Davis',
      avatarUrl: 'https://picsum.dev/100/100',
      nickname: 'Emily',
    },
  },
  {
    id: '5',
    thumbnailUrl: 'https://picsum.dev/600/400',
    title: 'State Management in 2026: Zustand vs Redux',
    summary:
      'Comparing modern state management solutions to find the best fit for your next large-scale project.',
    createdAt: '2026-10-20T11:20:00.000Z',
    author: {
      id: '5',
      name: 'Michael Brown',
      avatarUrl: null,
      nickname: 'Michael',
    },
  },
];
