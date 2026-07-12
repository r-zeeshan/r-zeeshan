import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import WorkWithMe from '@/components/sections/WorkWithMe';
import NotFound from '@/pages/NotFound';
import { getPost } from '@/lib/blog';
import { absUrl, DEFAULT_OG_ALT } from '@/lib/seo';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const articleGraph = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absUrl(path)}#post`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: absUrl(path),
    author: { '@type': 'Person', '@id': `${absUrl('/')}#person`, name: 'Zeeshan Hameed' },
    mainEntityOfPage: absUrl(path),
  };

  return (
    <>
      <Seo
        title={`${post.title} | Zeeshan Hameed`}
        description={post.description}
        path={path}
        ogType="article"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={articleGraph}
      />

      <article className="px-5 pt-32 md:pt-40 pb-16">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--sage-deep)] transition-colors"
          >
            <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            All notes
          </Link>

          <div className="text-xs text-[var(--muted)] flex items-center gap-2 mt-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          <h1 className="heading-brutal heading-lg mt-3">{post.title}</h1>

          <div className="mt-8 space-y-5 text-[1.05rem] text-[var(--warm-gray)] leading-relaxed">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <WorkWithMe />
    </>
  );
}
