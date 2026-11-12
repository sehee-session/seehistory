import { EyeIcon, PencilLineIcon } from 'lucide-react';
import { StoryForm } from '~/entities/story';
import { Button } from '~/shared/ui';
import { Header } from '~/widgets/header';

export const meta = [
  { title: `Create Story` },
  {
    name: 'description',
    content: `Write your Development Story.`,
  },
];

const Page = () => (
  <>
    <Header
      text="compose"
      actions={[
        <Button title="preview" variant="icon">
          <EyeIcon />
        </Button>,
        <Button title="save" variant="icon">
          <PencilLineIcon />
        </Button>,
      ]}
    />
    <StoryForm />
  </>
);

export default Page;
