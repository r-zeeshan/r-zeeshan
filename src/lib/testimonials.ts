// Real client reviews (Upwork). Do not invent or edit the wording, and always show `text`
// in full; a blank line in `text` starts a new paragraph. Names attributed by role where the
// client name was not provided. Source for the current wording: auxonai docs/launch-proof.md.

export interface Quote {
  text: string;
  author: string;
  role: string;
}

export const quotes: Quote[] = [
  {
    text: 'I worked with Zeeshan on multiple AI-driven healthcare applications, and he was a reliable and highly capable development partner throughout. Strong ownership, clear communication, and a solid understanding of product goals beyond just implementation. I would recommend him to any team as a true product partner.',
    author: 'Health-tech founder',
    role: 'Long-term partnership',
  },
  {
    text: 'Working with Zeeshan was an incredible experience from start to finish. He took my vision for CuePilates, a fully AI-powered Pilates class planning platform, and built it into a real, live product with paying subscribers. That\'s not a small thing.\n\nHe handled everything: Supabase, Vercel, Stripe payments, Anthropic API integration, authentication, security hardening, and more. The architecture he built is clean, scalable, and production-ready. When challenges came up, he problem-solved without drama and kept things moving.\n\nWhat stood out most was his ability to take my direction and run with it. I came in with strong product opinions and zero coding background. He never made me feel out of place for that. He translated my ideas into real features, milestone after milestone.\n\nIf you\'re a founder who needs a developer you can actually trust to help you build something real, Zeeshan is your guy. Highly, highly recommend.',
    author: 'Tess Bartoli',
    role: 'Founder, CuePilates',
  },
  {
    text: 'We highly recommend Zeeshan for AI-related development work. He successfully built an AI Agent for our Certification Support system, delivering high-quality results with efficiency and professionalism. Zeeshan was proactive, responsive, and a pleasure to work with, an asset to any team.',
    author: 'Aaron Phillips',
    role: 'CEO, Green Earth',
  },
];
