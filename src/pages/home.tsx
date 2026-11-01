import { Button, Terminal } from '~/shared/ui';
import { Header } from '~/widgets/header';
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
        Every developer has a story. Document your journey, share what you've
        learned, and grow together.
      </p>

      <div className={styles.actions}>
        <Button variant="primary">Get started →</Button>
        <Button variant="secondary">Explore posts</Button>
      </div>
    </section>
  </main>
);

export default Page;
