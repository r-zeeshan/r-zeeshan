import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { SPRINT_PRICE } from '@/lib/site';

const steps = [
  {
    n: '01',
    title: 'A free discovery call',
    desc: 'You leave with a one-page plan: what to build, the core feature, the timeline, and the price. No pressure, no jargon.',
  },
  {
    n: '02',
    title: 'A working prototype in 2 weeks',
    desc: `Your core feature, live on a link you can use yourself. This is the ${SPRINT_PRICE} sprint, and it's guaranteed.`,
  },
  {
    n: '03',
    title: 'The full build, in phases',
    desc: 'Production, shipped in stages. You approve and pay for each phase only after you see it working.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-5 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="How it works" title="Three steps." accent="No guesswork." />

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[var(--sage-soft)]" />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[var(--white)] border border-[var(--line)] flex items-center justify-center font-display text-lg font-semibold text-[var(--sage-deep)]">
                  {s.n}
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--ink)] mt-5">{s.title}</h3>
                <p className="text-[var(--warm-gray)] mt-2 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
