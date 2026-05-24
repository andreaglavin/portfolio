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

/**
 * Apply the fade-in, parallax, and card-glow runtime behaviors from the
 * original script.js — same selectors, same staggered delays, same observer.
 */
function useOriginalScriptEffects() {
  useEffect(() => {
    const animatableSelectors = [
      '.section-header',
      '.ai-philosophy-card',
      '.ai-tool-item',
      '.ai-process-step',
      '.work-card',
      '.past-work-card',
      '.testimonial-card',
      '.timeline-item',
      '.contact-content',
      '.hero-text',
      '.hero-image',
    ];

    animatableSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('fade-in');
        if (
          selector.includes('ai-philosophy') ||
          selector.includes('ai-tool') ||
          selector.includes('ai-process') ||
          selector.includes('testimonial')
        ) {
          el.classList.add(`fade-in-delay-${(i % 4) + 1}`);
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px -30px 0px' },
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });

    // Parallax on hero image
    const heroImage = document.querySelector<HTMLElement>('.hero-image');
    const onScrollParallax = () => {
      if (!heroImage) return;
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', onScrollParallax, { passive: true });

    // Card cursor-glow effect
    const cards = document.querySelectorAll<HTMLElement>(
      '.work-card, .ai-philosophy-card, .testimonial-card, .timeline-card',
    );
    const moveHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.04), transparent 60%)`;
      };
      const leave = () => {
        card.style.background = '';
      };
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      moveHandlers.set(card, move);
      leaveHandlers.set(card, leave);
    });

    return () => {
      window.removeEventListener('scroll', onScrollParallax);
      observer.disconnect();
      cards.forEach((card) => {
        const m = moveHandlers.get(card);
        const l = leaveHandlers.get(card);
        if (m) card.removeEventListener('mousemove', m);
        if (l) card.removeEventListener('mouseleave', l);
      });
    };
  }, []);
}

export function Home() {
  useSmoothScrollToHash();
  useOriginalScriptEffects();

  useEffect(() => {
    document.title = 'Andrea Gomez Lavin — Product Designer';
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <AINative />
      <Work />
      <PastWork />
      <Testimonials />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
