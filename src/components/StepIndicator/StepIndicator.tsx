import { clsx } from 'clsx';
import styles from './StepIndicator.module.css';

interface StepIndicatorProps {
  step: number;
  title: string;
  active: boolean;
}

const StepIndicator = ({ step, title, active }: StepIndicatorProps) => {
  return (
    <div className={styles.root}>
      <span className={clsx(styles.icon, active && styles.iconActive)}>
        {step}
      </span>
      <div className={styles.text}>
        <span className={styles.textStep}>Step {step}</span>
        <span className={styles.textDescription}>{title}</span>
      </div>
    </div>
  );
};

export default StepIndicator;
