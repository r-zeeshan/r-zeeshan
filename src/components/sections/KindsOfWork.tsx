// The three kinds of work I get hired for. Prose rows, not numbered cards.
const kinds = [
  {
    title: 'Adding AI to a product that already exists',
    body: 'LLM features, chat, document AI and agents, built into the product your users already have rather than bolted on beside it.',
  },
  {
    title: 'Building a SaaS or MVP end to end',
    body: 'Auth, payments and deployment done properly, so the first real users are not the ones who find the gaps.',
  },
  {
    title: 'Taking over an app that keeps breaking',
    body: 'Finding why it falls over, fixing the causes instead of the symptoms, and leaving it stable.',
  },
];

export default function KindsOfWork() {
  return (
    <section aria-labelledby="kinds-heading" className="px-5 sm:px-8 py-16 md:py-24 band">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-20">
        <h2 id="kinds-heading" className="t-h2 max-w-[14ch]">
          What I get hired for
        </h2>
        <ul>
          {kinds.map((k, i) => (
            <li key={k.title} className={i === 0 ? 'pb-8' : 'py-8 rule-top border-[var(--line-strong)]'}>
              <h3 className="t-h3">{k.title}</h3>
              <p className="prose-body mt-2">{k.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
