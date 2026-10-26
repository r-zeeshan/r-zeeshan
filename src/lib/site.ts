// Central site config. Keep every link and label pointing here so they stay consistent.

// Job title, used in the header, hero, SEO and JSON-LD.
export const TITLE = 'Full-Stack AI Engineer';

// One-line positioning, shared by the hero, footer and meta descriptions.
export const POSITIONING = 'I build AI products from idea to production.';

// The booking path (Calendly): the header button, the hero and the closing block.
export const BOOKING_LINK = 'https://calendly.com/rzeeshan';
export const BOOKING_LABEL = 'Book a call';

// Studio site. Linked from the footer only.
export const AUXON_URL = 'https://auxonai.com';

// The studio's free-demo page (hero link). PLACEHOLDER: auxonai.com/launch returned 404 on 2026-10-26.
export const LAUNCH_URL = `${AUXON_URL}/launch`;
export const LAUNCH_LABEL = 'Have an app idea? Get a free demo';

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

// Upwork proof shown in the hero, linking to the profile. Only claims that can be backed up.
export const UPWORK_BADGE = ['Top Rated Plus', '100% Job Success'] as const;

// From the Upwork profile, checked 2026-10-26 (auxonai docs/launch-proof.md). Leave a value as
// null and the hero shows a marked placeholder in its place. Never estimate them.
// PLACEHOLDER: hours is not in the proof doc.
export const UPWORK_STATS: { jobs: string | null; hours: string | null; reviews: string | null } = {
  jobs: '21',
  hours: null,
  reviews: '14',
};

// Credibility line shown under the hero. Only claims that can be backed up.
export const CREDENTIALS = [
  'B.S. in Artificial Intelligence',
  'Founder of Auxon AI',
] as const;
