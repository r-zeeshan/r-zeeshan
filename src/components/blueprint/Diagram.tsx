import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Size = 'sm' | 'md';

/** Joins two nodes. The glyph is `to` (→), `both` (↔) or `plus` (+). Stacked on mobile it points down. */
export type Join = 'to' | 'both' | 'plus';

const glyph: Record<Join, { row: string; stacked: string }> = {
  to: { row: '→', stacked: '↓' },
  both: { row: '↔', stacked: '↕' },
  plus: { row: '+', stacked: '+' },
};

interface NodeProps {
  children: ReactNode;
  /** The AI part of the system: dashed, in the note colour. At most one per diagram. */
  ai?: boolean;
  /** Something that went wrong: solid, in the note colour. */
  alert?: boolean;
  /** Mono sub-label under the label. */
  sub?: string;
  size?: Size;
  /** Position in the hero entrance. Omit for no animation. */
  enter?: number;
  className?: string;
}

/** A box in a system diagram. Solid by default; dashed when it is the AI. */
export function DiagramNode({ children, ai, alert, sub, size = 'md', enter, className }: NodeProps) {
  const style = enter === undefined ? undefined : ({ ['--i' as string]: enter } as CSSProperties);
  return (
    <div
      style={style}
      className={cn(
        'max-w-full font-semibold leading-snug',
        size === 'md' ? 'border-2 px-4 py-3 text-[15px]' : 'border-[1.5px] px-2.5 py-1.5 text-[13px]',
        ai
          ? 'border-dashed border-note bg-note-bg text-ink'
          : alert
            ? 'border-note bg-surface text-note'
            : 'border-ink bg-surface text-ink',
        ai && size === 'sm' && 'text-note',
        enter !== undefined && 'enter-node',
        className,
      )}
    >
      {children}
      {sub && (
        <span className={cn('block font-mono font-normal text-ink-2', size === 'md' ? 'mt-0.5 text-[12px]' : 'text-[11px]')}>
          {sub}
        </span>
      )}
    </div>
  );
}

/** A text-glyph arrow between nodes. Decorative, so hidden from assistive tech. */
export function DiagramArrow({ kind = 'to', size = 'md', enter }: { kind?: Join; size?: Size; enter?: number }) {
  const style = enter === undefined ? undefined : ({ ['--i' as string]: enter } as CSSProperties);
  return (
    <span
      aria-hidden="true"
      style={style}
      className={cn('leading-none text-ink', size === 'md' ? 'text-[22px]' : 'text-[16px]', enter !== undefined && 'enter-node')}
    >
      <span className="hidden sm:inline">{glyph[kind].row}</span>
      <span className="sm:hidden">{glyph[kind].stacked}</span>
    </span>
  );
}

/**
 * A flex-wrap row of nodes and arrows. Below 640px it stacks vertically and the arrows
 * turn to point down, so a diagram never overflows a phone.
 */
export function Diagram({ children, size = 'md', className }: { children: ReactNode; size?: Size; className?: string }) {
  return (
    <div
      className={cn(
        'flex min-w-0 flex-col items-start sm:flex-row sm:flex-wrap sm:items-center',
        size === 'md' ? 'gap-3' : 'gap-2',
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * An arrow bound to the node that follows it, so a wrapped row never ends on a dangling arrow.
 * Stacked on mobile it is the same column of arrow then node.
 */
export function DiagramStep({ children, size = 'md' }: { children: ReactNode; size?: Size }) {
  return (
    <div className={cn('flex min-w-0 flex-col items-start sm:flex-row sm:items-center', size === 'md' ? 'gap-3' : 'gap-2')}>
      {children}
    </div>
  );
}
