import { useEffect, useRef } from 'react';

/**
 * Adds the `visible` class to a ref once it intersects the viewport.
 * If the element is already in view on mount, it becomes visible immediately —
 * matching the behavior of the original vanilla script.
 */
export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
      return;
    }

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

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
