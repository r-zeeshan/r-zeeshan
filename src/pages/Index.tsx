import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import WhyMe from '@/components/sections/WhyMe';
import OfferIntro from '@/components/sections/OfferIntro';
import Problem from '@/components/sections/Problem';
import Guarantee from '@/components/sections/Guarantee';
import HowItWorks from '@/components/sections/HowItWorks';
import ValueStack from '@/components/sections/ValueStack';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Calm cream canvas with soft sage washes */}
      <div className="bg-cyber" aria-hidden="true">
        <div className="neon-orb neon-orb-1" />
        <div className="neon-orb neon-orb-2" />
        <div className="neon-orb neon-orb-3" />
      </div>
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />
      <main>
        {/* Person-first: you, your work, your story, then the offer */}
        <Hero />
        <Work />
        <WhyMe />
        {/* Work-with-me: the Production Sprint, introduced through you */}
        <OfferIntro />
        <Problem />
        <Guarantee />
        <HowItWorks />
        <ValueStack />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
