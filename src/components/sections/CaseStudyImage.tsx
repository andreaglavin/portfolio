import styles from './CaseStudyImage.module.css';

type CaseStudyImageProps = {
  src: string;
  alt: string;
  /** Full-bleed banner image between sections. */
  fullBleed?: boolean;
  /** Constrain max-height for inline decision media. */
  constrained?: boolean;
};

export function CaseStudyImage({ src, alt, fullBleed, constrained }: CaseStudyImageProps) {
  if (fullBleed) {
    return (
      <div className={styles.fullBleed}>
        <img src={src} alt={alt} className={styles.img} />
      </div>
    );
  }
  return <img src={src} alt={alt} className={[styles.inline, constrained && styles.constrained].filter(Boolean).join(' ')} />;
}

type BeforeAfterProps = {
  before: { src: string; alt: string; label: string };
  after: { src: string; alt: string; label: string };
};

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className={styles.fullBleed}>
      <div className={styles.beforeAfter}>
        <figure className={styles.baItem}>
          <figcaption className={styles.baLabel}>{before.label}</figcaption>
          <img src={before.src} alt={before.alt} className={styles.baImg} />
        </figure>
        <figure className={styles.baItem}>
          <figcaption className={styles.baLabel}>{after.label}</figcaption>
          <img src={after.src} alt={after.alt} className={styles.baImg} />
        </figure>
      </div>
    </div>
  );
}
