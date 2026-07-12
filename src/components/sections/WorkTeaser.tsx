import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, GraduationCap } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/lib/work';

const trustBadges = [
  { icon: Award, value: 'Top Rated Plus', sub: 'Upwork top 3%' },
  { icon: ShieldCheck, value: '100% Job Success', sub: 'On Upwork' },
  { icon: Star, value: '20+ projects', sub: 'All 5-star' },
  { icon: GraduationCap, value: 'B.S. in AI', sub: 'Real fundamentals' },
];

export default function WorkTeaser() {
  return (
    <section id="work" className="px-5 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Selected work"
          title="Health and fitness products I've"
          accent="shipped to production"
          subtitle="Real builds, in daily use. Each one has a case study on the hard engineering behind it."
        />

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {caseStudies.map((p, i) => (
            <CaseStudyCard key={p.slug} cs={p} index={i} />
          ))}
        </div>

        {/* Credibility badges */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-5 flex flex-col items-center text-center"
            >
              <span className="w-10 h-10 rounded-full bg-[var(--sage-wash)] text-[var(--sage-deep)] flex items-center justify-center">
                <b.icon size={18} strokeWidth={1.75} />
              </span>
              <p className="font-display text-base font-semibold text-[var(--ink)] mt-3 leading-tight">{b.value}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
