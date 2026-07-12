import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import WorkTeaser from '@/components/sections/WorkTeaser';
import AboutTeaser from '@/components/sections/AboutTeaser';
import Testimonials from '@/components/sections/Testimonials';
import WorkWithMe from '@/components/sections/WorkWithMe';
import { personGraph, DEFAULT_OG_ALT } from '@/lib/seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Zeeshan Hameed | Senior AI Engineer for Health & Fitness Products"
        description="I'm Zeeshan Hameed, a senior AI engineer who builds production health and fitness AI: clinical platforms, multi-model LLM systems, and cross-platform apps that ship and hold up. See my work."
        path="/"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={personGraph()}
      />
      <Hero />
      <WorkTeaser />
      <AboutTeaser />
      <Testimonials />
      <WorkWithMe />
    </>
  );
}
