import { useState } from 'react';
import {
  type AddOnId,
  type BillingCycle,
  type PersonalInfo,
  type PlanId,
} from '../../../types';
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
  const [planId, setPlanId] = useState<PlanId>('arcade');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [addOnIds, setAddOnIds] = useState<AddOnId[]>([]);

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
        planId={planId}
        setPlanId={setPlanId}
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
        addOnIds={addOnIds}
        setAddOnIds={setAddOnIds}
      />
    </div>
  );
};

export default MultiStepForm;
