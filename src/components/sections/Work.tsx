import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stat } from '@/components/ui/Stat';
import { TagList } from '@/components/ui/TagList';
import { featuredWork } from '@/data/work';

import styles from './Work.module.css';

export function Work() {
  return (
    <section className={styles.section} id="work">
      <Container>
        <SectionHeader
          label="Selected Work"
          title="Work Highlights"
          subtitle="A selection of projects where design thinking and execution drove measurable impact."
        />

        <div className={styles.grid}>
          {featuredWork.map((project, index) => (
            <FadeIn key={project.id} className={styles.card} as="article">
              <div className={[styles.layout, index % 2 === 1 && styles.layoutReverse].filter(Boolean).join(' ')}>
                <div className={styles.imageWrap}>
                  <div className={styles.imageInner}>
                    <img src={project.image} alt={project.imageAlt} className={styles.image} />
                  </div>
                  {project.caseStudyPath && (
                    <div className={styles.overlay}>
                      <Button as="a" href={`#${project.caseStudyPath}`} variant="primary">
                        See the Case Study →
                      </Button>
                    </div>
                  )}
                </div>

                <div className={styles.content}>
                  <TagList tags={project.tags} />
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.stats}>
                    {project.stats.map((stat) => (
                      <Stat key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                  </div>
                  {project.caseStudyPath && (
                    <Link to={project.caseStudyPath} className={styles.cta}>
                      See the Case Study →
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
