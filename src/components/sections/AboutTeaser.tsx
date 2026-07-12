import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  return (
    <section
      id="about"
      className="px-5 py-24 md:py-32 section-alt border-y border-[var(--line)] scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-16">
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

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="lead">
            Anyone can vibe-code a prototype now. The hard part is the other 80%, the part that
            makes it hold up with real users: security, edge cases, real data, scale, the stuff that
            breaks at 2am. That&apos;s the part I obsess over.
          </p>
          <p className="text-[var(--warm-gray)] mt-5 leading-relaxed">
            I&apos;m Zeeshan, a senior engineer with a B.S. in Artificial Intelligence. I&apos;ve
            shipped clinical AI that doctors use every day, a Pilates SaaS taken from idea to launch
            in under a month, and a diet app that&apos;s live on both app stores. There&apos;s a
            named person accountable for what ships, and it&apos;s me.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-[var(--sage-deep)] font-medium mt-6"
          >
            More about how I work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
