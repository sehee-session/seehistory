import { formatDate } from '~/entities/story';
import { UserInfo } from '~/entities/user';
import { MarkdownViewer } from '~/shared/ui/md-viewer';
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
    <main>
      <Header text="stories" />
      <UserInfo {...user} />
      <h1>{story.title}</h1>
      <time dateTime={story.createdAt}>{formatDate(story.createdAt)}</time>
      <MarkdownViewer {...story} />
    </main>
  );
};

export default Page;
