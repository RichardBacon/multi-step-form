import StepActions from '../../forms/StepActions/StepActions';
import StepHeader from '../../forms/StepHeader/StepHeader';
import PlanSelector from '../../forms/PlanSelector/PlanSelector';
import Button from '../../ui/Button/Button';
import styles from './PlanSelectionStep.module.css';

const PlanSelectionStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Select Plan"
        subheading="You have the option of monthly or yearly billing."
      />
      <PlanSelector />
      <div className={styles.stepActionsContainer}>
        <StepActions>
          <Button variant="secondary">Go Back</Button>
          <Button variant="primary">Next Step</Button>
        </StepActions>
      </div>
    </div>
  );
};

export default PlanSelectionStep;
