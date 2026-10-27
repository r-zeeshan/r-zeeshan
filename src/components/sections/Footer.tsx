import { Link } from 'react-router-dom';
import { AUXON_URL, LINKS, RESUME_HREF, RESUME_LABEL } from '@/lib/site';

const linkClass = 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink-2 underline-offset-4 hov:underline hov:text-ink';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-wrap px-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-line pb-4 pt-5 text-[15px] text-ink-2">
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
