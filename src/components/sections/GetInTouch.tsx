import { BOOKING_LABEL, BOOKING_LINK, CONTACT_HREF, LINKS } from '@/lib/site';

// The single quiet closing block. One sentence, the email, the one booking link.
export default function GetInTouch() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-5 sm:px-8 py-20 md:py-28 scroll-mt-20 rule-top">
      <div className="max-w-6xl mx-auto">
        <h2 id="contact-heading" className="t-h2 max-w-[28ch]">
          Building something with AI, or stuck on one that keeps breaking? Tell me where it&apos;s stuck.
        </h2>
        <p className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3 text-[1.0625rem]">
          <a href={CONTACT_HREF} className="link">
            {LINKS.email}
          </a>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="link">
            {BOOKING_LABEL}
          </a>
        </p>
      </div>
    </section>
  );
}
