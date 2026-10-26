import { Button } from '@/components/blueprint';

// "The demo is the easy part" is the hero line, so this section is named for what it argues.
export default function WhyProduction() {
  return (
    <section id="about" aria-labelledby="why-heading" className="mx-auto w-full max-w-wrap scroll-mt-6 px-6 pb-16 md:pb-[104px]">
      <div className="flex flex-wrap gap-12 border-t-2 border-ink pt-5">
        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="mono-label shrink-0">03</span>
            <h2 id="why-heading" className="t-h2">
              Why production is the real work
            </h2>
          </div>
          <img
            src="/profile-photo.jpg"
            alt="Zeeshan Hameed, full-stack AI engineer"
            width={877}
            height={877}
            loading="lazy"
            className="h-[260px] w-[220px] -rotate-[1.5deg] border-2 border-ink object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-[1.4_1_420px] flex-col gap-[18px]">
          <p className="prose-body !text-[18px]">
            A prototype shows that an idea can work. A product has to keep working with paying customers,
            messy data and providers that go down at inconvenient moments. That second part is most
            of what I do, and there is one named person accountable for it.
          </p>
          <p className="prose-body !mt-0 !text-[18px]">
            I&apos;m Zeeshan, a full-stack AI engineer with a B.S. in Artificial Intelligence. I
            build the AI layer, the backend, the web app and the mobile app, and I stay to run it
            after launch.
          </p>
          <Button to="/about" variant="link" className="self-start">
            More about how I work →
          </Button>
        </div>
      </div>
    </section>
  );
}
