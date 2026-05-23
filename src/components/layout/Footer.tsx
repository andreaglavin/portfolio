import { site } from '@/data/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {site.copyrightYear} {site.name}</span>
        <span>Built with an AI-native workflow.</span>
      </div>
    </footer>
  );
}
