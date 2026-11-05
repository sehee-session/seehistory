import { data, Link, useLocation } from 'react-router';
import { Terminal } from '~/shared/ui/terminal';
import { Header } from '~/widgets/header';
import * as styles from './not-found.css';

export const loader = () => data(null, { status: 404 });

const Page = () => {
  const location = useLocation();

  return (
    <main className={styles.root}>
      <Header text="404 Not Found" />
      <div className={styles.content}>
        <Terminal
          lines={[
            {
              text: `find url ${location.pathname}${location.search}${location.hash}`,
              type: 'command',
            },
            {
              text: '✕ heestory: resource not found',
              type: 'error',
            },
            { text: '', type: 'command' },
          ]}
        />
        <section className={styles.message}>
          <span className={styles.code}>ERROR 404</span>
          <h1 className={styles.heading}>This page doesn't exist.</h1>
          <p className={styles.description}>
            Maybe it's lost, moved, or never written. Let's get you back on
            track.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.homeButton}>
              ~/ Back to Home
            </Link>

            <Link to="/stories" className={styles.storiesButton}>
              Explore Stories <span>→</span>
            </Link>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <span>404_PAGE_NOT_FOUND</span>
        <span>KEEP BUILDING. KEEP SHARING.</span>
      </footer>
    </main>
  );
};

export default Page;
