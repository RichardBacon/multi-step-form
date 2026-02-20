import styles from './StepHeader.module.css';

interface StepHeaderProps {
  heading: string;
  subheading?: string;
}

const StepHeader = ({ heading, subheading }: StepHeaderProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>{heading}</h1>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
    </div>
  );
};

export default StepHeader;
