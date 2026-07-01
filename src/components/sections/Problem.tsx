import { motion } from 'framer-motion';

const pains = [
  'Builds that break in front of real users.',
  'Devs who go quiet the moment it gets hard.',
  'No way to tell if the code is any good.',
  'The fear of getting burned a second time.',
];

export default function Problem() {
  return (
    <section className="px-5 py-20 md:py-24 section-alt border-y border-[var(--line)]">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Sound familiar?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="heading-brutal heading-lg mt-4"
        >
          You shipped something. Now you&apos;re <span className="accent-italic">stuck</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lead mt-6"
        >
          You validated your idea. Maybe with a vibe-coded MVP, maybe with a cheap dev. Now it&apos;s
          breaking, or it can&apos;t go further, and you need someone who&apos;s actually shipped
          production to take it the rest of the way.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-10">
          {pains.map((pain, i) => (
            <motion.div
              key={pain}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="flex items-start gap-3"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--coral)] shrink-0" />
              <p className="text-[var(--warm-gray)]">{pain}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
