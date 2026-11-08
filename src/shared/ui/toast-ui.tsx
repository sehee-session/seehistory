import {
  CheckCircle2Icon,
  CircleAlertIcon,
  InfoIcon,
  LoaderCircleIcon,
  TriangleAlertIcon,
  XIcon,
} from 'lucide-react';
import { useSyncExternalStore } from 'react';
import {
  getSnapshot,
  removeToast,
  subscribe,
  type ToastItem as ToastItemType,
  type ToastType,
} from '../lib/toast-store';
import * as styles from './toast-ui.css';

type ToastIconProps = {
  type: ToastType;
};

type ToastItemProps = {
  toast: ToastItemType;
};

export const ToastProvider = () => {
  const toasts = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return (
    <div className={styles.viewport}>
      {toasts.reverse().map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

const ToastItem = ({ toast }: ToastItemProps) => {
  const { id, type, message, description } = toast;

  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      className={styles.toast}
      data-type={type}
      data-state={toast.visible ? 'open' : 'closing'}
    >
      <ToastIcon type={type} />

      <div className={styles.content}>
        <div className={styles.message}>{message}</div>

        {description && <div className={styles.description}>{description}</div>}
      </div>

      <button
        type="button"
        className={styles.closeButton}
        aria-label="토스트 닫기"
        onClick={() => removeToast(id)}
      >
        <XIcon size={16} />
      </button>
    </div>
  );
};

const ToastIcon = ({ type }: ToastIconProps) => {
  const iconProps = {
    size: 16,
    strokeWidth: 2,
    'aria-hidden': true as const,
  };

  switch (type) {
    case 'info':
      return <InfoIcon {...iconProps} />;

    case 'success':
      return <CheckCircle2Icon {...iconProps} />;

    case 'error':
      return <CircleAlertIcon {...iconProps} />;

    case 'warning':
      return <TriangleAlertIcon {...iconProps} />;

    case 'loading':
      return <LoaderCircleIcon {...iconProps} className={styles.spinner} />;

    default:
      return null;
  }
};
