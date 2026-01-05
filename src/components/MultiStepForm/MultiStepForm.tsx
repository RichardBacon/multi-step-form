import StepProgress from '../StepProgress/StepProgress';
import styles from './MultiStepForm.module.css';

const MultiStepForm = () => {
  return (
    <div className={styles.root}>
      <StepProgress />
    </div>
  );
};

export default MultiStepForm;
