import { MarkdownViewer } from '~/shared/ui/md-viewer';
import { Header } from '~/widgets/header';
import { story } from '../lib/mock.story';

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
      <MarkdownViewer {...story} />
    </main>
  );
};

export default Page;
