import { type BillingCycle, type Plan, type PlanId } from '../../../types';
import PlanOption from '../PlanOption/PlanOption';
import styles from './PlanSelector.module.css';

interface PlanSelectorProps {
  planId: PlanId;
  onSelectPlan: (planId: PlanId) => void;
  billingCycle: BillingCycle;
}

const PLANS: Plan[] = [
  {
    id: 'arcade',
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const formatPrice = (price: number, cycle: BillingCycle) =>
  cycle === 'monthly' ? `$${price}/mo` : `$${price}/yr`;

const PlanSelector = ({
  planId,
  onSelectPlan,
  billingCycle,
}: PlanSelectorProps) => {
  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>Select your plan</legend>
      {PLANS.map((plan) => (
        <PlanOption
          key={plan.id}
          name="plan"
          value={plan.id}
          iconImageSrc={`/assets/images/icon-${plan.id}.svg`}
          title={plan.name}
          price={formatPrice(
            billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice,
            billingCycle,
          )}
          checked={planId === plan.id}
          onChange={(value) => onSelectPlan(value as PlanId)}
        />
      ))}
    </fieldset>
  );
};

export default PlanSelector;
