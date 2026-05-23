import { useEffect } from 'react';

/**
 * Captures clicks on anchor links pointing to `#section-id` and smooth-scrolls
 * to them with a fixed offset (nav height). React Router's HashRouter uses the
 * URL hash for routing, so we intercept only links that target an existing
 * element on the page — those become scroll targets, not route navigations.
 */
export function useSmoothScrollToHash(offset = 72) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const id = href.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [offset]);
}
