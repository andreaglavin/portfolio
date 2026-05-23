import { useState } from 'react';
import { Link } from 'react-router-dom';

import { mobileMenuLinks, navLinks, sectionIds, site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolled } from '@/hooks/useScrolled';
import { HomeIcon } from '@/components/icons/HomeIcon';

import styles from './Nav.module.css';

type NavProps = {
  /** When true, the nav stays in its scrolled (translucent) state. Used on case study pages. */
  alwaysScrolled?: boolean;
  /** Hide the section anchor links — e.g. on case-study pages where they're meaningless. */
  hideAnchors?: boolean;
};

export function Nav({ alwaysScrolled = false, hideAnchors = false }: NavProps) {
  const scrolled = useScrolled(50);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const isScrolled = alwaysScrolled || scrolled;

  return (
    <>
      <nav className={[styles.nav, isScrolled && styles.scrolled].filter(Boolean).join(' ')}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label={`${site.name} home`}>
            <HomeIcon />
          </Link>

          {!hideAnchors && (
            <div className={styles.links}>
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={[styles.link, isActive && styles.linkActive].filter(Boolean).join(' ')}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a href={`mailto:${site.email}`} className={styles.cta}>
                Let's Talk
              </a>
            </div>
          )}

          {hideAnchors && (
            <div className={styles.links}>
              <a href={`mailto:${site.email}`} className={styles.cta}>
                Let's Talk
              </a>
            </div>
          )}

          <button
            type="button"
            className={styles.mobileToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && !hideAnchors && (
        <div className={styles.mobileMenu}>
          {mobileMenuLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
