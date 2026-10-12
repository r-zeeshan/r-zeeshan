import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import { CONTACT_HREF, CTA_LABEL } from '@/lib/site';

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Notes', to: '/blog' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on route change and on Escape.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'font-medium transition-colors py-1',
      isActive ? 'text-[var(--ink)] underline underline-offset-[0.4em] decoration-[var(--sage)]' : 'text-[var(--warm-gray)] hover:text-[var(--ink)]',
    );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-300',
        scrolled || open
          ? 'bg-[var(--cream)]/92 backdrop-blur-md border-b border-[var(--line)]'
          : 'border-b border-transparent',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Zeeshan Hameed, home" className="shrink-0 rounded-md">
          <Logo size="md" showTagline />
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-[0.9375rem]" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a href={CONTACT_HREF} className="btn !min-h-0 !py-2 !px-4 !text-sm">
            {CTA_LABEL}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="sm:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-[var(--ink)] hover:bg-[var(--sage-wash)] transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu: opens on a tap, so the motion answers the action. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden overflow-hidden"
          >
            <nav className="px-5 pt-2 pb-5 flex flex-col border-t border-[var(--line)] mt-2" aria-label="Mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'py-3.5 text-lg border-b border-[var(--line)] font-medium transition-colors',
                      isActive ? 'text-[var(--sage-deep)]' : 'text-[var(--ink)] hover:text-[var(--sage-deep)]',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={CONTACT_HREF} className="btn mt-5 w-full">
                {CTA_LABEL}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
