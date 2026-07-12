import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import CTAButton from '@/components/ui/CTAButton';

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Notes', to: '/blog' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-2 bg-[var(--cream)]/85 backdrop-blur-md border-b border-[var(--line)]'
          : 'py-4 border-b border-transparent',
      )}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Home" className="relative z-10 shrink-0">
          <Logo size="md" showTagline />
        </Link>

        <nav className="hidden sm:flex items-center gap-7" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-[var(--sage-deep)]'
                    : 'text-[var(--warm-gray)] hover:text-[var(--ink)]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <CTAButton label="Book a call" className="text-sm shrink-0" />
      </div>
    </motion.header>
  );
}
