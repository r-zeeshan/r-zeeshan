import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck, Star, GraduationCap } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CUEPILATES_URL } from '@/lib/site';

const featured = [
  {
    name: 'Jema',
    tag: 'Clinical AI',
    cover: '/work/jema.png',
    blurb: 'Clinical AI that doctors use in their day-to-day work.',
    href: null as string | null,
    linkLabel: '',
  },
  {
    name: 'CuePilates',
    tag: 'Fitness SaaS',
    cover: '/work/cuepilates.png',
    blurb: 'AI Pilates planning SaaS, taken from idea to launch in under a month.',
    href: CUEPILATES_URL,
    linkLabel: 'Visit the live app',
  },
  {
    name: 'DietTalk',
    tag: 'Health app',
    cover: '/work/diettalk.png',
    blurb: 'A doctor-supervised diet app, live on the App Store and Google Play.',
    href: null as string | null,
    linkLabel: '',
  },
];

// Real client reviews (Upwork). Names attributed by role where not provided.
const quotes = [
  {
    text: 'I worked with Zeeshan on multiple AI-driven healthcare applications, and he was a reliable and highly capable development partner throughout. Strong ownership, clear communication, and a solid understanding of product goals beyond just implementation. I would recommend him to any team as a true product partner.',
    author: 'Health-tech founder',
    role: 'Long-term partnership',
  },
  {
    text: 'Zeeshan took my vision for CuePilates, a fully AI-powered Pilates class planning platform, and built it into a real, live product with paying subscribers. He handled Supabase, Vercel, Stripe, the Anthropic API, auth, and security hardening. I came in with zero coding background, and he translated my ideas into real features, milestone after milestone. If you need a developer you can actually trust, Zeeshan is your guy.',
    author: 'Founder, CuePilates',
    role: 'Idea to launch',
  },
  {
    text: 'We highly recommend Zeeshan for AI-related development work. He built an AI agent for our certification support system, delivering high-quality results with efficiency and professionalism. Proactive, responsive, and a pleasure to work with, an asset to any team.',
    author: 'Aaron Phillips',
    role: 'CEO, Green Earth',
  },
];

const trustBadges = [
  { icon: Award, value: 'Top Rated Plus', sub: 'Upwork top 3%' },
  { icon: ShieldCheck, value: '100% Job Success', sub: 'On Upwork' },
  { icon: Star, value: '20+ projects', sub: 'All 5-star' },
  { icon: GraduationCap, value: 'B.S. in AI', sub: 'Real fundamentals' },
];

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Selected work" title="Products I've shipped, that are" accent="live right now" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featured.map((p, i) => {
            const Inner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)] border-b border-[var(--line)]">
                  <img
                    src={p.cover}
                    alt={`${p.name}, ${p.tag}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="eyebrow !text-[var(--muted)] text-[10px]">{p.tag}</span>
                    {p.href && (
                      <ArrowUpRight
                        size={16}
                        className="text-[var(--muted)] group-hover:text-[var(--sage-deep)] transition-colors shrink-0"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--ink)] mt-2">{p.name}</h3>
                  <p className="text-sm text-[var(--warm-gray)] mt-1.5 leading-relaxed">{p.blurb}</p>
                  {p.href && (
                    <span className="inline-flex items-center gap-1 text-sm text-[var(--sage-deep)] font-medium mt-3">
                      {p.linkLabel}
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block card card-hover overflow-hidden h-full"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="group card overflow-hidden h-full">{Inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Real, qualitative social proof */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 flex flex-col"
            >
              <p className="font-display text-base italic text-[var(--ink)] leading-relaxed flex-1">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="text-sm text-[var(--muted)] mt-4">
                <span className="font-semibold text-[var(--ink)]">{q.author}</span> · {q.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Credibility badges */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-5 flex flex-col items-center text-center"
            >
              <span className="w-10 h-10 rounded-full bg-[var(--sage-wash)] text-[var(--sage-deep)] flex items-center justify-center">
                <b.icon size={18} strokeWidth={1.75} />
              </span>
              <p className="font-display text-base font-semibold text-[var(--ink)] mt-3 leading-tight">{b.value}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
