import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-5 sm:px-8 py-16 md:py-24 band scroll-mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-20">
        <h2 id="about-heading" className="t-h2 max-w-[14ch]">
          The demo is the easy part
        </h2>
        <div>
          <p className="prose-body">
            A prototype shows that an idea can work. A product has to keep working with real users,
            messy data and providers that go down at inconvenient moments. That second part is most
            of what I do, and there is one named person accountable for it.
          </p>
          <p className="prose-body">
            I&apos;m Zeeshan, a full-stack AI engineer with a B.S. in Artificial Intelligence. I
            build the AI layer, the backend, the web app and the mobile app, and I stay to run it
            after launch.
          </p>
          <Link to="/about" className="link inline-flex items-center gap-1.5 mt-6">
            More about how I work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
