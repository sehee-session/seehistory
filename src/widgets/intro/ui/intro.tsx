import { BookOpenIcon, Share2Icon, TrendingUpIcon } from 'lucide-react';
import { Card } from '~/shared/ui/card';
import * as styles from './intro.css';

const features = [
  {
    icon: BookOpenIcon,
    title: '기록하기',
    description: '개발하면서 배운 지식과 경험을 정리해요.',
  },
  {
    icon: Share2Icon,
    title: '공유하기',
    description: '나의 개발 이야기를 다른 사람과 나눠요.',
  },
  {
    icon: TrendingUpIcon,
    title: '성장하기',
    description: '기록을 쌓으며 성장 과정을 확인해요.',
  },
];

export const Intro = () => (
  <section className={styles.container}>
    <ul className={styles.featureList}>
      <div className={styles.heading}>
        <h2>개발자의 성장 과정을 기록하세요.</h2>
        <p>배운 것을 기록하고, 경험을 공유하며 함께 성장해 보세요.</p>
      </div>
      {features.map(({ icon: Icon, title, description }) => (
        <li key={title}>
          <Card className={styles.featureCard}>
            <Icon size={24} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  </section>
);
