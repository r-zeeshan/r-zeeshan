import type { Quote as QuoteData } from '@/lib/testimonials';
import { Card } from '@/components/blueprint';

/**
 * A real client review in a ruled card. `short` uses the excerpt, where every cut is shown
 * with an ellipsis; otherwise the full review is shown as written.
 */
export default function Quote({ q, short = false }: { q: QuoteData; short?: boolean }) {
  const text = short && q.excerpt ? q.excerpt : q.text;
  return (
    <Card as="figure" padding="lg" className="flex flex-col gap-[18px]">
      <blockquote className="text-[18px] leading-[1.6]">
        <p>&ldquo;{text}&rdquo;</p>
      </blockquote>
      <figcaption className="text-[15px] text-ink-2">
        <b className="font-semibold text-ink">{q.author}</b> · {q.role}
      </figcaption>
    </Card>
  );
}
