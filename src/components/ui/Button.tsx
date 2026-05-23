import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';

import styles from './Button.module.css';

type Variant = 'primary' | 'secondary';
type Size = 'medium' | 'large';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: 'button';
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'medium', children, className, ...rest } = props as
    & CommonProps
    & { className?: string; as?: 'button' | 'a' };

  const classes = [
    styles.btn,
    styles[variant],
    size === 'large' && styles.large,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ((rest as { as?: string }).as === 'a') {
    const { as: _as, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      as: 'a';
    };
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
