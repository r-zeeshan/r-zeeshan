import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import KindsOfWork from '@/components/sections/KindsOfWork';
import SelectedWork from '@/components/sections/SelectedWork';
import AboutTeaser from '@/components/sections/AboutTeaser';
import Testimonials from '@/components/sections/Testimonials';
import GetInTouch from '@/components/sections/GetInTouch';
import { personGraph, DEFAULT_OG_ALT, SITE_DESCRIPTION } from '@/lib/seo';
import { TITLE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <Seo
        title={`Zeeshan Hameed | ${TITLE}`}
        description={`${SITE_DESCRIPTION} See the products I've shipped.`}
        path="/"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={personGraph()}
      />
      <Hero />
      <KindsOfWork />
      <SelectedWork />
      <AboutTeaser />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
