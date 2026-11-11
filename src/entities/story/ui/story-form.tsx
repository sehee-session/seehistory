import { useForm } from '@tanstack/react-form';
import { Input } from '~/shared/ui';
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
