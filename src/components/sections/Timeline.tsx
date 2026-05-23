import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { timeline } from '@/data/timeline';

import styles from './Timeline.module.css';

export function Timeline() {
  return (
    <section className={styles.section} id="timeline">
      <Container>
        <SectionHeader label="Career Path" title="Experience" />

        <div className={styles.wrapper}>
          <div className={styles.line} aria-hidden="true" />
          {timeline.map((entry, i) => (
            <FadeIn key={entry.company + entry.date} className={styles.item} as="div">
              <div className={[styles.dot, i === 0 && styles.dotActive].filter(Boolean).join(' ')} aria-hidden="true" />
              <div className={styles.card}>
                <span className={styles.date}>{entry.date}</span>
                <h3 className={styles.role}>{entry.role}</h3>
                <span className={styles.company}>{entry.company}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
