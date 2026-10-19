import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'inverse' | 'link';

const base: Record<Variant, string> = {
  primary:
    'press min-h-[52px] px-6 bg-ink text-paper font-semibold hov:bg-ink-2',
  outline:
    'press min-h-[44px] px-[18px] border-2 border-ink text-ink font-semibold hov:bg-ink hov:text-paper',
  inverse:
    'press min-h-[52px] px-6 bg-band-text text-ink font-semibold hov:bg-band-muted',
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

/** Primary (ink block), outline (nav CTA), inverse (dark band) and link (underlined text). Always a link. */
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
