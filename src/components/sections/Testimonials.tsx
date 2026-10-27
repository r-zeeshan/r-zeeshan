import Quote from '@/components/Quote';
import { quotes } from '@/lib/testimonials';

// The review that speaks to the work shown above, in full and word for word.
// Tess Bartoli's full review stays on the CuePilates case study and in src/lib/testimonials.ts.
const SHOWN = 'Aaron Phillips';

export default function Testimonials() {
  const q = quotes.find((x) => x.author === SHOWN);
  if (!q) return null;
  return (
    <div id="testimonials" className="min-w-0">
      <Quote q={q} />
    </div>
  );
}
