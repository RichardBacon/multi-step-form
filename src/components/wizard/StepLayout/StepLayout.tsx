import {
  type AddOnId,
  type BillingCycle,
  type PersonalInfo,
  type PlanId,
} from '../../../types';
import AddOnSelectionStep from '../../steps/AddOnSelectionStep/AddOnSelectionStep';
import PersonalInfoStep from '../../steps/PersonalInfoStep/PersonalInfoStep';
import PlanSelectionStep from '../../steps/PlanSelectionStep/PlanSelectionStep';
import SummaryStep from '../../steps/SummaryStep/SummaryStep';
import ThankYouStep from '../../steps/ThankYouStep/ThankYouStep';
import Step from '../Step/Step';
import styles from './StepLayout.module.css';

interface StepLayoutProps {
  currentStep: number;
  onNextStep: () => void;
  onBackStep: () => void;
  onGoToStep: (step: 1 | 2 | 3 | 4) => void;
  personalInfo: PersonalInfo;
  onPersonalInfoChange: (field: keyof PersonalInfo, value: string) => void;
  planId: PlanId;
  onSelectPlan: (planId: PlanId) => void;
  billingCycle: BillingCycle;
  onSetBillingCycle: (cycle: BillingCycle) => void;
  addOnIds: AddOnId[];
  onToggleAddOn: (addOnId: AddOnId) => void;
}

const StepLayout = ({
  currentStep,
  onNextStep,
  onBackStep,
  onGoToStep,
  personalInfo,
  onPersonalInfoChange,
  planId,
  onSelectPlan,
  billingCycle,
  onSetBillingCycle,
  addOnIds,
  onToggleAddOn,
}: StepLayoutProps) => {
  return (
    <div className={styles.root}>
      {currentStep < 5 ? (
        <Step
          showBack={currentStep > 1}
          showNext
          nextLabel={currentStep === 4 ? 'Confirm' : 'Next Step'}
          onNextStep={onNextStep}
          onBackStep={onBackStep}
        >
          {currentStep === 1 && (
            <PersonalInfoStep
              personalInfo={personalInfo}
              onPersonalInfoChange={onPersonalInfoChange}
            />
          )}
          {currentStep === 2 && (
            <PlanSelectionStep
              planId={planId}
              onSelectPlan={onSelectPlan}
              billingCycle={billingCycle}
              onSetBillingCycle={onSetBillingCycle}
            />
          )}
          {currentStep === 3 && (
            <AddOnSelectionStep
              addOnIds={addOnIds}
              onToggleAddOn={onToggleAddOn}
              billingCycle={billingCycle}
            />
          )}
          {currentStep === 4 && (
            <SummaryStep
              planId={planId}
              billingCycle={billingCycle}
              addOnIds={addOnIds}
              onGoToStep={onGoToStep}
            />
          )}
        </Step>
      ) : (
        <ThankYouStep />
      )}
    </div>
  );
};

export default StepLayout;
