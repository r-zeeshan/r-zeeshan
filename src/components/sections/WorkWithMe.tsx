import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';
import { AUXON_URL } from '@/lib/site';

export default function WorkWithMe() {
  return (
    <section id="work-with-me" className="px-5 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader
          align="center"
          eyebrow="Work with me"
          title="Want me to build"
          accent="yours?"
        />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="lead mt-6"
        >
          I take health and fitness products from idea to launch through The Production Sprint: a
          working prototype in two weeks, then a phased build to production. The full offer, the
          guarantee, and how it runs live on Auxon AI, my studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <CTAButton size="lg" />
          <a
            href={AUXON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn group !pr-1.5 !py-2.5 !pl-7 text-base"
          >
            <span>See how I work</span>
            <span className="flex items-center justify-center rounded-full w-8 h-8 bg-[var(--sage)]/12 text-[var(--sage-deep)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={17} strokeWidth={2} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
