import { Header } from '~/widgets/header';

export const meta = [
  { title: `Create Story` },
  {
    name: 'description',
    content: `Write your Development Story.`,
  },
];

const Page = () => {
  return (
    <main>
      <Header text="compose" />
    </main>
  );
};

export default Page;
