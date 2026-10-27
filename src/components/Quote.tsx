import type { Quote as QuoteData } from '@/lib/testimonials';

/** A real client review on a recessed panel, shown in full as written. */
export default function Quote({ q }: { q: QuoteData }) {
  const paragraphs = q.text.split('\n\n');
  const initials = q.author
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
  return (
    <figure className="m-0 flex flex-col gap-5 rounded-card bg-sunk p-6 sm:p-8">
      <blockquote className="m-0 flex flex-col gap-4 text-[18px] leading-[1.6] sm:text-[21px] sm:leading-[1.55]">
        {paragraphs.map((para, i) => (
          <p key={i}>
            {i === 0 && <>&ldquo;</>}
            {para}
            {i === paragraphs.length - 1 && <>&rdquo;</>}
          </p>
        ))}
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-surface text-[15px] font-bold"
        >
          {initials}
        </span>
        <span className="flex flex-col text-[15px] leading-snug text-ink-2">
          <b className="font-semibold text-ink">{q.author}</b>
          {q.role}
        </span>
      </figcaption>
    </figure>
  );
}
