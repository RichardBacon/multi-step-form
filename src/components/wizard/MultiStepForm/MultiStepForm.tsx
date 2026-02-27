import { useRef, useState } from 'react';
import {
  type AddOnId,
  type BillingCycle,
  type FormSubmission,
  type PersonalInfo,
  type PlanId,
  type WizardStep,
} from '../../../types';
import StepLayout from '../StepLayout/StepLayout';
import StepProgress from '../StepProgress/StepProgress';
import styles from './MultiStepForm.module.css';
import {
  getPersonalInfoErrors,
  isPersonalInfoValid,
} from '../../../utils/validation';

interface MultiStepFormProps {
  onSubmit?: (data: FormSubmission) => void;
}

const MultiStepForm = ({ onSubmit }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
  });
  const [planId, setPlanId] = useState<PlanId>('arcade');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [addOnIds, setAddOnIds] = useState<AddOnId[]>([]);
  const [attemptedSteps, setAttemptedSteps] = useState<
    Record<WizardStep, boolean>
  >({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const headingRef = useRef<HTMLHeadingElement>(null);

  const errors = getPersonalInfoErrors(personalInfo);
  const showErrors = !!attemptedSteps[currentStep];

  const handleNextStep = () => setCurrentStep((s) => (s + 1) as WizardStep);
  const handleBackStep = () => setCurrentStep((s) => (s - 1) as WizardStep);
  const handleGoToStep = (step: WizardStep) => setCurrentStep(step);

  const validatePersonalInfo = () => {
    setAttemptedSteps((prev) => ({ ...prev, [currentStep]: true }));
    return isPersonalInfoValid(personalInfo);
  };

  const handlePersonalInfoChange = (
    field: keyof PersonalInfo,
    value: string,
  ) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePersonalInfoSubmit = () => {
    if (validatePersonalInfo()) {
      handleNextStep();
    }
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
        onPersonalInfoSubmit={handlePersonalInfoSubmit}
        planId={planId}
        onSelectPlan={handleSelectPlan}
        billingCycle={billingCycle}
        onSetBillingCycle={handleSetBillingCycle}
        addOnIds={addOnIds}
        onToggleAddOn={handleToggleAddOn}
        validatePersonalInfo={validatePersonalInfo}
        headingRef={headingRef}
        errors={errors}
        showErrors={showErrors}
      />
    </div>
  );
};

export default MultiStepForm;
