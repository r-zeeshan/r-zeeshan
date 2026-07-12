import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/lib/work';

export default function CaseStudyCard({ cs, index = 0 }: { cs: CaseStudy; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <Link to={`/work/${cs.slug}`} className="group block card card-hover overflow-hidden h-full">
        {cs.cover ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--cream)] border-b border-[var(--line)]">
            <img
              src={cs.cover}
              alt={`${cs.name}, ${cs.tag}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] flex items-center justify-center bg-[var(--sage-wash)] border-b border-[var(--line)]">
            <span className="font-display text-3xl font-medium text-[var(--sage-deep)]">{cs.name}</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow !text-[var(--muted)] text-[10px]">{cs.tag}</span>
            <ArrowUpRight
              size={16}
              className="text-[var(--muted)] group-hover:text-[var(--sage-deep)] transition-colors shrink-0"
            />
          </div>
          <h3 className="font-display text-xl font-semibold text-[var(--ink)] mt-2">{cs.name}</h3>
          <p className="text-sm text-[var(--warm-gray)] mt-2 leading-relaxed">{cs.cardBlurb}</p>
          <span className="inline-flex items-center gap-1 text-sm text-[var(--sage-deep)] font-medium mt-4">
            Read the case study
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
