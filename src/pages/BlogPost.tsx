import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import GetInTouch from '@/components/sections/GetInTouch';
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

      <article className="px-5 sm:px-8 pt-32 md:pt-40 pb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 meta hover:text-[var(--ink)] transition-colors rounded-md"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All notes
          </Link>

          <h1 className="t-h1 mt-8 max-w-3xl">{post.title}</h1>
          <p className="meta mt-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            , {post.readingMinutes} min read
          </p>

          <div className="mt-10">
            {post.body.map((p, i) => (
              <p key={i} className="prose-body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </article>

      <GetInTouch />
    </>
  );
}
