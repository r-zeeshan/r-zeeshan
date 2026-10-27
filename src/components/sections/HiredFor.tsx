// Where a build usually stops and where I carry on: four stages, the last one dark.
const stages = [
  { n: '1', title: 'Idea', body: 'Scope it into features you can test' },
  { n: '2', title: 'Build', body: 'AI layer, backend, web and mobile' },
  { n: '3', title: 'Launch', body: 'Auth, payments and deployment done properly' },
  { n: '4 · I stay here', title: 'Run', body: 'Fixes, and the next features after launch', here: true },
];

export default function HiredFor() {
  return (
    <section aria-labelledby="hired-heading" className="bg-sunk">
      <div className="mx-auto w-full max-w-wrap px-6 py-12 md:py-14">
        <h2 id="hired-heading" className="text-[clamp(24px,2.4vw,30px)] font-bold leading-tight tracking-[-0.02em]">
          Where most builds stop, and where I stay
        </h2>
        <p className="mt-1 text-[15px] text-ink-2">Same person from the first line of code to the running product</p>
        <ol className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stages.map((s, i) => (
            <li
              key={s.title}
              className={`relative flex min-w-0 flex-col gap-1 rounded-[20px] px-[22px] py-5 shadow-card ${
                s.here ? 'bg-ink text-paper' : 'bg-surface'
              }`}
            >
              <span className={`text-[14px] font-medium ${s.here ? 'text-band-muted' : 'text-ink-2'}`}>{s.n}</span>
              <b className="text-[20px] leading-tight tracking-[-0.01em]">{s.title}</b>
              <span className={`text-[15px] leading-snug ${s.here ? 'text-band-muted' : 'text-ink-2'}`}>{s.body}</span>
              {i < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-8px] top-1/2 z-[2] hidden h-7 w-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-paper text-[15px] font-semibold text-ink shadow-card md:flex"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
