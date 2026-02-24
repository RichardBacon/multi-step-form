import { type BillingCycle, type PlanId } from '../../../types';
import PlanSelector from '../../shared/PlanSelector/PlanSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Toggle from '../../shared/Toggle/Toggle';

interface PlanSelectionStepProps {
  planId: PlanId;
  setPlanId: (planId: PlanId) => void;
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
}

const PlanSelectionStep = ({
  planId,
  setPlanId,
  billingCycle,
  setBillingCycle,
}: PlanSelectionStepProps) => {
  return (
    <>
      <StepHeader
        heading="Select your plan"
        subheading="You have the option of monthly or yearly billing."
      />
      <PlanSelector
        planId={planId}
        setPlanId={setPlanId}
        billingCycle={billingCycle}
      />
      <Toggle
        leftLabel="Monthly"
        rightLabel="Yearly"
        activeOption={billingCycle === 'monthly' ? 'left' : 'right'}
        onChange={(option) =>
          setBillingCycle(option === 'left' ? 'monthly' : 'yearly')
        }
      />
    </>
  );
};

export default PlanSelectionStep;
