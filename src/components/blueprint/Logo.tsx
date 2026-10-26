/**
 * The Z mark: a square outline, a constructed Z and two crop-mark corners in the note colour.
 * Same geometry as docs/design/blueprint/assets/zeeshan-logo-z.svg, with a paper-white fill.
 */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="140 140 744 744"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="232" y="232" width="560" height="560" fill="#FFFFFF" stroke="var(--ink)" strokeWidth="40" />
      <path d="M388 360 H636 L388 664 H636" stroke="var(--ink)" strokeWidth="60" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M772 172 H852 V252" stroke="var(--note)" strokeWidth="36" strokeLinecap="square" />
      <path d="M252 852 H172 V772" stroke="var(--note)" strokeWidth="36" strokeLinecap="square" />
    </svg>
  );
}

/** The mark plus the two-line lockup: name, then a Caveat descriptor. Below 640px only the mark shows. */
export default function Logo({ showDescriptor = true }: { showDescriptor?: boolean }) {
  return (
    <span className="flex min-h-[44px] min-w-[44px] items-center gap-3 select-none">
      <LogoMark size={36} />
      <span className="hidden flex-col sm:flex">
        <span className="text-[18px] font-bold leading-tight">Zeeshan Hameed</span>
        {showDescriptor && (
          <span className="note text-[19px]">full-stack AI engineer</span>
        )}
      </span>
    </span>
  );
}
