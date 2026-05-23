import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';

import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <Container>
        <SectionHeader label="What People Say" title="Testimonials" />

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <FadeIn
              key={t.id}
              className={[styles.card, t.featured && styles.featured].filter(Boolean).join(' ')}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              as="figure"
            >
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <figcaption className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.initials}
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </figcaption>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
