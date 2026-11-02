import { Tabs } from '@base-ui/react/tabs';
import { useSearchParams } from 'react-router';
import { StoryCard } from '~/entities/story';
import { Header } from '~/widgets/header';
import { stories } from '../lib/mock.stories';
import * as styles from './stories.css';

export const meta = () => [
  { title: 'Stories | Seehistory' },
  {
    name: 'description',
    content: 'Explore developer stories and experiences.',
  },
];

const TAB = {
  TRENDING: 'trending',
  LATEST: 'latest',
} as const;

const tabs = [
  { label: 'Trending', value: TAB.TRENDING },
  { label: 'Latest', value: TAB.LATEST },
];

const Page = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sort');
  const activeTab = sort === TAB.LATEST ? TAB.LATEST : TAB.TRENDING;

  const handleTabChange = (value: string | number) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);

      if (value === TAB.LATEST) {
        next.set('sort', TAB.LATEST);
      } else {
        next.delete('sort');
      }

      return next;
    });
  };

  return (
    <main>
      <Header text="~/stories" />

      <Tabs.Root
        className={styles.root}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <Tabs.List className={styles.list}>
          {tabs.map(({ label, value }) => (
            <Tabs.Tab key={value} className={styles.tab} value={value}>
              {label}
            </Tabs.Tab>
          ))}
          <Tabs.Indicator className={styles.indicator} />
        </Tabs.List>
        <Tabs.Panel className={styles.panel} value={TAB.TRENDING}>
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </Tabs.Panel>
        <Tabs.Panel className={styles.panel} value={TAB.LATEST}>
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </Tabs.Panel>
      </Tabs.Root>
    </main>
  );
};

export default Page;
