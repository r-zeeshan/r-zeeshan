import { NavLink, Link } from 'react-router-dom';
import { Button, Logo } from '@/components/blueprint';
import { cn } from '@/lib/utils';
import { CONTACT_HREF, CTA_LABEL, RESUME_HREF } from '@/lib/site';

// "Notes" (/blog) stays routable but is left out of the nav until a post exists.
const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
];

// Below 768px the links stay visible and wrap; the nav never hides behind a menu.
export default function Navigation() {
  return (
    <header className="mx-auto flex min-h-[88px] w-full max-w-wrap flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-3">
      <Link to="/" aria-label="Zeeshan Hameed, home" className="shrink-0">
        <Logo />
      </Link>
      <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-7 gap-y-1 text-base font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'inline-flex min-h-[44px] min-w-[44px] items-center justify-center underline-offset-[6px] hov:underline',
                isActive && 'underline decoration-2 decoration-note',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href={RESUME_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center underline-offset-[6px] hov:underline"
        >
          Resume
        </a>
        <Button href={CONTACT_HREF} variant="outline">
          {CTA_LABEL}
        </Button>
      </nav>
    </header>
  );
}
