import { useState } from 'react';
import AddOnOption from '../AddOnOption/AddOnOption';
import styles from './AddOnSelector.module.css';

const ADD_ONS = [
  {
    value: 'online-service',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: '+$1/mo',
  },
  {
    value: 'larger-storage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '+$2/mo',
  },
  {
    value: 'customizable-profile',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: '+$2/mo',
  },
];

const AddOnSelector = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const handleChange = (value: string) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  };

  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>Select add-ons</legend>
      {ADD_ONS.map((addOn) => (
        <AddOnOption
          key={addOn.value}
          value={addOn.value}
          title={addOn.title}
          description={addOn.description}
          price={addOn.price}
          checked={selectedAddOns.has(addOn.value)}
          onChange={handleChange}
        />
      ))}
    </fieldset>
  );
};

export default AddOnSelector;
