import type { MouseEvent } from 'react';

export function backToWorkSection(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  if (window.location.hash !== '#/') {
    window.location.hash = '#/';
  }
  setTimeout(() => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}
