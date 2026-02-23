import PlanSelector from '../../shared/PlanSelector/PlanSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Toggle from '../../shared/Toggle/Toggle';

interface PlanSelectionStepProps {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
}

const PlanSelectionStep = ({
  selectedPlan,
  setSelectedPlan,
}: PlanSelectionStepProps) => {
  return (
    <>
      <StepHeader
        heading="Select your plan"
        subheading="You have the option of monthly or yearly billing."
      />
      <PlanSelector
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <Toggle leftLabel="Monthly" rightLabel="Yearly" activeOption="left" />
    </>
  );
};

export default PlanSelectionStep;
