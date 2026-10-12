import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { AUXON_URL, CONTACT_HREF, LINKS, POSITIONING, RESUME_HREF, RESUME_LABEL } from '@/lib/site';

const linkClass = 'hover:text-[var(--footer-text)] underline-offset-4 hover:underline transition-colors';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] px-5 sm:px-8 pt-14 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="max-w-md">
            <Link to="/" aria-label="Zeeshan Hameed, home" className="inline-block mb-5 rounded-md">
              <Logo size="md" showTagline={false} tone="light" />
            </Link>
            <p className="text-[var(--footer-muted)] leading-relaxed">
              Zeeshan Hameed, full-stack AI engineer. {POSITIONING}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 gap-y-2.5 text-[0.9375rem] text-[var(--footer-muted)]">
            <Link to="/work" className={linkClass}>Work</Link>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
            <Link to="/about" className={linkClass}>About</Link>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
            <Link to="/blog" className={linkClass}>Notes</Link>
            <a href={LINKS.upwork} target="_blank" rel="noopener noreferrer" className={linkClass}>Upwork</a>
            <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className={linkClass}>{RESUME_LABEL}</a>
            <a href={CONTACT_HREF} className={linkClass}>{LINKS.email}</a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--footer-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-[var(--footer-muted)]">
          <span>&copy; {year} Zeeshan Hameed</span>
          <a href={AUXON_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Auxon AI, my studio
          </a>
        </div>
      </div>
    </footer>
  );
}
