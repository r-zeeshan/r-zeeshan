import type { Screenshot } from '@/lib/work';

/**
 * A product screenshot in a ruled frame, shown at its own shape (phone shots stay tall).
 * Until `shot.src` is set it renders a marked placeholder that says which file to add.
 * Redact any client or patient data before adding a file.
 */
export default function ScreenshotSlot({ shot }: { shot: Screenshot }) {
  return (
    <figure className={shot.src ? 'm-0 flex max-w-full flex-col gap-2' : 'm-0 flex flex-[1_1_420px] flex-col gap-2'}>
      {shot.src ? (
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading="lazy"
          className="block h-auto max-h-[440px] w-auto max-w-full border-2 border-ink bg-surface"
        />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder: ${shot.alt}`}
          className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-rule-dash bg-[rgba(255,255,255,0.72)] p-6 text-center"
        >
          <span className="mono-label-caps">Screenshot placeholder</span>
          <span className="mono-label">{shot.slot}</span>
        </div>
      )}
      <figcaption className="max-w-[560px] text-sm text-ink-2">
        {shot.caption ?? shot.alt}
      </figcaption>
    </figure>
  );
}
