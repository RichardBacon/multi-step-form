import { type Dispatch, type SetStateAction } from 'react';
import { type PersonalInfo } from '../../../types';
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
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
}

const StepLayout = ({
  currentStep,
  onNextStep,
  onBackStep,
  personalInfo,
  setPersonalInfo,
  selectedPlan,
  setSelectedPlan,
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
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          )}
          {currentStep === 3 && <AddOnSelectionStep />}
          {currentStep === 4 && <SummaryStep />}
        </Step>
      ) : (
        <ThankYouStep />
      )}
    </div>
  );
};

export default StepLayout;
