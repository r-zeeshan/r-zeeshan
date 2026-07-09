import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BOOKING_LINK, CTA_LABEL } from '@/lib/site';

type Variant = 'primary' | 'outline' | 'light';

interface CTAButtonProps {
  label?: string;
  variant?: Variant;
  size?: 'md' | 'lg';
  className?: string;
}

export default function CTAButton({
  label = CTA_LABEL,
  variant = 'primary',
  size = 'md',
  className,
}: CTAButtonProps) {
  const iconTone =
    variant === 'primary'
      ? 'bg-white/20 text-white'
      : 'bg-[var(--sage)]/12 text-[var(--sage-deep)]';

  return (
    <motion.a
      href={BOOKING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -1 }}
      className={cn(
        'btn group !pr-1.5',
        variant === 'primary' && 'btn-primary',
        variant === 'light' && 'border-transparent !bg-[var(--cream)] !text-[var(--sage-deep)] hover:!bg-white',
        size === 'lg' ? '!text-base !py-2.5 !pl-7' : '!py-2 !pl-6',
        className,
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          'flex items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
          size === 'lg' ? 'w-8 h-8' : 'w-6 h-6',
          iconTone,
        )}
      >
        <ArrowUpRight size={size === 'lg' ? 17 : 15} strokeWidth={2} />
      </span>
    </motion.a>
  );
}
