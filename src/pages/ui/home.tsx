import { PATHS } from '~/shared/constants';
import { Button, Terminal } from '~/shared/ui';
import { Header } from '~/widgets/header';
import { Intro } from '~/widgets/intro';
import * as styles from './home.css';

export const meta = () => [
  { title: 'Seehistory' },
  {
    name: 'description',
    content: 'Write and Share Your development history.',
  },
];

const Page = () => {
  return (
    <>
      <Header text="" />

      <section className={styles.hero}>
        <Terminal
          lines={[
            {
              text: 'Write and Share your development history.',
              type: 'command',
            },
            {
              text: 'Your ideas, experiences, and discoveries deserve a place of their own.',
              type: 'output',
              typo: true,
            },
          ]}
        />
        <div className={styles.actions}>
          <Button variant="primary">Get started →</Button>
          <Button variant="secondary" to={PATHS.STORY.BASE}>
            Explore stories →
          </Button>
        </div>
      </section>
      <Intro />
    </>
  );
};

export default Page;
