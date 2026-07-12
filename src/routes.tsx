import type { RouteRecord } from 'vite-react-ssg';
import RootLayout from '@/components/RootLayout';
import Home from '@/pages/Home';
import WorkIndex from '@/pages/WorkIndex';
import CaseStudy from '@/pages/CaseStudy';
import About from '@/pages/About';
import BlogIndex from '@/pages/BlogIndex';
import BlogPost from '@/pages/BlogPost';
import NotFound from '@/pages/NotFound';
import { workPaths } from '@/lib/work';
import { blogPaths } from '@/lib/blog';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, entry: 'src/pages/Home.tsx' },
      { path: 'work', element: <WorkIndex />, entry: 'src/pages/WorkIndex.tsx' },
      {
        path: 'work/:slug',
        element: <CaseStudy />,
        entry: 'src/pages/CaseStudy.tsx',
        getStaticPaths: () => workPaths,
      },
      { path: 'about', element: <About />, entry: 'src/pages/About.tsx' },
      { path: 'blog', element: <BlogIndex />, entry: 'src/pages/BlogIndex.tsx' },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        entry: 'src/pages/BlogPost.tsx',
        getStaticPaths: () => blogPaths,
      },
      { path: '*', element: <NotFound />, entry: 'src/pages/NotFound.tsx' },
    ],
  },
];
