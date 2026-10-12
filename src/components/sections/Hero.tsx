import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_HREF, CREDENTIALS, CTA_LABEL, RESUME_HREF, RESUME_LABEL } from '@/lib/site';

// The one orchestrated entrance on the site: a CSS stagger, in order of reading.
const step = (i: number): CSSProperties => ({ ['--i' as string]: i });

export default function Hero() {
  return (
    <section id="top" className="px-5 sm:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] gap-12 lg:gap-20 items-end">
        <div>
          <h1 className="t-display rise max-w-[18ch]" style={step(0)}>
            I build AI products from idea to production.
          </h1>

          <p className="lead mt-7 rise" style={step(1)}>
            The AI layer, backend, web and mobile, with one person accountable for all of it, and
            still there after launch.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 rise" style={step(2)}>
            <Link to="/work" className="btn btn-primary">
              See my work
            </Link>
            <a href={CONTACT_HREF} className="btn">
              {CTA_LABEL}
            </a>
            <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="link text-[0.9375rem]">
              {RESUME_LABEL}
            </a>
          </div>

          <ul
            className="mt-12 pt-5 rule-top flex flex-wrap gap-x-6 gap-y-1.5 text-[0.875rem] text-[var(--warm-gray)] rise"
            style={step(3)}
            aria-label="Credentials"
          >
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="rise w-full max-w-[17rem] sm:max-w-xs lg:max-w-none lg:ml-auto lg:w-full" style={step(2)}>
          <div className="frame aspect-[4/5]">
            <img
              src="/profile-photo.jpg"
              alt="Zeeshan Hameed, full-stack AI engineer"
              width={877}
              height={877}
              loading="eager"
              {...{ fetchpriority: 'high' }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
