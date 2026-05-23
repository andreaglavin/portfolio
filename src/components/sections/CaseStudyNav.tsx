import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';

import styles from './CaseStudyNav.module.css';

type CaseStudyNavProps = {
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
};

export function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <div className={styles.wrap}>
      <Container>
        <div className={styles.inner}>
          {prev ? (
            <Link to={prev.to} className={styles.btnSecondary}>
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={next.to} className={styles.btnPrimary}>
              {next.label} →
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
