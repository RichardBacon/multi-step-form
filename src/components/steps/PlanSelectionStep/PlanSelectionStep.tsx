import PlanSelector from '../../shared/PlanSelector/PlanSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Toggle from '../../shared/Toggle/Toggle';

const PlanSelectionStep = () => {
  return (
    <>
      <StepHeader
        heading="Select your plan"
        subheading="You have the option of monthly or yearly billing."
      />
      <PlanSelector />
      <Toggle leftLabel="Monthly" rightLabel="Yearly" activeOption="left" />
    </>
  );
};

export default PlanSelectionStep;
