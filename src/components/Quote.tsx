import type { Quote as QuoteData } from '@/lib/testimonials';
import { Card } from '@/components/blueprint';

/** A real client review in a ruled card, shown in full as written. */
export default function Quote({ q }: { q: QuoteData }) {
  return (
    <Card as="figure" padding="lg" className="flex flex-col gap-[18px]">
      <blockquote className="text-[18px] leading-[1.6]">
        <p>&ldquo;{q.text}&rdquo;</p>
      </blockquote>
      <figcaption className="text-[15px] text-ink-2">
        <b className="font-semibold text-ink">{q.author}</b> · {q.role}
      </figcaption>
    </Card>
  );
}
