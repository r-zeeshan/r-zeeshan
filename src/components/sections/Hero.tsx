import type { CSSProperties } from 'react';
import { Button } from '@/components/blueprint';
import { LINKS, UPWORK_PROOF } from '@/lib/site';

// The one orchestrated entrance on the home page: a CSS stagger in reading order.
const step = (i: number): CSSProperties => ({ ['--i' as string]: i });

// Five stars sit beside the Upwork line: every review on the profile with a score is 5 stars
// (auxonai docs/launch-proof.md, checked 2026-10-26).
export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-wrap items-center gap-10 px-6 pb-14 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-16 lg:pb-20 lg:pt-8"
    >
      <div className="flex min-w-0 flex-col gap-6">
        <p className="eyebrow enter" style={step(0)}>
          Full-stack AI engineer
        </p>
        <h1 className="t-hero enter -mt-2" style={step(1)}>
          The demo is the easy part.
        </h1>
        <p className="lead enter" style={step(2)}>
          I build AI products from idea to production, then stay to run them after launch: the AI
          layer, the backend, web and mobile.
        </p>
        <div className="enter flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={step(3)}>
          <Button to="/work">See the work</Button>
          <Button href="#contact" variant="outline">
            Contact
          </Button>
        </div>
        <p className="enter flex flex-wrap items-center gap-x-2 text-[15px] text-ink-2" style={step(4)}>
          <span aria-hidden="true" className="tracking-[2px] text-ink">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center font-medium underline underline-offset-4 hov:text-ink"
          >
            {UPWORK_PROOF}
          </a>
        </p>
      </div>

      <figure className="enter relative m-0 overflow-hidden rounded-photo bg-[#E9EBEE] shadow-card-lg" style={step(1)}>
        <img
          src="/profile-photo.jpg"
          alt="Zeeshan Hameed, full-stack AI engineer"
          width={877}
          height={877}
          className="block aspect-square w-full object-cover object-[50%_20%] lg:aspect-[4/5]"
        />
        <figcaption className="absolute bottom-5 left-5 rounded-2xl bg-surface px-5 py-3 shadow-card">
          <b className="block text-[15px] font-semibold leading-tight">Zeeshan Hameed</b>
          <span className="block text-[13px] leading-snug text-ink-2">Pakistan · works remotely</span>
        </figcaption>
      </figure>
    </section>
  );
}
