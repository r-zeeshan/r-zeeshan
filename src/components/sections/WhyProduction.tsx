import { Button } from '@/components/blueprint';
import Testimonials from '@/components/sections/Testimonials';

// "The demo is the easy part" is the hero line, so this section is named for what it argues.
// The client quote sits beside it, as in the v3 design.
export default function WhyProduction() {
  return (
    <section id="about" aria-labelledby="why-heading" className="scroll-mt-6 bg-surface">
      <div className="mx-auto grid w-full max-w-wrap items-center gap-10 px-6 py-14 md:py-[72px] lg:grid-cols-2 lg:gap-16">
        <div className="flex min-w-0 flex-col gap-5">
          <h2 id="why-heading" className="t-h2">
            Why production is the real work
          </h2>
          <p className="prose-body">
            A prototype shows that an idea can work. A product has to keep working with paying customers,
            messy data and providers that go down at inconvenient moments. That second part is most
            of what I do, and there is one named person accountable for it.
          </p>
          <p className="prose-body">
            I&apos;m Zeeshan, a full-stack AI engineer with a B.S. in Artificial Intelligence. I
            build the AI layer, the backend, the web app and the mobile app, and I stay to run it
            after launch.
          </p>
          <Button to="/about" variant="link" className="self-start">
            More about how I work →
          </Button>
        </div>
        <Testimonials />
      </div>
    </section>
  );
}
