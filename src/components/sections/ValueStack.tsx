import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const items = [
  {
    title: 'A production-grade product',
    desc: 'Auth, payments, security, and scale all handled. Not a demo that breaks the moment someone real touches it.',
  },
  {
    title: 'Weekly demos and daily updates',
    desc: "You're never in the dark about where things stand or what's next.",
  },
  {
    title: 'Clean code, full docs, full handover',
    desc: 'You own all of it. Anyone can pick it up later. You are never locked in.',
  },
  {
    title: '30 days of post-launch fixes',
    desc: 'After you go live, the first month of fixes is on us.',
  },
  {
    title: 'Secure, encrypted data handling',
    desc: 'Sensitive health and user data is handled carefully from day one.',
  },
];

export default function ValueStack() {
  return (
    <section className="px-5 py-24 md:py-32 section-alt border-y border-[var(--line)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="What you get" title="A real product." accent="Not a demo that breaks." />

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="card p-6 flex gap-4 items-start"
            >
              <span className="w-8 h-8 rounded-full bg-[var(--sage-wash)] text-[var(--sage-deep)] flex items-center justify-center shrink-0">
                <Check size={16} strokeWidth={2.5} />
              </span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="text-[var(--warm-gray)] mt-1.5 leading-relaxed text-[0.95rem]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
