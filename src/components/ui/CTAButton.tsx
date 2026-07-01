import { motion } from 'framer-motion';
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
  return (
    <motion.a
      href={BOOKING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -1 }}
      className={cn(
        'btn',
        variant === 'primary' && 'btn-primary',
        variant === 'light' && 'border-transparent !bg-[var(--cream)] !text-[var(--sage-deep)] hover:!bg-white',
        size === 'lg' && 'text-base px-7 py-4',
        className,
      )}
    >
      <span>{label}</span>
    </motion.a>
  );
}
