import { Button } from '@/components/blueprint';
import { BOOKING_LABEL, BOOKING_LINK, CONTACT_HREF, LAUNCH_LABEL, LAUNCH_URL, LINKS } from '@/lib/site';

// The dark closing card: one sentence, the booking link, the email, and the launch offer.
export default function GetInTouch() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto w-full max-w-wrap scroll-mt-6 px-6 py-12 md:py-14">
      <div className="on-band rounded-[28px] bg-band px-6 py-10 text-band-text sm:px-12 sm:py-12 lg:px-[72px]">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-3">
            <h2 id="contact-heading" className="t-h2 max-w-[640px]">
              Building something with AI, or stuck on one that keeps breaking?
            </h2>
            <p className="text-[18px] text-band-muted">Tell me where it&apos;s stuck.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-center">
            <Button href={BOOKING_LINK} external variant="accent" className="w-full sm:w-auto">
              {BOOKING_LABEL}
            </Button>
            <a
              href={CONTACT_HREF}
              className="inline-flex min-h-[44px] items-center font-semibold underline underline-offset-[5px]"
            >
              {LINKS.email}
            </a>
          </div>
        </div>
        <p className="mt-6 border-t border-band-line pt-6 text-[15px] text-band-muted">
          <a
            href={LAUNCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center font-semibold text-band-text underline underline-offset-4"
          >
            {LAUNCH_LABEL} →
          </a>
        </p>
      </div>
    </section>
  );
}
