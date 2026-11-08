export type ToastType =
  'default' | 'info' | 'success' | 'error' | 'warning' | 'loading';

export type ToastItem = {
  id: string;
  type: ToastType;
  message: React.ReactNode;
  description?: React.ReactNode;
  duration?: number;
  visible: boolean;
};

let toasts: ToastItem[] = [];

const listeners = new Set<() => void>();
const timers = new Map<string, ReturnType<typeof setTimeout>>();
const removalTimers = new Map<string, ReturnType<typeof setTimeout>>();

export const subscribe = (listener: () => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const getSnapshot = () => toasts;

const emit = () => {
  listeners.forEach((listener) => listener());
};

const scheduleRemoval = (id: string, duration: number) => {
  const previousTimer = timers.get(id);

  if (previousTimer) {
    clearTimeout(previousTimer);
    timers.delete(id);
  }

  if (duration === Infinity) return;

  const timer = setTimeout(() => {
    timers.delete(id);
    removeToast(id);
  }, duration);

  timers.set(id, timer);
};

export const addToast = (toast: ToastItem) => {
  toasts = [{ ...toast, visible: true }, ...toasts].slice(0, 3);
  scheduleRemoval(toast.id, toast.duration ?? 4000);
  emit();
};

export const updateToast = (id: string, updates: Partial<ToastItem>) => {
  toasts = toasts.map((toast) =>
    toast.id === id ? { ...toast, ...updates, visible: true } : toast,
  );

  const updated = toasts.find((toast) => toast.id === id);

  if (updated) {
    scheduleRemoval(id, updated.duration ?? 3000);
  }

  emit();
};

export const removeToast = (id: string) => {
  const toast = toasts.find((item) => item.id === id);

  if (!toast || !toast.visible) return;

  const timer = timers.get(id);

  if (timer) {
    clearTimeout(timer);
    timers.delete(id);
  }

  toasts = toasts.map((item) =>
    item.id === id ? { ...item, visible: false } : item,
  );

  emit();

  const removalTimer = setTimeout(() => {
    toasts = toasts.filter((item) => item.id !== id);
    removalTimers.delete(id);
    emit();
  }, 180);

  removalTimers.set(id, removalTimer);
};

export const removeAllToasts = () => {
  timers.forEach(clearTimeout);
  removalTimers.forEach(clearTimeout);

  timers.clear();
  removalTimers.clear();

  toasts = [];
  emit();
};
