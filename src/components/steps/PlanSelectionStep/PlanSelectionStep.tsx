import PlanSelector from '../../shared/PlanSelector/PlanSelector';
import StepActions from '../../shared/StepActions/StepActions';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Button from '../../shared/Button/Button';
import Toggle from '../../shared/Toggle/Toggle';
import styles from './PlanSelectionStep.module.css';

const PlanSelectionStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Select your plan"
        subheading="You have the option of monthly or yearly billing."
      />
      <PlanSelector />
      <Toggle leftLabel="Monthly" rightLabel="Yearly" activeOption="left" />
      <StepActions>
        <Button variant="secondary">Go Back</Button>
        <Button variant="primary">Next Step</Button>
      </StepActions>
    </div>
  );
};

export default PlanSelectionStep;
