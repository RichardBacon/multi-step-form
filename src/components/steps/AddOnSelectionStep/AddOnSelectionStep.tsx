import AddOnSelector from '../../shared/AddOnSelector/AddOnSelector';
import StepActions from '../../shared/StepActions/StepActions';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Button from '../../shared/Button/Button';

const AddOnSelectionStep = () => {
  return (
    <>
      <StepHeader
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience."
      />
      <AddOnSelector />
      <StepActions>
        <Button variant="secondary">Go Back</Button>
        <Button variant="primary">Next Step</Button>
      </StepActions>
    </>
  );
};

export default AddOnSelectionStep;
