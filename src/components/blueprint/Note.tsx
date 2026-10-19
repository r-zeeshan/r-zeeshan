import type { CSSProperties, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * The Caveat annotation. Short (about 8 words), never body copy, never a button.
 * `tone="band"` is for the dark contact band.
 */
export default function Note({
  children,
  as: Tag = 'span',
  size = 22,
  tone = 'paper',
  enter,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  /** Font size in px. */
  size?: number;
  tone?: 'paper' | 'band' | 'muted';
  /** Position in the hero entrance. Omit for no animation. */
  enter?: number;
  className?: string;
}) {
  return (
    <Tag
      style={{ fontSize: size, ...(enter === undefined ? null : ({ ['--i' as string]: enter } as CSSProperties)) }}
      className={cn(
        'note',
        tone === 'band' && 'text-note-band',
        tone === 'muted' && 'text-muted',
        enter !== undefined && 'enter-node',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
