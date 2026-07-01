import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow inline-block"
            >
              Senior AI Engineer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="heading-brutal heading-xl mt-5"
            >
              I&apos;m Zeeshan. I build health and fitness AI that{' '}
              <span className="accent-italic">holds up</span> in production.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="lead mt-7 max-w-xl"
            >
              The engineer behind Jema, CuePilates, and DietTalk. Idea to launch, with a named person
              accountable for what ships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="btn">
                <span>See my work</span>
              </a>
              <CTAButton size="md" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.32 }}
              className="text-sm text-[var(--muted)] mt-5"
            >
              Top Rated Plus on Upwork · B.S. in Artificial Intelligence · Founder of Auxon&nbsp;AI.
            </motion.p>
          </div>

          {/* Right: Zeeshan's portrait, clean and confident. One job: this is the person. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[16rem] sm:max-w-xs lg:max-w-sm"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--sage-wash)] to-transparent -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden border border-[var(--line)] bg-[var(--white)] shadow-[0_28px_64px_rgba(40,44,32,0.18)] aspect-[4/5]">
              <img
                src="/profile-photo.jpg"
                alt="Zeeshan Hameed, senior AI engineer"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
