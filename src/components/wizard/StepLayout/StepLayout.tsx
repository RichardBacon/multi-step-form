import { type Dispatch, type SetStateAction } from 'react';
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
  personalInfo: PersonalInfo;
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>;
  planId: PlanId;
  setPlanId: (planId: PlanId) => void;
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
  addOnIds: AddOnId[];
  setAddOnIds: Dispatch<SetStateAction<AddOnId[]>>;
}

const StepLayout = ({
  currentStep,
  onNextStep,
  onBackStep,
  personalInfo,
  setPersonalInfo,
  planId,
  setPlanId,
  billingCycle,
  setBillingCycle,
  addOnIds,
  setAddOnIds,
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
              setPersonalInfo={setPersonalInfo}
            />
          )}
          {currentStep === 2 && (
            <PlanSelectionStep
              planId={planId}
              setPlanId={setPlanId}
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
            />
          )}
          {currentStep === 3 && (
            <AddOnSelectionStep
              addOnIds={addOnIds}
              setAddOnIds={setAddOnIds}
              billingCycle={billingCycle}
            />
          )}
          {currentStep === 4 && <SummaryStep />}
        </Step>
      ) : (
        <ThankYouStep />
      )}
    </div>
  );
};

export default StepLayout;
