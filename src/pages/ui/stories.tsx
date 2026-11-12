import { Tabs } from '@base-ui/react/tabs';
import { PencilLineIcon, RssIcon } from 'lucide-react';
import { StoryCard } from '~/entities/story';
import { UserAuthor } from '~/entities/user';
import { PATHS } from '~/shared/constants';
import { Button } from '~/shared/ui';
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
  LATEST: 'latest',
} as const;

const tabs = [{ label: 'Latest', value: TAB.LATEST, Icon: RssIcon }];

const Page = () => {
  return (
    <main>
      <Header
        text="stories"
        actions={[
          <Button key="write" variant="icon" to={PATHS.STORY.WRITE}>
            <PencilLineIcon />
          </Button>,
        ]}
      />
      <Tabs.Root className={styles.root} value={TAB.LATEST}>
        <Tabs.List className={styles.list}>
          {tabs.map(({ label, value, Icon }) => (
            <Tabs.Tab key={value} className={styles.tab} value={value}>
              {<Icon size={16} />} {label}
            </Tabs.Tab>
          ))}
          <Tabs.Indicator className={styles.indicator} />
        </Tabs.List>
        <Tabs.Panel className={styles.panel} value={TAB.LATEST}>
          {stories.map((story) => (
            <article key={story.id} className={styles.panelItem}>
              <UserAuthor {...story.author} />
              <StoryCard {...story} />
            </article>
          ))}
        </Tabs.Panel>
      </Tabs.Root>
    </main>
  );
};

export default Page;
