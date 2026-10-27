import { NavLink, Link } from 'react-router-dom';
import { Button, Logo } from '@/components/blueprint';
import { cn } from '@/lib/utils';
import { BOOKING_LABEL, BOOKING_LINK, CONTACT_HREF } from '@/lib/site';

// "Notes" (/blog) stays routable but is left out of the nav until a post exists.
const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
];

const itemClass = 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center underline-offset-[6px] hov:underline hov:text-ink';

// One row at every width. Below 640px the lockup shrinks to the mark and Email steps out (it stays
// in the footer and the closing block), so the button stays inline.
export default function Navigation() {
  return (
    <header className="mx-auto flex min-h-[72px] w-full max-w-wrap items-center justify-between gap-x-3 px-4 py-2 sm:min-h-[80px] sm:gap-x-6 sm:px-6">
      <Link to="/" aria-label="Zeeshan Hameed, home" className="shrink-0">
        <Logo />
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-x-3 text-base font-medium text-ink-2 sm:gap-x-7">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn(itemClass, isActive && 'font-semibold text-ink underline decoration-2 decoration-accent')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-x-4">
        <a href={CONTACT_HREF} className={cn(itemClass, 'hidden text-base font-medium text-ink-2 lg:inline-flex')}>
          Email
        </a>
        <Button href={BOOKING_LINK} external className="!min-h-[44px] !px-4 !text-base sm:!px-5">
          {BOOKING_LABEL}
        </Button>
      </div>
    </header>
  );
}
