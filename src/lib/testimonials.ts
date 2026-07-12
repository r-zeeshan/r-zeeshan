// Real client reviews (Upwork). Do not invent or edit the wording. Names attributed
// by role where the client name was not provided.

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
    text: 'Zeeshan took my vision for CuePilates, a fully AI-powered Pilates class planning platform, and built it into a real, live product with paying subscribers. He handled Supabase, Vercel, Stripe, the Anthropic API, auth, and security hardening. I came in with zero coding background, and he translated my ideas into real features, milestone after milestone. If you need a developer you can actually trust, Zeeshan is your guy.',
    author: 'Founder, CuePilates',
    role: 'Idea to launch',
  },
  {
    text: 'We highly recommend Zeeshan for AI-related development work. He built an AI agent for our certification support system, delivering high-quality results with efficiency and professionalism. Proactive, responsive, and a pleasure to work with, an asset to any team.',
    author: 'Aaron Phillips',
    role: 'CEO, Green Earth',
  },
];
