import type { Quote as QuoteData } from '@/lib/testimonials';

/** A real client review, rendered quietly: a rule, the words, the attribution. */
export default function Quote({ q }: { q: QuoteData }) {
  return (
    <figure className="border-l-2 border-[var(--sage)] pl-6">
      <blockquote>
        <p className="font-display text-[1.1875rem] leading-[1.6] text-[var(--ink)] max-w-[40rem]">
          &ldquo;{q.text}&rdquo;
        </p>
      </blockquote>
      <figcaption className="meta mt-4">
        <span className="font-semibold text-[var(--ink)]">{q.author}</span>, {q.role}
      </figcaption>
    </figure>
  );
}
