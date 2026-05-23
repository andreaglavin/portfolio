import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { site } from '@/data/site';

import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <FadeIn className={styles.text}>
          <p className={styles.label}>{site.role}</p>
          <h1 className={styles.title}>
            Designing products that people <em>love</em> to use.
          </h1>
          <p className={styles.description}>
            Hi! I'm Andrea — a product designer who loves untangling complex problems and using AI-native workflows to make tech feel seamless and human for everyone.
          </p>
          <div className={styles.actions}>
            <Button as="a" href="#work" variant="primary">
              View My Work
            </Button>
            <Button as="a" href={`mailto:${site.email}`} variant="secondary">
              Let's Talk
            </Button>
          </div>
        </FadeIn>

        <FadeIn className={styles.image} delay={1}>
          <div className={styles.imageWrapper}>
            <img src="assets/andy.jpg" alt="Andrea" className={styles.photo} />
          </div>
          <div className={styles.imageAccent} />
        </FadeIn>
      </div>
    </section>
  );
}
