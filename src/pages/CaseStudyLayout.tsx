import { useEffect, type ReactNode } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';

export function CaseStudyLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = title;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title]);

  return (
    <>
      <Nav alwaysScrolled minimal />
      <article className="case-study">{children}</article>
      <Footer />
    </>
  );
}
