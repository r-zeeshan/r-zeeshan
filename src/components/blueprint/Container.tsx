import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** The 1296px page column with 24px gutters. */
export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-wrap px-6', className)}>{children}</div>;
}
