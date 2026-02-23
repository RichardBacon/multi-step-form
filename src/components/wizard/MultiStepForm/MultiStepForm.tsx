import { useState } from 'react';
import { type PersonalInfo } from '../../../types';
import StepLayout from '../StepLayout/StepLayout';
import StepProgress from '../StepProgress/StepProgress';
import styles from './MultiStepForm.module.css';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
  });
  const [selectedPlan, setSelectedPlan] = useState('arcade');

  const handleNextStep = () => {
    setCurrentStep((s) => s + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((s) => s - 1);
  };

  return (
    <div className={styles.root}>
      <StepProgress currentStep={currentStep} />
      <StepLayout
        currentStep={currentStep}
        onNextStep={handleNextStep}
        onBackStep={handleBackStep}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
    </div>
  );
};

export default MultiStepForm;
