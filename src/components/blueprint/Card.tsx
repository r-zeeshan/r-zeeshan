import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@/lib/utils';

type CardProps<T extends ElementType> = {
  as?: T;
  /** Adds the link affordance: the card title underlines on hover. */
  interactive?: boolean;
  padding?: 'md' | 'lg';
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

/** A white surface with rounded corners and a soft shadow. */
export default function Card<T extends ElementType = 'div'>({
  as,
  interactive,
  padding = 'md',
  className,
  ...rest
}: CardProps<T>) {
  const Tag: ElementType = as ?? 'div';
  return (
    <Tag
      className={cn(
        'block min-w-0 rounded-card bg-surface text-ink shadow-card',
        padding === 'md' ? 'p-6' : 'p-6 sm:p-7',
        interactive && 'group no-underline',
        className,
      )}
      {...rest}
    />
  );
}
