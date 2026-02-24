import { type AddOnId, type BillingCycle } from '../../../types';
import AddOnSelector from '../../shared/AddOnSelector/AddOnSelector';
import StepHeader from '../../shared/StepHeader/StepHeader';

interface AddOnSelectionStepProps {
  addOnIds: AddOnId[];
  onToggleAddOn: (addOnId: AddOnId) => void;
  billingCycle: BillingCycle;
}

const AddOnSelectionStep = ({
  addOnIds,
  onToggleAddOn,
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
        onToggleAddOn={onToggleAddOn}
        billingCycle={billingCycle}
      />
    </>
  );
};

export default AddOnSelectionStep;
