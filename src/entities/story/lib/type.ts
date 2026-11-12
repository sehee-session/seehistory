import type {
  FormAsyncValidateOrFn,
  FormValidateOrFn,
  ReactFormExtendedApi,
} from '@tanstack/react-form';

type StoryFormValues = { title: string; content: string };

type StoryValidator = FormValidateOrFn<StoryFormValues> | undefined;
type StoryAsyncValidator = FormAsyncValidateOrFn<StoryFormValues> | undefined;

export type StoryFormApi = ReactFormExtendedApi<
  StoryFormValues,
  StoryValidator,
  StoryValidator,
  StoryAsyncValidator,
  StoryValidator,
  StoryAsyncValidator,
  StoryValidator,
  StoryAsyncValidator,
  StoryValidator,
  StoryAsyncValidator,
  StoryAsyncValidator,
  unknown
>;
