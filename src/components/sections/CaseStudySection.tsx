import { type ReactNode } from 'react';

import { Container } from '@/components/ui/Container';

import styles from './CaseStudySection.module.css';

type Background = 'base' | 'alt' | 'elevated' | 'accent-subtle' | 'gradient';

type CaseStudySectionProps = {
  background?: Background;
  children: ReactNode;
  /** Skip the container wrapper if a child needs full-bleed layout. */
  fullBleed?: boolean;
  /** Extra className on the inner wrapper. */
  className?: string;
};

export function CaseStudySection({
  background = 'base',
  children,
  fullBleed = false,
  className,
}: CaseStudySectionProps) {
  const classes = [styles.section, styles[`bg-${background}`], className].filter(Boolean).join(' ');
  return (
    <section className={classes}>{fullBleed ? children : <Container>{children}</Container>}</section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className={styles.label}>{children}</span>;
}

export function CenteredHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className={styles.centered}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export function TwoColumn({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return <div className={[styles.twoCol, wide && styles.twoColWide].filter(Boolean).join(' ')}>{children}</div>;
}

export function Column({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={[styles.col, className].filter(Boolean).join(' ')}>{children}</div>;
}
