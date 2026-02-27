import { useEffect, type RefObject } from 'react';
import {
  type AddOnId,
  type BillingCycle,
  type PersonalInfo,
  type PlanId,
  type WizardStep,
} from '../../../types';
import AddOnSelectionStep from '../../steps/AddOnSelectionStep/AddOnSelectionStep';
import PersonalInfoStep from '../../steps/PersonalInfoStep/PersonalInfoStep';
import PlanSelectionStep from '../../steps/PlanSelectionStep/PlanSelectionStep';
import SummaryStep from '../../steps/SummaryStep/SummaryStep';
import ThankYouStep from '../../steps/ThankYouStep/ThankYouStep';
import Step from '../Step/Step';
import styles from './StepLayout.module.css';

interface StepLayoutProps {
  currentStep: WizardStep;
  onNextStep: () => void;
  onBackStep: () => void;
  onGoToStep: (step: WizardStep) => void;
  onSubmit: () => void;
  personalInfo: PersonalInfo;
  onPersonalInfoChange: (field: keyof PersonalInfo, value: string) => void;
  onPersonalInfoSubmit: () => void;
  planId: PlanId;
  onSelectPlan: (planId: PlanId) => void;
  billingCycle: BillingCycle;
  onSetBillingCycle: (cycle: BillingCycle) => void;
  addOnIds: AddOnId[];
  onToggleAddOn: (addOnId: AddOnId) => void;
  validatePersonalInfo: () => boolean;
  headingRef: RefObject<HTMLHeadingElement>;
  errors: Partial<Record<keyof PersonalInfo, string>>;
  showErrors: boolean;
}

const StepLayout = ({
  currentStep,
  onNextStep,
  onBackStep,
  onGoToStep,
  onSubmit,
  personalInfo,
  onPersonalInfoChange,
  onPersonalInfoSubmit,
  planId,
  onSelectPlan,
  billingCycle,
  onSetBillingCycle,
  addOnIds,
  onToggleAddOn,
  validatePersonalInfo,
  headingRef,
  errors,
  showErrors,
}: StepLayoutProps) => {
  useEffect(() => {
    headingRef.current?.focus();
  }, [currentStep]);

  return (
    <div className={styles.root}>
      {currentStep < 5 ? (
        <Step
          showBack={currentStep > 1}
          showNext
          nextLabel={currentStep === 4 ? 'Confirm' : 'Next Step'}
          onNextStep={
            currentStep === 1
              ? onPersonalInfoSubmit
              : currentStep === 4
                ? onSubmit
                : onNextStep
          }
          onBackStep={onBackStep}
          validateStep={validatePersonalInfo}
        >
          {currentStep === 1 && (
            <PersonalInfoStep
              personalInfo={personalInfo}
              onPersonalInfoChange={onPersonalInfoChange}
              errors={showErrors ? errors : {}}
              headingRef={headingRef}
              onSubmit={onPersonalInfoSubmit}
            />
          )}
          {currentStep === 2 && (
            <PlanSelectionStep
              planId={planId}
              onSelectPlan={onSelectPlan}
              billingCycle={billingCycle}
              onSetBillingCycle={onSetBillingCycle}
              headingRef={headingRef}
            />
          )}
          {currentStep === 3 && (
            <AddOnSelectionStep
              addOnIds={addOnIds}
              onToggleAddOn={onToggleAddOn}
              billingCycle={billingCycle}
              headingRef={headingRef}
            />
          )}
          {currentStep === 4 && (
            <SummaryStep
              planId={planId}
              billingCycle={billingCycle}
              addOnIds={addOnIds}
              onGoToStep={onGoToStep}
              headingRef={headingRef}
            />
          )}
        </Step>
      ) : (
        <ThankYouStep headingRef={headingRef} />
      )}
    </div>
  );
};

export default StepLayout;
