import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

/** Resets scroll to top on client-side route changes (hash links still work). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function RootLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollToTop />
        <Navigation />
        <main id="main" tabIndex={-1} className="outline-none">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
