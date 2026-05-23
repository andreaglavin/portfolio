import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view, based on scroll position.
 * `offset` is the height above which a section is considered active
 * (defaults to nav height + 100px breathing room).
 */
export function useActiveSection(sectionIds: ReadonlyArray<string>, offset = 172): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

    if (sections.length === 0) return;

    const update = () => {
      const scrollY = window.scrollY;
      let current: string | null = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].el.offsetTop - offset) {
          current = sections[i].id;
          break;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [sectionIds, offset]);

  return active;
}
