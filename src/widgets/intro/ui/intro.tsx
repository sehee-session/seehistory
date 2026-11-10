import {
  BookOpenIcon,
  FileCodeIcon,
  Share2Icon,
  TrendingUpIcon,
} from 'lucide-react';
import { Card } from '~/shared/ui';
import * as styles from './intro.css';

const features = [
  {
    icon: BookOpenIcon,
    title: 'Document Your Journey',
    description: 'Capture what you learn and the experiences you gain.',
  },
  {
    icon: FileCodeIcon,
    title: 'Write with Markdown',
    description:
      'Create beautiful stories with Markdown, code blocks, and more.',
  },
  {
    icon: Share2Icon,
    title: 'Share Your Knowledge',
    description: 'Share your development journey with the community.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Grow Together',
    description: 'Track your progress and grow with every experience.',
  },
];

export const Intro = () => (
  <section className={styles.container}>
    <ul className={styles.featureList}>
      <div className={styles.heading}>
        <h2>Every Developer Has a Story.</h2>
        <p>Document your journey, share what you learn, and grow together.</p>
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
