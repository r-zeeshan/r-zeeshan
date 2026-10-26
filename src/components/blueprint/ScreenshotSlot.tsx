import type { Screenshot } from '@/lib/work';

/**
 * A product screenshot in a ruled frame. Until `shot.src` is set it renders a marked
 * placeholder that says which file to add. Redact any client or patient data first.
 */
export default function ScreenshotSlot({ shot }: { shot: Screenshot }) {
  return (
    <figure className="m-0 flex flex-col gap-2">
      {shot.src ? (
        <img
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          className="aspect-[16/10] w-full border-2 border-ink bg-surface object-cover object-top"
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
      <figcaption className="text-sm text-ink-2">{shot.alt}</figcaption>
    </figure>
  );
}
