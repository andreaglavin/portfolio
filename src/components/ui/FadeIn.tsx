import { type ElementType, type ReactNode } from 'react';

import { useFadeIn } from '@/hooks/useFadeIn';

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
};

/**
 * Reveals children with a fade-up transition once they enter the viewport.
 * Pair with the global `.fade-in` styles defined in `design-system/animations.css`.
 */
export function FadeIn({ children, as: Tag = 'div', delay = 0, className }: FadeInProps) {
  const ref = useFadeIn<HTMLElement>();

  const classes = [
    'fade-in',
    delay > 0 && `fade-in-delay-${delay}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
