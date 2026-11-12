import { useForm } from '@tanstack/react-form';
import { EyeIcon, PencilLineIcon, SaveIcon } from 'lucide-react';
import { formatDate, StoryForm } from '~/entities/story';
import { useToggle } from '~/shared/hooks';
import { Button, MarkdownToc, MarkdownViewer } from '~/shared/ui';
import { Header } from '~/widgets/header';

export const meta = [
  { title: `Create Story` },
  {
    name: 'description',
    content: `Write your Development Story.`,
  },
];

const Page = () => {
  const [preview, onTogglePreview] = useToggle();
  const form = useForm({
    defaultValues: { title: '', content: '' },
  });

  return (
    <>
      <Header
        text={preview ? 'preview' : 'compose'}
        actions={[
          <Button title="preview" variant="icon" onClick={onTogglePreview}>
            {preview ? <PencilLineIcon /> : <EyeIcon />}
          </Button>,
          <Button title="save" variant="icon">
            <SaveIcon />
          </Button>,
        ]}
      />
      {preview ? (
        <>
          <h1>{form.state.values.title}</h1>
          <time dateTime={new Date().toLocaleDateString()}>
            {formatDate(new Date().toLocaleDateString())}
          </time>
          <MarkdownViewer content={form.state.values.content} />
          <MarkdownToc content={form.state.values.content} />
        </>
      ) : (
        <StoryForm form={form} />
      )}
    </>
  );
};

export default Page;
