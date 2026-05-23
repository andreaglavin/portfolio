import { useEffect, useRef } from 'react';

/**
 * Attaches a subtle radial-gradient cursor glow to a card-style element on hover.
 * Reset on mouse leave. Returns a ref to attach to the target.
 */
export function useCardGlow<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.04), transparent 60%)`;
    };

    const onLeave = () => {
      el.style.background = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}
