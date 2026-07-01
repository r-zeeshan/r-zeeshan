import SectionHeader from '@/components/ui/SectionHeader';

export default function OfferIntro() {
  return (
    <section id="work-with-me" className="px-5 pt-24 md:pt-32 pb-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Work with me"
          title="Want me to build yours?"
          accent="The Production Sprint."
          subtitle="The same way I built the products above: idea to launch, production-grade, with a named person accountable for it. Here is exactly how it works, and how I take the risk off you."
          align="center"
        />
      </div>
    </section>
  );
}
