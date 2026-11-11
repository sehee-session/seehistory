import { StoryForm } from '~/entities/story';
import { Header } from '~/widgets/header';

export const meta = [
  { title: `Create Story` },
  {
    name: 'description',
    content: `Write your Development Story.`,
  },
];

const Page = () => (
  <>
    <Header text="compose" />
    <StoryForm />
  </>
);

export default Page;
