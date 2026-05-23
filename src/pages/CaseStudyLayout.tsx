import { useEffect, type ReactNode } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { CaseStudyHero, type CaseStudyMetaItem } from '@/components/sections/CaseStudyHero';
import { CaseStudyNav } from '@/components/sections/CaseStudyNav';

type CaseStudyLayoutProps = {
  documentTitle: string;
  title: string;
  subtitle?: string;
  intro: string;
  tags: ReadonlyArray<string>;
  meta?: ReadonlyArray<CaseStudyMetaItem>;
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
  children: ReactNode;
};

export function CaseStudyLayout({
  documentTitle,
  title,
  subtitle,
  intro,
  tags,
  meta,
  prev,
  next,
  children,
}: CaseStudyLayoutProps) {
  useEffect(() => {
    document.title = documentTitle;
    window.scrollTo({ top: 0 });
  }, [documentTitle]);

  return (
    <>
      <Nav alwaysScrolled hideAnchors />
      <article>
        <CaseStudyHero title={title} subtitle={subtitle} intro={intro} tags={tags} meta={meta} />
        {children}
        <CaseStudyNav prev={prev} next={next} />
      </article>
      <Footer />
    </>
  );
}
