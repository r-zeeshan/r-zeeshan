import type { Quote as QuoteData } from '@/lib/testimonials';
import { Card } from '@/components/blueprint';

/** A real client review in a ruled card, shown in full as written. */
export default function Quote({ q }: { q: QuoteData }) {
  const paragraphs = q.text.split('\n\n');
  return (
    <Card as="figure" padding="lg" className="flex flex-col gap-[18px]">
      <blockquote className="flex flex-col gap-4 text-[18px] leading-[1.6]">
        {paragraphs.map((para, i) => (
          <p key={i}>
            {i === 0 && <>&ldquo;</>}
            {para}
            {i === paragraphs.length - 1 && <>&rdquo;</>}
          </p>
        ))}
      </blockquote>
      <figcaption className="text-[15px] text-ink-2">
        <b className="font-semibold text-ink">{q.author}</b> · {q.role}
      </figcaption>
    </Card>
  );
}
