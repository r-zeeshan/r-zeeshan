import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MotionConfig reducedMotion="user">
          <div className="min-h-screen relative">
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}
