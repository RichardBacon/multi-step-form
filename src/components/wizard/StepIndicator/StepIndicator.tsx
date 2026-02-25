import { clsx } from 'clsx';
import styles from './StepIndicator.module.css';

interface StepIndicatorProps {
  step: number;
  title: string;
  active: boolean;
  completed: boolean;
}

const StepIndicator = ({
  step,
  title,
  active,
  completed,
}: StepIndicatorProps) => {
  const statusLabel = active
    ? ', current step'
    : completed
      ? ', completed'
      : '';

  return (
    <div className={styles.root} aria-current={active ? 'step' : undefined}>
      <span className={clsx(styles.icon, active && styles.iconActive)}>
        {step}
        <span className={styles.srOnly}>{statusLabel}</span>
      </span>
      <div className={styles.text}>
        <span className={styles.textStep}>Step {step}</span>
        <span className={styles.textDescription}>{title}</span>
      </div>
    </div>
  );
};

export default StepIndicator;
