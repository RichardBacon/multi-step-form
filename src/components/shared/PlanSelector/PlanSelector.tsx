import PlanOption from '../PlanOption/PlanOption';
import styles from './PlanSelector.module.css';

interface PlanSelectorProps {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
}

const PLANS = [
  {
    value: 'arcade',
    title: 'Arcade',
    price: '$9/mo',
    iconImageSrc: '/assets/images/icon-arcade.svg',
  },
  {
    value: 'advanced',
    title: 'Advanced',
    price: '$12/mo',
    iconImageSrc: '/assets/images/icon-advanced.svg',
  },
  {
    value: 'pro',
    title: 'Pro',
    price: '$15/mo',
    iconImageSrc: '/assets/images/icon-pro.svg',
  },
];

const PlanSelector = ({ selectedPlan, setSelectedPlan }: PlanSelectorProps) => {
  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>Select your plan</legend>
      {PLANS.map((plan) => (
        <PlanOption
          key={plan.value}
          name="plan"
          value={plan.value}
          iconImageSrc={plan.iconImageSrc}
          title={plan.title}
          price={plan.price}
          checked={selectedPlan === plan.value}
          onChange={setSelectedPlan}
        />
      ))}
    </fieldset>
  );
};

export default PlanSelector;
