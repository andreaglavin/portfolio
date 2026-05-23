import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';
import { TagList } from '@/components/ui/TagList';

import styles from './CaseStudyHero.module.css';

export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

type CaseStudyHeroProps = {
  title: string;
  subtitle?: string;
  intro: string;
  tags: ReadonlyArray<string>;
  meta?: ReadonlyArray<CaseStudyMetaItem>;
};

export function CaseStudyHero({ title, subtitle, intro, tags, meta }: CaseStudyHeroProps) {
  return (
    <>
      <header className={styles.hero}>
        <Container>
          <Link to="/#work" className={styles.back}>
            ← Back to Work
          </Link>
          <TagList tags={tags} />
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <p className={styles.intro}>{intro}</p>
        </Container>
      </header>

      {meta && meta.length > 0 && (
        <div className={styles.metaBar}>
          <Container>
            <div className={styles.metaGrid}>
              {meta.map((item) => (
                <div key={item.label} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{item.label}</span>
                  <span className={styles.metaValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
