import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  /** Rendered in sage italic, appended after the title */
  accent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(align === 'center' && 'text-center', className)}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className="heading-brutal heading-lg mt-4 max-w-3xl"
        style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className="accent-italic">{accent}</span>
          </>
        )}
      </h2>
      {subtitle && <p className={cn('lead mt-5 max-w-2xl', align === 'center' && 'mx-auto')}>{subtitle}</p>}
    </motion.div>
  );
}
