// Central site config. Keep every link and label pointing here so they stay consistent.

// Job title, used in the header, hero, SEO and JSON-LD.
export const TITLE = 'Full-Stack AI Engineer';

// One-line positioning, shared by the hero, footer and meta descriptions.
export const POSITIONING = 'I build AI products from idea to production.';

// The single booking path on the site (used only by the closing "Get in touch" block).
export const BOOKING_LINK = 'https://calendly.com/rzeeshan';
export const BOOKING_LABEL = 'Book a call';

// Studio site. Linked from the footer only.
export const AUXON_URL = 'https://auxonai.com';

// Contact label used by the header, hero and closing block.
export const CTA_LABEL = 'Get in touch';

// Resume lives in /public.
export const RESUME_HREF = '/zeeshan-hameed-resume.pdf';
export const RESUME_LABEL = 'Resume (PDF)';

// Social / proof links.
export const LINKS = {
  upwork: 'https://www.upwork.com/freelancers/aizeeshan',
  linkedin: 'https://linkedin.com/in/r-zeeshan',
  github: 'https://github.com/r-zeeshan',
  email: 'zeeshan@auxonai.com',
} as const;

export const CONTACT_HREF = `mailto:${LINKS.email}`;

// Credibility line shown under the hero. Only claims that can be backed up.
export const CREDENTIALS = [
  'Top Rated Plus on Upwork',
  '100% Job Success',
  'B.S. in Artificial Intelligence',
  'Founder of Auxon AI',
] as const;
