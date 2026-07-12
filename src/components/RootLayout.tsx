import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
        <div className="min-h-screen relative">
          {/* Calm cream canvas with soft sage washes */}
          <div className="bg-cyber" aria-hidden="true">
            <div className="neon-orb neon-orb-1" />
            <div className="neon-orb neon-orb-2" />
            <div className="neon-orb neon-orb-3" />
          </div>
          <div className="noise-overlay" aria-hidden="true" />

          <ScrollToTop />
          <Navigation />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
