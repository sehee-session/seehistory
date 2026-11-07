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
      <MarkdownViewer {...story} />
    </main>
  );
};

export default Page;
