import { Tag } from './Tag';
import styles from './TagList.module.css';

export function TagList({ tags }: { tags: ReadonlyArray<string> }) {
  return (
    <div className={styles.list}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
