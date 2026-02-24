import { type Dispatch, type SetStateAction } from 'react';
import { type AddOn, type AddOnId, type BillingCycle } from '../../../types';
import AddOnOption from '../AddOnOption/AddOnOption';
import styles from './AddOnSelector.module.css';

interface AddOnSelectorProps {
  addOnIds: AddOnId[];
  setAddOnIds: Dispatch<SetStateAction<AddOnId[]>>;
  billingCycle: BillingCycle;
}

const ADD_ONS: AddOn[] = [
  {
    id: 'online-service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 'larger-storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 'customizable-profile',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

const formatPrice = (price: number, cycle: BillingCycle) =>
  cycle === 'monthly' ? `+$${price}/mo` : `+$${price}/yr`;

const AddOnSelector = ({
  addOnIds,
  setAddOnIds,
  billingCycle,
}: AddOnSelectorProps) => {
  const handleChange = (id: AddOnId) => {
    setAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

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
          onChange={handleChange}
        />
      ))}
    </fieldset>
  );
};

export default AddOnSelector;
