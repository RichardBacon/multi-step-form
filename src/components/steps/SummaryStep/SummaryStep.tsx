import { type RefObject } from 'react';
import { type AddOnId, type BillingCycle, type PlanId } from '../../../types';
import StepHeader from '../../shared/StepHeader/StepHeader';
import SummaryContent from '../../shared/SummaryContent/SummaryContent';
import TotalRow from '../../shared/TotalRow/TotalRow';

interface SummaryStepProps {
  planId: PlanId;
  billingCycle: BillingCycle;
  addOnIds: AddOnId[];
  onGoToStep: (step: 1 | 2 | 3 | 4) => void;
  headingRef?: RefObject<HTMLHeadingElement>;
}

const SummaryStep = ({
  planId,
  billingCycle,
  addOnIds,
  onGoToStep,
  headingRef,
}: SummaryStepProps) => {
  return (
    <>
      <StepHeader
        ref={headingRef}
        heading="Finishing up"
        subheading="Double check everything looks OK before confirming."
      />
      <SummaryContent
        planId={planId}
        billingCycle={billingCycle}
        addOnIds={addOnIds}
        onGoToStep={onGoToStep}
      />
      <TotalRow
        planId={planId}
        billingCycle={billingCycle}
        addOnIds={addOnIds}
      />
    </>
  );
};

export default SummaryStep;
