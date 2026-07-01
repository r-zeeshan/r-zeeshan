import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, ListChecks, KeyRound, Lock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CTAButton from '@/components/ui/CTAButton';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const assurances = [
  { icon: ShieldCheck, label: "Prototype in 2 weeks or you don't pay" },
  { icon: ListChecks, label: 'Approve each phase before you pay' },
  { icon: KeyRound, label: 'You own all the code' },
  { icon: Lock, label: 'Secure, encrypted data' },
];

// EmailJS config (public, client-side by design).
const EMAILJS_PUBLIC_KEY = 'FUQSFheIW1IootqyQ';
const EMAILJS_SERVICE_ID = 'service_hfiwb6l';
const EMAILJS_TEMPLATE_ID = 'template_2c2i1cm';

emailjs.init(EMAILJS_PUBLIC_KEY);

export default function FinalCTA() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: data.name,
        from_email: data.email,
        subject: 'New lead from r-zeeshan.dev',
        message: data.message,
      });
      setStatus('success');
      setData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setError('Something went wrong. You can also email zeeshan@auxonai.com directly.');
    }
  };

  return (
    <section id="contact" className="px-5 py-24 md:py-32 section-alt border-t border-[var(--line)] scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Let&apos;s build it
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="heading-brutal heading-lg mt-4"
        >
          Book the call. Get the <span className="accent-italic">plan</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lead mt-5"
        >
          A free discovery call. You leave with a one-page plan, even if we never work together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-9"
        >
          <CTAButton size="lg" />
        </motion.div>

        {/* Risk-reversal assurances, right at the decision point */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5"
        >
          {assurances.map((a) => (
            <span key={a.label} className="inline-flex items-center gap-1.5 text-sm text-[var(--warm-gray)]">
              <a.icon size={15} className="text-[var(--sage)] shrink-0" />
              {a.label}
            </span>
          ))}
        </motion.div>

        {/* Optional fallback form */}
        <div className="mt-14 pt-10 border-t border-[var(--line)]">
          {status === 'success' ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--sage-wash)] text-[var(--sage-deep)] flex items-center justify-center">
                <Check size={22} strokeWidth={2.5} />
              </div>
              <p className="font-display text-xl text-[var(--ink)] mt-4">Got it. We&apos;ll reply within 24 hours.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-[var(--muted)] mb-5">Prefer to type it out? Tell us about your product.</p>
              <form onSubmit={onSubmit} className="space-y-3 text-left">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input name="name" value={data.name} onChange={onChange} placeholder="Your name" required className="input-cyber" />
                  <input name="email" type="email" value={data.email} onChange={onChange} placeholder="you@company.com" required className="input-cyber" />
                </div>
                <input name="message" value={data.message} onChange={onChange} placeholder="One line about your product" required className="input-cyber" />
                {status === 'error' && <p className="text-sm text-[var(--coral)]">{error}</p>}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{status === 'submitting' ? 'Sending…' : 'Send it over'}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
