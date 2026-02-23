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
}

const StepLayout = ({
  currentStep,
  onNextStep,
  onBackStep,
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
          {currentStep === 1 && <PersonalInfoStep />}
          {currentStep === 2 && <PlanSelectionStep />}
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
