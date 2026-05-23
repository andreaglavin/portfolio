import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TagList } from '@/components/ui/TagList';
import { pastWork } from '@/data/work';

import styles from './PastWork.module.css';

export function PastWork() {
  return (
    <section className={styles.section} id="past-work">
      <Container>
        <SectionHeader
          label="Earlier Projects"
          title="Past Work"
          subtitle="Selected projects from earlier in my career that shaped my design philosophy."
        />

        <div className={styles.grid}>
          {pastWork.map((project) => (
            <FadeIn key={project.id} className={styles.card} as="article">
              <div className={[styles.imageWrap, project.variant === 'tall' && styles.imageWrapTall].filter(Boolean).join(' ')}>
                <div className={[styles.imageInner, project.variant === 'tall' && styles.imageInnerTall].filter(Boolean).join(' ')}>
                  <img src={project.image} alt={project.imageAlt} className={[styles.image, project.variant === 'tall' && styles.imageTall].filter(Boolean).join(' ')} />
                </div>
              </div>
              <div className={styles.content}>
                <TagList tags={project.tags} />
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
