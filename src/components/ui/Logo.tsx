import { TITLE } from '@/lib/site';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  tone?: 'dark' | 'light';
}

const sizes = {
  sm: { icon: 30, text: 'text-base', tagline: 'text-[0.75rem]', gap: 'gap-2.5' },
  md: { icon: 36, text: 'text-lg', tagline: 'text-[0.8125rem]', gap: 'gap-3' },
  lg: { icon: 52, text: 'text-2xl', tagline: 'text-sm', gap: 'gap-3.5' },
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

export default function Logo({ size = 'md', showTagline = true, tone = 'dark' }: LogoProps) {
  const s = sizes[size];
  const nameColor = tone === 'light' ? 'text-[var(--footer-text)]' : 'text-[var(--ink)]';
  const taglineColor = tone === 'light' ? 'text-[var(--footer-muted)]' : 'text-[var(--warm-gray)]';

  return (
    <span className={`flex items-center ${s.gap} select-none`}>
      <Mark size={s.icon} />
      <span className="flex flex-col leading-none">
        <span className={`font-display ${s.text} font-medium tracking-tight ${nameColor}`}>Zeeshan Hameed</span>
        {showTagline && <span className={`font-body ${s.tagline} ${taglineColor} mt-1`}>{TITLE}</span>}
      </span>
    </span>
  );
}

export function LogoIcon({ size = 40 }: { size?: number }) {
  return <Mark size={size} />;
}
