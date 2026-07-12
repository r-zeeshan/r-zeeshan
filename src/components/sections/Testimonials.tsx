import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { quotes } from '@/lib/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="In their words" title="What founders" accent="say about the work" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 flex flex-col"
            >
              <p className="font-display text-base italic text-[var(--ink)] leading-relaxed flex-1">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="text-sm text-[var(--muted)] mt-4">
                <span className="font-semibold text-[var(--ink)]">{q.author}</span> &middot; {q.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
