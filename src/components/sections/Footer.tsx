import { Link } from 'react-router-dom';
import { AUXON_URL, LINKS, RESUME_HREF, RESUME_LABEL } from '@/lib/site';

const linkClass = 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-band-muted underline-offset-4 hov:underline';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-band border-t border-band-line bg-band text-band-muted">
      <div className="mx-auto flex w-full max-w-wrap flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-5 text-sm">
        <span>&copy; {year} Zeeshan Hameed</span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
          <Link to="/work" className={linkClass}>Work</Link>
          <Link to="/about" className={linkClass}>About</Link>
          <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className={linkClass}>{RESUME_LABEL}</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
          <a href={LINKS.upwork} target="_blank" rel="noopener noreferrer" className={linkClass}>Upwork</a>
          <a href={AUXON_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Auxon AI</a>
        </nav>
      </div>
    </footer>
  );
}
