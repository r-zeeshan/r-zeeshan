import Quote from '@/components/Quote';
import { SectionHeader } from '@/components/blueprint';
import { quotes } from '@/lib/testimonials';

// The two reviews that speak to the work shown above, in full.
const SHOWN = ['Tess Bartoli', 'Aaron Phillips'];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="quotes-heading" className="mx-auto flex w-full max-w-wrap flex-col gap-8 px-6 pb-16 md:pb-[104px]">
      <SectionHeader number="04" id="quotes-heading" note="from Upwork reviews">
        What clients say
      </SectionHeader>
      <div className="grid items-start gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr))]">
        {quotes
          .filter((q) => SHOWN.includes(q.author))
          .map((q) => (
            <Quote key={q.author} q={q} />
          ))}
      </div>
    </section>
  );
}
