import styles from './Stat.module.css';

type StatProps = {
  value: string;
  label: string;
  size?: 'small' | 'medium';
};

export function Stat({ value, label, size = 'medium' }: StatProps) {
  return (
    <div className={[styles.stat, size === 'small' && styles.small].filter(Boolean).join(' ')}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
