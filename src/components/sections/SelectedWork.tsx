import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LeadEntry } from '@/components/WorkEntries';
import { caseStudies } from '@/lib/work';

export default function SelectedWork() {
  const leads = caseStudies.filter((c) => c.lead);
  const rest = caseStudies.filter((c) => !c.lead);

  return (
    <section id="work" aria-labelledby="work-heading" className="px-5 sm:px-8 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 id="work-heading" className="t-h2">
            Products I&apos;ve built and shipped
          </h2>
          <p className="lead mt-4">
            Each one has a case study: the problem, what I built, and the parts that were hard.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-x-12 items-start">
          {leads[0] && <LeadEntry cs={leads[0]} className="lg:col-span-7" />}
          {leads[1] && <LeadEntry cs={leads[1]} className="lg:col-span-5 lg:mt-24" />}
        </div>

        <div className="mt-16 pt-6 rule-top flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <p className="meta">
            Also:{' '}
            {rest.map((c, i) => (
              <span key={c.slug}>
                <Link to={`/work/${c.slug}`} className="link">
                  {c.name}
                </Link>
                {i < rest.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
          <Link to="/work" className="link inline-flex items-center gap-1.5">
            All work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
