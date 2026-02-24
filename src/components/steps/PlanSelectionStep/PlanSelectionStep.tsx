import { type BillingCycle, type PlanId } from '../../../types';
import PlanSelector from '../../shared/PlanSelector/PlanSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Toggle from '../../shared/Toggle/Toggle';

interface PlanSelectionStepProps {
  planId: PlanId;
  onSelectPlan: (planId: PlanId) => void;
  billingCycle: BillingCycle;
  onSetBillingCycle: (cycle: BillingCycle) => void;
}

const PlanSelectionStep = ({
  planId,
  onSelectPlan,
  billingCycle,
  onSetBillingCycle,
}: PlanSelectionStepProps) => {
  return (
    <>
      <StepHeader
        heading="Select your plan"
        subheading="You have the option of monthly or yearly billing."
      />
      <PlanSelector
        planId={planId}
        onSelectPlan={onSelectPlan}
        billingCycle={billingCycle}
      />
      <Toggle
        leftLabel="Monthly"
        rightLabel="Yearly"
        activeOption={billingCycle === 'monthly' ? 'left' : 'right'}
        onChange={(option) =>
          onSetBillingCycle(option === 'left' ? 'monthly' : 'yearly')
        }
      />
    </>
  );
};

export default PlanSelectionStep;
