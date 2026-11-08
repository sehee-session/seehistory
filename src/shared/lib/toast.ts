import {
  addToast,
  removeAllToasts,
  removeToast,
  updateToast,
  type ToastItem,
  type ToastType,
} from './toast-store';

type ToastOptions = {
  id?: string;
  description?: React.ReactNode;
  duration?: number;
};

let sequence = 0;

const createId = () => `toast-${++sequence}`;

const createToast = (
  type: ToastType,
  message: React.ReactNode,
  options: ToastOptions = {},
) => {
  const id = options.id ?? createId();

  const item: ToastItem = {
    id,
    type,
    message,
    description: options.description,
    duration: options.duration ?? (type === 'loading' ? Infinity : 4000),
    visible: true,
  };

  if (options.id) {
    updateToast(id, item);
  } else {
    addToast(item);
  }

  return id;
};

const toast = Object.assign(
  (message: React.ReactNode, options?: ToastOptions) =>
    createToast('default', message, options),
  {
    info: (message: React.ReactNode, options?: ToastOptions) =>
      createToast('info', message, options),

    success: (message: React.ReactNode, options?: ToastOptions) =>
      createToast('success', message, options),

    error: (message: React.ReactNode, options?: ToastOptions) =>
      createToast('error', message, options),

    warning: (message: React.ReactNode, options?: ToastOptions) =>
      createToast('warning', message, options),

    loading: (message: React.ReactNode, options?: ToastOptions) =>
      createToast('loading', message, options),

    dismiss: (id?: string) => {
      if (id) {
        removeToast(id);
      } else {
        removeAllToasts();
      }
    },
  },
);

export { toast };
