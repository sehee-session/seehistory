import { useForm } from '@tanstack/react-form';
import { Input, TextArea } from '~/shared/ui';
import * as styles from './story-form.css';

export const StoryForm = () => {
  const form = useForm({
    defaultValues: { title: '', content: '' },
  });

  return (
    <form className={styles.form}>
      <form.Field
        name="title"
        children={(field) => (
          <label htmlFor={field.name}>
            <Input
              placeholder="Title"
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
          </label>
        )}
      />
      <form.Field
        name="content"
        children={(field) => (
          <label htmlFor={field.name}>
            <TextArea
              rows={10}
              placeholder="Tell your story..."
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
          </label>
        )}
      />
    </form>
  );
};
