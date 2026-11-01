import { Header, Terminal } from '/shared/ui';

export const meta = () => {
  return [
    { title: 'Seehistory' },
    { name: 'Write and Share Your development history' },
  ];
};

const Page = () => (
  <main>
    <Header text="~/" />
    <Terminal text="Write and Share your development history." />
  </main>
);

export default Page;
