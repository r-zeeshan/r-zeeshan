import { Button, Note } from '@/components/blueprint';
import { BOOKING_LABEL, BOOKING_LINK, CONTACT_HREF, LINKS } from '@/lib/site';

// The dark closing band: one sentence, the booking link, the email.
export default function GetInTouch() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="on-band scroll-mt-6 bg-band text-band-text">
      <div className="mx-auto flex w-full max-w-wrap flex-col gap-7 px-6 py-16 md:py-[88px]">
        <Note size={26} tone="band">
          start here
        </Note>
        <h2 id="contact-heading" className="max-w-[900px] text-[clamp(32px,4vw,56px)] font-bold leading-[1.08] tracking-[-0.025em] [text-wrap:balance]">
          Building something with AI, or stuck on one that keeps breaking? Tell me where it&apos;s stuck.
        </h2>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <Button href={BOOKING_LINK} external variant="inverse">
            {BOOKING_LABEL}
          </Button>
          <a
            href={CONTACT_HREF}
            className="inline-flex min-h-[44px] items-center text-[18px] underline underline-offset-[5px]"
          >
            {LINKS.email}
          </a>
        </div>
      </div>
    </section>
  );
}
