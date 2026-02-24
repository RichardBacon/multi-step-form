import { useState } from 'react';
import {
  type AddOnId,
  type BillingCycle,
  type FormSubmission,
  type PersonalInfo,
  type PlanId,
} from '../../../types';
import StepLayout from '../StepLayout/StepLayout';
import StepProgress from '../StepProgress/StepProgress';
import styles from './MultiStepForm.module.css';

interface MultiStepFormProps {
  onSubmit?: (data: FormSubmission) => void;
}

const MultiStepForm = ({ onSubmit }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
  });
  const [planId, setPlanId] = useState<PlanId>('arcade');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [addOnIds, setAddOnIds] = useState<AddOnId[]>([]);

  const handleNextStep = () => setCurrentStep((s) => s + 1);
  const handleBackStep = () => setCurrentStep((s) => s - 1);
  const handleGoToStep = (step: 1 | 2 | 3 | 4) => setCurrentStep(step);

  const handlePersonalInfoChange = (
    field: keyof PersonalInfo,
    value: string,
  ) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectPlan = (id: PlanId) => setPlanId(id);

  const handleSetBillingCycle = (cycle: BillingCycle) => setBillingCycle(cycle);

  const handleToggleAddOn = (id: AddOnId) => {
    setAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const handleSubmit = () => {
    onSubmit?.({ personalInfo, planId, billingCycle, addOnIds });
    setCurrentStep(5);
  };

  return (
    <div className={styles.root}>
      <StepProgress currentStep={currentStep} />
      <StepLayout
        currentStep={currentStep}
        onNextStep={handleNextStep}
        onBackStep={handleBackStep}
        onGoToStep={handleGoToStep}
        onSubmit={handleSubmit}
        personalInfo={personalInfo}
        onPersonalInfoChange={handlePersonalInfoChange}
        planId={planId}
        onSelectPlan={handleSelectPlan}
        billingCycle={billingCycle}
        onSetBillingCycle={handleSetBillingCycle}
        addOnIds={addOnIds}
        onToggleAddOn={handleToggleAddOn}
      />
    </div>
  );
};

export default MultiStepForm;
