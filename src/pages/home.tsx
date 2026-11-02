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

const Page = () => (
  <main>
    <Header text="~/" />

    <section className={styles.hero}>
      <Terminal text="Write and Share your development history." />
      <p className={styles.description}>
        Your ideas, experiences, and discoveries deserve a place of their own.
      </p>
      <div className={styles.actions}>
        <Button variant="primary">Get started →</Button>
        <Button variant="secondary">Explore stories</Button>
      </div>
    </section>
    <Intro />
  </main>
);

export default Page;
