import Seo from '@/components/Seo';
import { WorkCard } from '@/components/WorkCards';
import { Container } from '@/components/blueprint';
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

      <Container className="pb-16 pt-10 md:pb-[104px] md:pt-14">
        <header className="max-w-3xl">
          <h1 className="t-display">Products I&apos;ve built and shipped</h1>
          <p className="lead mt-5">
            Each one has a case study: the problem, what I built, the parts that were hard, and
            where it is now.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 md:mt-16 [grid-template-columns:repeat(auto-fit,minmax(min(520px,100%),1fr))]">
          {caseStudies.map((cs) => (
            <li key={cs.slug} className="flex">
              <WorkCard cs={cs} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>

      <GetInTouch />
    </>
  );
}
