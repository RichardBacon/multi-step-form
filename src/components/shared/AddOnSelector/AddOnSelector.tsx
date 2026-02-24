import { ADD_ONS } from '../../../data';
import { type AddOnId, type BillingCycle } from '../../../types';
import AddOnOption from '../AddOnOption/AddOnOption';
import styles from './AddOnSelector.module.css';

interface AddOnSelectorProps {
  addOnIds: AddOnId[];
  onToggleAddOn: (addOnId: AddOnId) => void;
  billingCycle: BillingCycle;
}

const formatPrice = (price: number, cycle: BillingCycle) =>
  cycle === 'monthly' ? `+$${price}/mo` : `+$${price}/yr`;

const AddOnSelector = ({
  addOnIds,
  onToggleAddOn,
  billingCycle,
}: AddOnSelectorProps) => {
  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>Select add-ons</legend>
      {ADD_ONS.map((addOn) => (
        <AddOnOption
          key={addOn.id}
          id={addOn.id}
          title={addOn.name}
          description={addOn.description}
          price={formatPrice(
            billingCycle === 'monthly' ? addOn.monthlyPrice : addOn.yearlyPrice,
            billingCycle,
          )}
          checked={addOnIds.includes(addOn.id)}
          onChange={onToggleAddOn}
        />
      ))}
    </fieldset>
  );
};

export default AddOnSelector;
