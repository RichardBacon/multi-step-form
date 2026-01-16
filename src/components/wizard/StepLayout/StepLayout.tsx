import PersonalInfoStep from '../../steps/PersonalInfoStep/PersonalInfoStep';
import PlanSelectionStep from '../../steps/PlanSelectionStep/PlanSelectionStep';
import styles from './StepLayout.module.css';

interface StepLayoutProps {
  currentStep: number;
}

const StepLayout = ({ currentStep }: StepLayoutProps) => {
  return (
    <div className={styles.root}>
      {currentStep === 1 && <PersonalInfoStep />}
      {currentStep === 2 && <PlanSelectionStep />}
    </div>
  );
};

export default StepLayout;
