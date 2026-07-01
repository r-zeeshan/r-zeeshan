import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import { SPRINT_PRICE } from '@/lib/site';

export default function Guarantee() {
  return (
    <section className="px-5 py-20 md:py-28 bg-[var(--sage-deep)] text-[var(--cream)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center"
        >
          <ShieldCheck size={30} strokeWidth={1.75} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="eyebrow !text-white/70 mt-6"
        >
          The guarantee
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-medium leading-tight mt-4"
        >
          A working prototype of your core feature in 2 weeks. Or you don&apos;t pay for that sprint.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg text-white/80 mt-6 max-w-2xl mx-auto"
        >
          The 2-week prototype sprint is fixed at {SPRINT_PRICE}, and it credits toward your full build.
          You see your core feature working on a real link before we go any further.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          <CTAButton variant="light" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
