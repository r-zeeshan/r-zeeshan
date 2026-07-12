import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import CTAButton from '@/components/ui/CTAButton';
import { LINKS, AUXON_URL } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] px-5 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-md">
            <Link to="/" aria-label="Home" className="inline-block mb-5">
              <Logo size="md" showTagline tone="light" />
            </Link>
            <p className="text-[var(--footer-muted)] leading-relaxed">
              Production-grade AI products for health and fitness founders. Built by Zeeshan Hameed, the
              engineer behind Jema, CuePilates, and DietTalk, through his studio Auxon&nbsp;AI.
            </p>
          </div>
          <CTAButton variant="light" size="lg" />
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--footer-line)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--footer-muted)]">
          <span>© {year} Zeeshan Hameed · Auxon&nbsp;AI</span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/work" className="hover:text-[var(--footer-text)] transition-colors">
              Work
            </Link>
            <Link to="/about" className="hover:text-[var(--footer-text)] transition-colors">
              About
            </Link>
            <Link to="/blog" className="hover:text-[var(--footer-text)] transition-colors">
              Notes
            </Link>
            <a href={AUXON_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--footer-text)] transition-colors">
              auxonai.com
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--footer-text)] transition-colors">
              LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--footer-text)] transition-colors">
              GitHub
            </a>
            <a href={LINKS.upwork} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--footer-text)] transition-colors">
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
