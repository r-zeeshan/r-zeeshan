import Quote from '@/components/Quote';
import { quotes } from '@/lib/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="quotes-heading" className="px-5 sm:px-8 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-20">
        <div>
          <h2 id="quotes-heading" className="t-h2 max-w-[12ch]">
            What clients say
          </h2>
          <p className="meta mt-4 max-w-[22rem]">Reviews from the clients on Upwork, quoted as written.</p>
        </div>
        <div className="space-y-12">
          {quotes.map((q) => (
            <Quote key={q.author} q={q} />
          ))}
        </div>
      </div>
    </section>
  );
}
