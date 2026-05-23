import { useEffect, useState } from 'react';

/**
 * Returns true once the window has scrolled past `threshold` pixels.
 * Drives the nav's translucent-on-scroll state.
 */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > threshold : false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
