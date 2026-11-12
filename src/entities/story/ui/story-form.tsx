import { useForm } from '@tanstack/react-form';
import React from 'react';
import { Input, MarkdownHelper, TextArea } from '~/shared/ui';
import * as styles from './story-form.css';

export const StoryForm = () => {
  const form = useForm({
    defaultValues: { title: '', content: '' },
  });
  const ref = React.useRef<HTMLTextAreaElement>(null);

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
            <MarkdownHelper
              textareaRef={ref}
              onChangeTextarea={field.handleChange}
            />
            <TextArea
              ref={ref}
              rows={15}
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
