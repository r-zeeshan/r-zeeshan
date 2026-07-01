import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  animate?: boolean;
  tone?: 'dark' | 'light';
}

const sizes = {
  sm: { icon: 30, text: 'text-base', tagline: 'text-[9px]', gap: 'gap-2.5' },
  md: { icon: 36, text: 'text-lg', tagline: 'text-[10px]', gap: 'gap-3' },
  lg: { icon: 52, text: 'text-2xl', tagline: 'text-xs', gap: 'gap-3.5' },
};

// Inline SVG mark: a sage rounded square with a "Z" drawn in cream.
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="var(--sage)" />
      <path
        d="M13 13 L27 13 L13 27 L27 27"
        stroke="var(--cream)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({ size = 'md', showTagline = true, animate = true, tone = 'dark' }: LogoProps) {
  const s = sizes[size];
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate ? { whileHover: { scale: 1.01 } } : {};
  const nameColor = tone === 'light' ? 'text-[var(--footer-text)]' : 'text-[var(--ink)]';

  return (
    <Wrapper className={`flex items-center ${s.gap} cursor-pointer select-none`} {...wrapperProps}>
      <Mark size={s.icon} />
      <div className="flex flex-col leading-none">
        <span className={`font-display ${s.text} font-semibold tracking-tight ${nameColor}`}>Zeeshan Hameed</span>
        {showTagline && (
          <span className={`font-body ${s.tagline} text-[var(--sage)] tracking-[0.18em] uppercase mt-1`}>
            Senior AI Engineer
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export function LogoIcon({ size = 40 }: { size?: number }) {
  return <Mark size={size} />;
}
