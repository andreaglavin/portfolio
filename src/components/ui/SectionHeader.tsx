import { type ReactNode } from 'react';

import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      {label && <p className={styles.label}>{label}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
