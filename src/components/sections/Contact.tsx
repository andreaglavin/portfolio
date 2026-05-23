import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { site } from '@/data/site';

import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <Container>
        <FadeIn className={styles.content}>
          <p className={styles.label}>Let's Connect</p>
          <h2 className={styles.title}>Let's design with the user in mind. Get in touch.</h2>
          <p className={styles.description}>
            I'm always open to discussing new products and big ideas. Say hello!
          </p>
          <Button as="a" href={`mailto:${site.email}`} variant="primary" size="large">
            Contact Me
          </Button>
          <div className={styles.socials}>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.social}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
