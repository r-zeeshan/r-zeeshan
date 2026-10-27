// Central site config. Keep every link and label pointing here so they stay consistent.

// Job title, used in the header, hero, SEO and JSON-LD.
export const TITLE = 'Full-Stack AI Engineer';

// One-line positioning, shared by the hero, footer and meta descriptions.
export const POSITIONING = 'I build AI products from idea to production.';

// The booking path (Calendly): the header button, the hero and the closing block.
export const BOOKING_LINK = 'https://calendly.com/rzeeshan/free-demo-or-launch-review-call';
export const BOOKING_LABEL = 'Book a call';

// Studio site. Linked from the footer only.
export const AUXON_URL = 'https://auxonai.com';

// The studio's free-demo page (link in the closing card).
export const LAUNCH_URL = `${AUXON_URL}/launch`;
export const LAUNCH_LABEL = 'Get a free demo of your app idea';

// Resume lives in /public.
export const RESUME_HREF = '/zeeshan-hameed-resume.pdf';
export const RESUME_LABEL = 'Resume (PDF)';

// Social / proof links.
export const LINKS = {
  upwork: 'https://www.upwork.com/freelancers/~01e1f21ebe6cbf41ea',
  linkedin: 'https://linkedin.com/in/r-zeeshan',
  github: 'https://github.com/r-zeeshan',
  email: 'zeeshan@auxonai.com',
} as const;

export const CONTACT_HREF = `mailto:${LINKS.email}`;

// Upwork proof shown in the hero, linking to the profile. Verified against the Upwork profile on
// 2026-10-26 (auxonai docs/launch-proof.md). Update the numbers only from the live profile.
export const UPWORK_PROOF = 'Top Rated Plus, 21 jobs, 14 reviews, $70K+ earned';

// Credibility line shown under the hero. Only claims that can be backed up.
export const CREDENTIALS = [
  'B.S. in Artificial Intelligence',
  'Founder of Auxon AI',
] as const;
