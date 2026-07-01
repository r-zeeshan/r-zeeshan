import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SPRINT_PRICE } from '@/lib/site';

const faqs = [
  {
    q: 'Is my existing codebase salvageable?',
    a: "Usually, yes. We'll review it for free and give you a straight verdict: what's worth keeping, what needs to go, and what it'll take to get it production-ready. No sales pitch, just the honest read.",
  },
  {
    q: 'What about HIPAA and compliance?',
    a: "We build with secure, encrypted data handling from the start. We won't claim HIPAA certification, that's not something a developer hands you. Where you need a compliance specialist, we'll tell you honestly so you bring the right person in.",
  },
  {
    q: 'What does it cost?',
    a: `The 2-week prototype sprint is a fixed ${SPRINT_PRICE}, and it credits toward your full build. The full build is scoped on the call, in phases, so you only commit to what you can see working. No surprise invoices.`,
  },
  {
    q: "What if I'm not sure exactly what to build?",
    a: "That's what the discovery call is for. We figure out the core feature together, and you leave with a one-page plan whether or not you work with us.",
  },
  {
    q: 'Will I be locked into you?',
    a: 'No. You get clean code, full docs, and a full handover. Anyone can pick it up later. The work is yours.',
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="card overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left p-6"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-[var(--ink)]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[var(--sage-deep)] shrink-0"
        >
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[var(--warm-gray)] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Questions" title="The honest" accent="answers" align="center" />
        <div className="space-y-4 mt-12">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
