import { useState } from 'react';
import StepLayout from '../StepLayout/StepLayout';
import StepProgress from '../StepProgress/StepProgress';
import styles from './MultiStepForm.module.css';

const MultiStepForm = () => {
  const [currentStep] = useState(5);

  return (
    <div className={styles.root}>
      <StepProgress currentStep={currentStep} />
      <StepLayout currentStep={currentStep} />
    </div>
  );
};

export default MultiStepForm;
