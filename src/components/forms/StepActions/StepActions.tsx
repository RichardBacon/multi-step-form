import type { ReactNode } from 'react';
import styles from './StepActions.module.css';

interface StepActionsProps {
  children: ReactNode;
}
const StepActions = ({ children }: StepActionsProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default StepActions;
