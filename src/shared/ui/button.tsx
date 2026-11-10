import { Button as BaseButton } from '@base-ui/react/button';
import type { ComponentProps } from 'react';
import { Link } from 'react-router';
import { buttonVariants } from './button.css';

type ButtonVariant = keyof typeof buttonVariants;

type ButtonProps = Omit<
  ComponentProps<typeof BaseButton>,
  'className' | 'render'
> & {
  variant?: ButtonVariant;
  className?: string;
  to?: ComponentProps<typeof Link>['to'];
};

export const Button = ({
  variant = 'primary',
  className,
  to,
  ...props
}: ButtonProps) => {
  const mergedClassName = [buttonVariants[variant], className]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <BaseButton
        {...props}
        render={<Link to={to} />}
        nativeButton={false}
        className={mergedClassName}
      />
    );
  }

  return <BaseButton {...props} className={mergedClassName} />;
};
