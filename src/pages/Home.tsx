import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import HiredFor from '@/components/sections/HiredFor';
import SelectedWork from '@/components/sections/SelectedWork';
import WhyProduction from '@/components/sections/WhyProduction';
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
      <HiredFor />
      <SelectedWork />
      <WhyProduction />
      <GetInTouch />
    </>
  );
}
