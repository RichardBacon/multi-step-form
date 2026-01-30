import AddOnSelector from '../../forms/AddOnSelector/AddOnSelector';
import StepActions from '../../forms/StepActions/StepActions';
import StepHeader from '../../forms/StepHeader/StepHeader';
import Button from '../../ui/Button/Button';
import styles from './AddOnSelectionStep.module.css';

const AddOnSelectionStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience."
      />
      <AddOnSelector />
      <div className={styles.stepActionsContainer}>
        <StepActions>
          <Button variant="secondary">Go Back</Button>
          <Button variant="primary">Next Step</Button>
        </StepActions>
      </div>
    </div>
  );
};

export default AddOnSelectionStep;
