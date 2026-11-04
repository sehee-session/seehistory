import { StoryCard } from '~/entities/story';
import { Header } from '~/widgets/header';
import { stories } from '../lib/mock.stories';
import type { Route } from './+types/user';
import * as styles from './user.css';

export const meta = ({ params }: Route.MetaArgs) => [
  { title: `Users | ${params.nickname}'s history` },
  {
    name: 'description',
    content: `Explore ${params.nickname}'s developer stories and experiences.`,
  },
];

const Page = ({ params }: Route.ComponentProps) => {
  const { nickname } = params;

  return (
    <main>
      <Header text={`users/${nickname}`} />
      <h4>Stories</h4>
      <div className={styles.list}>
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </main>
  );
};

export default Page;
