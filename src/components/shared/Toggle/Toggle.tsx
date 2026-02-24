import { clsx } from 'clsx';
import styles from './Toggle.module.css';

interface ToggleProps {
  leftLabel?: string;
  rightLabel?: string;
  activeOption?: 'left' | 'right';
  onChange?: (option: 'left' | 'right') => void;
}

const Toggle = ({
  leftLabel = 'Option 1',
  rightLabel = 'Option 2',
  activeOption = 'right',
  onChange,
}: ToggleProps) => {
  const isLeftActive = activeOption === 'left';

  const handleToggle = () => {
    onChange?.(isLeftActive ? 'right' : 'left');
  };

  return (
    <div className={styles.root}>
      <div className={clsx(styles.label, isLeftActive && styles.active)}>
        {leftLabel}
      </div>
      <button
        type="button"
        className={clsx(styles.switch, isLeftActive && styles.left)}
        onClick={handleToggle}
        aria-pressed={!isLeftActive}
        aria-label={`Switch to ${isLeftActive ? rightLabel : leftLabel} billing`}
      >
        <div className={styles.thumb} />
      </button>
      <div className={clsx(styles.label, !isLeftActive && styles.active)}>
        {rightLabel}
      </div>
    </div>
  );
};

export default Toggle;
