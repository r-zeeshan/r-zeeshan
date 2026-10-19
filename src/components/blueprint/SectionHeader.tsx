import type { ReactNode } from 'react';
import Note from './Note';

/** A 2px ink top rule, then a mono number and the h2 on one baseline, with an optional Caveat aside. */
export default function SectionHeader({
  number,
  id,
  note,
  children,
}: {
  number: string;
  id?: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t-2 border-ink pt-5">
      <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
        <span className="mono-label shrink-0">{number}</span>
        <h2 id={id} className="t-h2">
          {children}
        </h2>
      </div>
      {note && <Note size={22}>{note}</Note>}
    </div>
  );
}
