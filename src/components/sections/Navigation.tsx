import { NavLink, Link } from 'react-router-dom';
import { Button, Logo } from '@/components/blueprint';
import { cn } from '@/lib/utils';
import { BOOKING_LABEL, BOOKING_LINK, CONTACT_HREF, RESUME_HREF } from '@/lib/site';

// "Notes" (/blog) stays routable but is left out of the nav until a post exists.
const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
];

const itemClass = 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center underline-offset-[6px] hov:underline';

// One row at every width. Below 640px the lockup shrinks to the mark and Resume and Email
// step out (both stay in the footer and the closing block), so the button stays inline.
export default function Navigation() {
  return (
    <header className="mx-auto flex min-h-[72px] w-full max-w-wrap items-center justify-between gap-x-3 px-4 py-2 sm:min-h-[88px] sm:gap-x-6 sm:px-6 sm:py-3">
      <Link to="/" aria-label="Zeeshan Hameed, home" className="shrink-0">
        <Logo />
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-x-3 text-base font-medium sm:gap-x-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(itemClass, isActive && 'underline decoration-2 decoration-note')
            }
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href={RESUME_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(itemClass, 'hidden md:inline-flex')}
        >
          Resume
        </a>
        <a href={CONTACT_HREF} className={cn(itemClass, 'hidden md:inline-flex')}>
          Email
        </a>
        <Button href={BOOKING_LINK} external className="!min-h-[44px] !px-4 sm:!px-6">
          {BOOKING_LABEL}
        </Button>
      </nav>
    </header>
  );
}
