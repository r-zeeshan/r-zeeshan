import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'accent' | 'inverse' | 'link';

const base: Record<Variant, string> = {
  primary:
    'press min-h-[56px] rounded-full bg-ink px-7 text-[18px] font-semibold text-paper hov:bg-ink-2',
  outline:
    'press min-h-[56px] rounded-full px-7 text-[18px] font-semibold text-ink shadow-[inset_0_0_0_1.5px_var(--rule-dash)] hov:bg-sunk',
  // The one place the accent colour fills a surface: the main call to action.
  accent:
    'press min-h-[56px] rounded-full bg-accent px-7 text-[18px] font-semibold text-ink shadow-btn hov:brightness-95',
  inverse:
    'press min-h-[56px] rounded-full bg-band-text px-7 text-[18px] font-semibold text-ink hov:bg-band-muted',
  link:
    'press min-h-[44px] px-1 font-semibold text-ink underline underline-offset-[5px] decoration-[1.5px]',
};

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: Variant;
  /** Internal route (client-side link). */
  to?: string;
  /** External or mailto link. */
  href?: string;
  external?: boolean;
  children: ReactNode;
}

/** Pill buttons (primary ink, outline, accent, inverse) and an underlined text link. Always a link. */
export default function Button({ variant = 'primary', to, href, external, className, children, ...rest }: Props) {
  const cls = cn('inline-flex items-center justify-center gap-2 no-underline', base[variant], variant === 'link' && 'underline', className);
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
