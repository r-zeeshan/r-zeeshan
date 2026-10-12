import Seo from '@/components/Seo';
import { WorkBody } from '@/components/WorkEntries';
import GetInTouch from '@/components/sections/GetInTouch';
import { caseStudies } from '@/lib/work';
import { absUrl, breadcrumbGraph, DEFAULT_OG_ALT } from '@/lib/seo';

const collectionGraph = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${absUrl('/work')}#collection`,
  name: 'Work by Zeeshan Hameed',
  description:
    'AI products built and shipped by Zeeshan Hameed, with a case study on the engineering behind each one.',
  url: absUrl('/work'),
};

export default function WorkIndex() {
  return (
    <>
      <Seo
        title="Work and case studies | Zeeshan Hameed, Full-Stack AI Engineer"
        description="Case studies on AI products I've built and shipped: a clinical AI platform, an AI SaaS taken from idea to launch, a certification platform, a mobile app with a doctor portal, a multi-model report engine, and a production rescue."
        path="/work"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={[
          collectionGraph,
          breadcrumbGraph([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
          ]),
        ]}
      />

      <section className="px-5 sm:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <header className="max-w-3xl">
            <h1 className="t-h1">Products I&apos;ve built and shipped</h1>
            <p className="lead mt-5">
              Each one has a case study: the problem, what I built, the parts that were hard, and
              where it is now.
            </p>
          </header>

          <div className="mt-14 md:mt-20">
            <WorkBody studies={caseStudies} />
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
