import { type RefObject } from 'react';
import { type AddOnId, type BillingCycle } from '../../../types';
import AddOnSelector from '../../shared/AddOnSelector/AddOnSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';

interface AddOnSelectionStepProps {
  addOnIds: AddOnId[];
  onToggleAddOn: (addOnId: AddOnId) => void;
  billingCycle: BillingCycle;
  headingRef?: RefObject<HTMLHeadingElement>;
}

const AddOnSelectionStep = ({
  addOnIds,
  onToggleAddOn,
  billingCycle,
  headingRef,
}: AddOnSelectionStepProps) => {
  return (
    <>
      <StepHeader
        ref={headingRef}
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience."
      />
      <AddOnSelector
        addOnIds={addOnIds}
        onToggleAddOn={onToggleAddOn}
        billingCycle={billingCycle}
      />
    </>
  );
};

export default AddOnSelectionStep;
