import { clsx } from 'clsx';
import styles from './Toggle.module.css';

interface ToggleProps {
  leftLabel?: string;
  rightLabel?: string;
  groupLabel?: string;
  activeOption?: 'left' | 'right';
  onChange?: (option: 'left' | 'right') => void;
}

const Toggle = ({
  leftLabel = 'Option 1',
  rightLabel = 'Option 2',
  groupLabel,
  activeOption = 'right',
  onChange,
}: ToggleProps) => {
  const isLeftActive = activeOption === 'left';

  const handleToggle = () => {
    onChange?.(isLeftActive ? 'right' : 'left');
  };

  return (
    <div
      className={styles.root}
      role="group"
      aria-label={groupLabel ?? `${leftLabel} or ${rightLabel}`}
    >
      <span
        className={clsx(styles.label, isLeftActive && styles.active)}
        aria-hidden="true"
      >
        {leftLabel}
      </span>
      <button
        type="button"
        role="switch"
        className={clsx(styles.switch, isLeftActive && styles.left)}
        onClick={handleToggle}
        aria-checked={!isLeftActive}
        aria-label={`${rightLabel} billing`}
      >
        <div className={styles.thumb} />
      </button>
      <span
        className={clsx(styles.label, !isLeftActive && styles.active)}
        aria-hidden="true"
      >
        {rightLabel}
      </span>
    </div>
  );
};

export default Toggle;
