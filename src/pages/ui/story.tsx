import { PencilLineIcon } from 'lucide-react';
import { formatDate } from '~/entities/story';
import { UserInfo } from '~/entities/user';
import { Button, MarkdownToc, MarkdownViewer } from '~/shared/ui';
import { Header } from '~/widgets/header';
import { story } from '../lib/mock.story';
import { user } from '../lib/mock.user';

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
          <Button variant="icon">
            <PencilLineIcon />
          </Button>,
        ]}
      />
      <UserInfo {...user} />
      <h1>{story.title}</h1>
      <time dateTime={story.createdAt}>{formatDate(story.createdAt)}</time>
      <MarkdownViewer {...story} />
      <MarkdownToc {...story} />
    </>
  );
};

export default Page;
