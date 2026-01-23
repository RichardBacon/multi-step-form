import { clsx } from 'clsx';
import styles from './Toggle.module.css';

interface ToggleProps {
  leftLabel?: string;
  rightLabel?: string;
  activeOption?: 'left' | 'right';
}

const Toggle = ({
  leftLabel = 'Option 1',
  rightLabel = 'Option 2',
  activeOption = 'right',
}: ToggleProps) => {
  const isLeftActive = activeOption === 'left';

  return (
    <div className={styles.root}>
      <div className={clsx(styles.label, isLeftActive && styles.active)}>
        {leftLabel}
      </div>
      <div className={clsx(styles.switch, isLeftActive && styles.left)}>
        <div className={styles.thumb}></div>
      </div>
      <div className={clsx(styles.label, !isLeftActive && styles.active)}>
        {rightLabel}
      </div>
    </div>
  );
};

export default Toggle;
