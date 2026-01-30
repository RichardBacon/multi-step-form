import AddOnSelectionStep from '../../steps/AddOnSelectionStep/AddOnSelectionStep';
import PersonalInfoStep from '../../steps/PersonalInfoStep/PersonalInfoStep';
import PlanSelectionStep from '../../steps/PlanSelectionStep/PlanSelectionStep';
import SummaryStep from '../../steps/SummaryStep/SummaryStep';
import styles from './StepLayout.module.css';

interface StepLayoutProps {
  currentStep: number;
}

const StepLayout = ({ currentStep }: StepLayoutProps) => {
  return (
    <div className={styles.root}>
      {currentStep === 1 && <PersonalInfoStep />}
      {currentStep === 2 && <PlanSelectionStep />}
      {currentStep === 3 && <AddOnSelectionStep />}
      {currentStep === 4 && <SummaryStep />}
    </div>
  );
};

export default StepLayout;
