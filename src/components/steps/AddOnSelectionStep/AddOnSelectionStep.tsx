import { type Dispatch, type SetStateAction } from 'react';
import { type AddOnId, type BillingCycle } from '../../../types';
import AddOnSelector from '../../shared/AddOnSelector/AddOnSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';

interface AddOnSelectionStepProps {
  addOnIds: AddOnId[];
  setAddOnIds: Dispatch<SetStateAction<AddOnId[]>>;
  billingCycle: BillingCycle;
}

const AddOnSelectionStep = ({
  addOnIds,
  setAddOnIds,
  billingCycle,
}: AddOnSelectionStepProps) => {
  return (
    <>
      <StepHeader
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience."
      />
      <AddOnSelector
        addOnIds={addOnIds}
        setAddOnIds={setAddOnIds}
        billingCycle={billingCycle}
      />
    </>
  );
};

export default AddOnSelectionStep;
