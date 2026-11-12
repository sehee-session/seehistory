import { PencilLineIcon } from 'lucide-react';
import { formatDate } from '~/entities/story';
import { UserInfo } from '~/entities/user';
import { PATHS } from '~/shared/constants';
import { Button, MarkdownToc, MarkdownViewer } from '~/shared/ui';
import { Header } from '~/widgets/header';
import { story } from '../lib/mock.story';
import { user } from '../lib/mock.user';
import * as styles from './story.css';

export const meta = () => [
  { title: '' },
  {
    name: 'description',
    content: 'Explore developer stories and experiences.',
  },
];

const Page = () => {
  return (
    <>
      <Header
        text="stories"
        actions={[
          <Button variant="icon" key="write" to={PATHS.STORY.WRITE}>
            <PencilLineIcon />
          </Button>,
        ]}
      />
      <div className={styles.thumbnail}>
        {story.thumbnailUrl ? (
          <img
            className={styles.thumbnailImage}
            src={story.thumbnailUrl}
            alt=""
          />
        ) : (
          <span>~/story</span>
        )}
      </div>
      <h1>{story.title}</h1>
      <time dateTime={story.createdAt}>{formatDate(story.createdAt)}</time>
      <MarkdownViewer {...story} />
      <MarkdownToc {...story} />
      <UserInfo {...user} />
    </>
  );
};

export default Page;
