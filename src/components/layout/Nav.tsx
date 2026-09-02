import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolled } from '@/hooks/useScrolled';

type NavProps = {
  /** Keep nav in scrolled state (case-study pages). */
  alwaysScrolled?: boolean;
  /** Use the minimal nav (case-study pages — only Let's Talk). */
  minimal?: boolean;
};

export function Nav({ alwaysScrolled = false, minimal = false }: NavProps) {
  const scrolled = useScrolled(50);
  const active = useActiveSection(['ai-native', 'work', 'testimonials', 'timeline']);
  const [menuOpen, setMenuOpen] = useState(false);

  const isScrolled = alwaysScrolled || scrolled;

  // Body scroll lock when mobile menu open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollHomeToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <nav className={`nav${isScrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Home" onClick={scrollHomeToTop}>
            <img src="assets/Andrea-icon.png" alt="" className="nav-logo-img" />
          </Link>

          {minimal ? (
            <div className="nav-links">
              <a href="mailto:andreaglavin@gmail.com" className="nav-cta">
                Let's Talk
              </a>
            </div>
          ) : (
            <div className="nav-links">
              <a href="#ai-native" className={active === 'ai-native' ? 'nav-active' : ''}>
                AI-Native
              </a>
              <a href="#work" className={active === 'work' ? 'nav-active' : ''}>
                Work
              </a>
              <a href="#testimonials" className={active === 'testimonials' ? 'nav-active' : ''}>
                Testimonials
              </a>
              <a href="#timeline" className={active === 'timeline' ? 'nav-active' : ''}>
                Experience
              </a>
              <a href="mailto:andreaglavin@gmail.com" className="nav-cta">
                Let's Talk
              </a>
            </div>
          )}

          <button
            className="nav-mobile-toggle"
            id="navToggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#ai-native" onClick={() => setMenuOpen(false)}>AI-Native</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Let's Talk</a>
      </div>
    </>
  );
}
