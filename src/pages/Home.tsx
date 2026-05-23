import { useEffect } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { AINative } from '@/components/sections/AINative';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { PastWork } from '@/components/sections/PastWork';
import { Testimonials } from '@/components/sections/Testimonials';
import { Timeline } from '@/components/sections/Timeline';
import { Work } from '@/components/sections/Work';
import { useSmoothScrollToHash } from '@/hooks/useSmoothScrollToHash';
import { site } from '@/data/site';

export function Home() {
  useSmoothScrollToHash();

  useEffect(() => {
    document.title = `${site.name} — ${site.role}`;
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AINative />
        <Work />
        <PastWork />
        <Testimonials />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
