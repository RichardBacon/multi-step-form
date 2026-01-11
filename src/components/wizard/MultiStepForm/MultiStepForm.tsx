import StepLayout from '../StepLayout/StepLayout';
import StepProgress from '../StepProgress/StepProgress';
import styles from './MultiStepForm.module.css';

const MultiStepForm = () => {
  return (
    <div className={styles.root}>
      <StepProgress />
      <StepLayout />
    </div>
  );
};

export default MultiStepForm;
