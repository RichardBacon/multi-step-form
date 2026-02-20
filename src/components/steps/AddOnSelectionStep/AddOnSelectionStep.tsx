import AddOnSelector from '../../shared/AddOnSelector/AddOnSelector';
import StepActions from '../../shared/StepActions/StepActions';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Button from '../../shared/Button/Button';
import styles from './AddOnSelectionStep.module.css';

const AddOnSelectionStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience."
      />
      <AddOnSelector />
      <StepActions>
        <Button variant="secondary">Go Back</Button>
        <Button variant="primary">Next Step</Button>
      </StepActions>
    </div>
  );
};

export default AddOnSelectionStep;
