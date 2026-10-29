import { Link } from 'react-router-dom';
import { Card } from '@/components/blueprint';
import { getCaseStudy } from '@/lib/work';

// Three cards with a hard-part headline each, then the rest as rows. The headlines are written for
// this page (src/lib/work.ts holds the case-study copy); every one restates what that case study says.
// `shot` is the index of the screenshot in work.ts to show; a card without one shows its diagram.
// `when` adds the case study's timeline to the meta line; CuePilates leaves it out because its headline already says it.
const CARDS: { slug: string; title: string; shot?: number; when?: boolean }[] = [
  { slug: 'cuepilates', title: 'Payments, sign-in and an AI planner, live in under a month', shot: 0 },
  { slug: 'dr-aigent', title: 'Reports that keep generating when a model provider fails', shot: 0, when: true },
  { slug: 'diettalk', title: 'A patient app and a doctor portal, built together', shot: 0, when: true },
];
const ROWS = ['production-rescue', 'jema', 'truecert', 'invoice-ai'];

export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto w-full max-w-wrap px-6 py-14 md:py-[88px]">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <h2 id="work-heading" className="t-h2">
          The hard part of each build
        </h2>
        <Link to="/work" className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold hov:underline underline-offset-4">
          All work <span aria-hidden="true">→</span>
        </Link>
      </div>
      <p className="lead mt-3">A demo is quick. These are the problems that made each one work in production.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {CARDS.map(({ slug, title, shot, when }) => {
          const cs = getCaseStudy(slug)!;
          const img = shot === undefined ? undefined : cs.screenshots?.[shot];
          return (
            <Card as={Link} to={`/work/${cs.slug}`} interactive key={slug} className="flex flex-col !p-0 overflow-hidden">
              {/* One 16:10 box for every card, so the image's own size never sets the height. */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-sunk">
                {img?.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    className="absolute inset-0 block h-full w-full object-cover object-top"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex flex-wrap content-center items-center gap-x-2 gap-y-3 p-5"
                  >
                    {cs.diagram.nodes.map((n, i) => (
                      <span key={n.label} className="inline-flex items-center gap-2">
                        {i > 0 && <span className="text-[14px] text-ink-2">{n.join === 'plus' ? '+' : n.join === 'both' ? '↔' : '→'}</span>}
                        <span
                          className={`rounded-xl border-[1.5px] px-3 py-1.5 text-[13px] font-semibold leading-snug ${
                            n.ai ? 'border-dashed border-accent-text bg-accent-soft text-accent-text' : 'border-ink bg-surface'
                          }`}
                        >
                          {n.label}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <span className="text-[14px] font-medium text-ink-2">
                  {cs.name} · {cs.tag}
                  {when && cs.timeline ? ` · ${cs.timeline}` : ''}
                </span>
                <h3 className="t-h3 group-hov:underline underline-offset-4">{title}</h3>
                <p className="text-[15px] leading-[1.5] text-ink-2">{cs.oneLiner}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <ul className="mt-10 list-none p-0">
        {ROWS.map((slug) => {
          const cs = getCaseStudy(slug)!;
          return (
            <li key={slug}>
              <Link
                to={`/work/${cs.slug}`}
                className="group grid min-h-[44px] grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-line py-5 no-underline md:grid-cols-[200px_1fr_auto] md:gap-x-6"
              >
                <span className="col-span-2 font-semibold md:col-span-1">{cs.name}</span>
                <span className="text-[17px] font-semibold leading-snug group-hov:underline underline-offset-4">{cs.shortLine}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
