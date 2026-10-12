import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CaseStudy } from '@/lib/work';

/**
 * A lead entry: large cover, large name. Used for the work that carries the most weight.
 * The grid that holds two of these places them at different widths on purpose.
 */
export function LeadEntry({ cs, className }: { cs: CaseStudy; className?: string }) {
  return (
    <article className={cn('group', className)}>
      <Link to={`/work/${cs.slug}`} className="block rounded-lg">
        {cs.cover && (
          <div className="frame aspect-[4/3]">
            <img
              src={cs.cover}
              alt={`${cs.name}, ${cs.tag}`}
              width={1448}
              height={1086}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}
        <div className="mt-6 flex items-baseline justify-between gap-4">
          <h3 className="t-h2 group-hover:underline decoration-1 underline-offset-[0.2em] decoration-[var(--sage)]">
            {cs.name}
          </h3>
          <span className="meta shrink-0">{cs.tag}</span>
        </div>
        <p className="prose-body mt-3">{cs.cardBlurb}</p>
        <span className="link inline-flex items-center gap-1 mt-4 text-[0.9375rem] no-underline group-hover:underline">
          Read the case study
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}

/** A ruled row for the rest of the body of work. Thumbnail only where a cover exists. */
export function WorkRow({ cs }: { cs: CaseStudy }) {
  return (
    <li className="rule-top">
      <Link
        to={`/work/${cs.slug}`}
        className="group grid gap-x-8 gap-y-4 py-7 md:grid-cols-[minmax(0,1fr)_11rem] items-center rounded-md"
      >
        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="t-h3 text-[1.625rem] group-hover:underline decoration-1 underline-offset-[0.2em] decoration-[var(--sage)]">
              {cs.name}
            </h3>
            <span className="meta">{cs.tag}</span>
          </div>
          <p className="prose-body mt-2 !max-w-[34rem]">{cs.oneLiner}</p>
        </div>
        {cs.cover ? (
          <div className="frame aspect-[4/3] hidden md:block">
            <img
              src={cs.cover}
              alt=""
              width={1448}
              height={1086}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <span className="hidden md:flex justify-end text-[var(--sage-deep)]" aria-hidden="true">
            <ArrowUpRight size={20} />
          </span>
        )}
      </Link>
    </li>
  );
}

/** Two lead entries at different widths, then the rest as ruled rows. */
export function WorkBody({ studies }: { studies: CaseStudy[] }) {
  const leads = studies.filter((c) => c.lead);
  const rest = studies.filter((c) => !c.lead);

  return (
    <>
      {leads.length > 0 && (
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-12 items-start">
          {leads[0] && <LeadEntry cs={leads[0]} className="lg:col-span-7" />}
          {leads[1] && <LeadEntry cs={leads[1]} className="lg:col-span-5 lg:mt-24" />}
        </div>
      )}
      {rest.length > 0 && (
        <ul className="mt-20 border-b border-[var(--line)]">
          {rest.map((cs) => (
            <WorkRow key={cs.slug} cs={cs} />
          ))}
        </ul>
      )}
    </>
  );
}
