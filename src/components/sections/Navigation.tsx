import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import CTAButton from '@/components/ui/CTAButton';

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
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#top" aria-label="Home" className="relative z-10">
          <Logo size="md" showTagline />
        </a>
        <CTAButton label="Book a call" className="text-sm" />
      </div>
    </motion.header>
  );
}
