import Seo from '@/components/Seo';
import SectionHeader from '@/components/ui/SectionHeader';
import CaseStudyCard from '@/components/CaseStudyCard';
import WorkWithMe from '@/components/sections/WorkWithMe';
import { caseStudies } from '@/lib/work';
import { absUrl, breadcrumbGraph, DEFAULT_OG_ALT } from '@/lib/seo';

const collectionGraph = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${absUrl('/work')}#collection`,
  name: 'Work by Zeeshan Hameed',
  description:
    'Production health and fitness AI products built by Zeeshan Hameed, with a case study on the engineering behind each one.',
  url: absUrl('/work'),
};

export default function WorkIndex() {
  return (
    <>
      <Seo
        title="Work & case studies | Zeeshan Hameed, health & fitness AI engineer"
        description="Case studies on production health and fitness AI I've shipped: a clinical AI platform for Korean medicine, a multi-model SOAP-note system, an AI Pilates SaaS, and a doctor-supervised diet app."
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

      <section className="px-5 pt-32 md:pt-40 pb-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Case studies"
            title="The products, and the"
            accent="engineering behind them"
            subtitle="Each build below is live and in real use. The case studies go into the hard production parts: reliability, security, payments, multi-model AI, and shipping fast without cutting corners."
          />

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WorkWithMe />
    </>
  );
}
