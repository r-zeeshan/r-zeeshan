import type { ReactNode } from 'react';

/** A ruled row: the section label sits in the left column, the prose in the right. */
export default function EditorialRow({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: ReactNode;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="rule-top py-9 md:py-12 grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-12"
    >
      <h2 id={headingId} className="t-h3 lg:pt-1">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}
