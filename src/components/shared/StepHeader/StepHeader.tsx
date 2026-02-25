import { forwardRef } from 'react';
import styles from './StepHeader.module.css';

interface StepHeaderProps {
  heading: string;
  subheading?: string;
}

const StepHeader = forwardRef<HTMLHeadingElement | null, StepHeaderProps>(
  ({ heading, subheading }, ref) => {
    return (
      <div className={styles.root}>
        <h1 ref={ref} className={styles.heading} tabIndex={-1}>
          {heading}
        </h1>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
      </div>
    );
  },
);

StepHeader.displayName = 'StepHeader';

export default StepHeader;
