import AddOnSelector from '../../shared/AddOnSelector/AddOnSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';

const AddOnSelectionStep = () => {
  return (
    <>
      <StepHeader
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience."
      />
      <AddOnSelector />
    </>
  );
};

export default AddOnSelectionStep;
