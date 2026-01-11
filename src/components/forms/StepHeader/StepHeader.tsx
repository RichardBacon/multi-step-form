import styles from './StepHeader.module.css';

const StepHeader = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Personal Info</h1>
      <p className={styles.subheading}>
        Please provide your name, email address and phone number.
      </p>
    </div>
  );
};

export default StepHeader;
