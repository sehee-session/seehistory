import { Button as BaseButton } from '@base-ui/react/button';
import type { ComponentProps } from 'react';
import { buttonVariants } from './button.css';

type ButtonVariant = keyof typeof buttonVariants;

type ButtonProps = Omit<ComponentProps<typeof BaseButton>, 'className'> & {
  variant?: ButtonVariant;
  className?: string;
};

export const Button = ({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={[buttonVariants[variant], className].filter(Boolean).join(' ')}
    />
  );
};
