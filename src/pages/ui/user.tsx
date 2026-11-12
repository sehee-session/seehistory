import { PencilLineIcon } from 'lucide-react';
import { StoryCard } from '~/entities/story';
import { UserInfo } from '~/entities/user';
import { PATHS } from '~/shared/constants';
import { Button } from '~/shared/ui';
import { Header } from '~/widgets/header';
import { stories } from '../lib/mock.stories';
import { user } from '../lib/mock.user';
import type { Route } from './+types/user';
import * as styles from './user.css';

export const meta = ({ params }: Route.MetaArgs) => [
  { title: `${params.id}'s history` },
  {
    name: 'description',
    content: `Explore ${params.id}'s developer stories and experiences.`,
  },
];

const Page = ({ params }: Route.ComponentProps) => {
  const { id } = params;

  return (
    <>
      <Header
        text={`${id}`}
        actions={[
          <Button key="write" variant="icon" to={PATHS.STORY.WRITE}>
            <PencilLineIcon />
          </Button>,
        ]}
      />
      <UserInfo {...user} />
      <div className={styles.list}>
        {stories.map((story) => (
          <article key={story.id} className={styles.listItem}>
            <StoryCard {...story} />
          </article>
        ))}
      </div>
    </>
  );
};

export default Page;
