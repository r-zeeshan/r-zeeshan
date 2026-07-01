import { motion } from 'framer-motion';

const credentials = [
  'B.S. in Artificial Intelligence',
  'Top Rated Plus on Upwork',
  'Clinical AI in daily use',
  'Idea-to-launch in under a month',
];

export default function WhyMe() {
  return (
    <section id="about" className="px-5 py-24 md:py-32 section-alt border-y border-[var(--line)] scroll-mt-20">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-16">
        {/* Left: eyebrow + thesis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">About me</span>
          <h2 className="heading-brutal heading-lg mt-4">
            The demo is easy. Production is the <span className="accent-italic">moat</span>.
          </h2>
        </motion.div>

        {/* Right: the story + credentials */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="lead">
            Anyone can vibe-code a prototype now. The hard part is the other 80%, the part that makes it
            hold up with real users. Security, edge cases, real data, scale, the stuff that breaks at 2am.
            That&apos;s the part I obsess over.
          </p>

          <p className="text-[var(--warm-gray)] mt-5 leading-relaxed">
            I&apos;m Zeeshan, a senior engineer with a B.S. in Artificial Intelligence. I&apos;ve shipped
            clinical AI that doctors use every day, a Pilates SaaS taken from idea to launch in under a month,
            and a diet app that&apos;s live on both app stores. You work directly with me through my studio,
            Auxon&nbsp;AI, so there&apos;s a named person accountable for what ships, not another cheap dev who
            leaves you stuck.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {credentials.map((c) => (
              <span key={c} className="tag">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
