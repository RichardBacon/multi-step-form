import { PLANS } from '../../../data';
import { type BillingCycle, type PlanId } from '../../../types';
import { formatPrice } from '../../../utils/format';
import PlanOption from '../PlanOption/PlanOption';
import styles from './PlanSelector.module.css';

interface PlanSelectorProps {
  planId: PlanId;
  onSelectPlan: (planId: PlanId) => void;
  billingCycle: BillingCycle;
}

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
          promoText={billingCycle === 'yearly' ? '2 months free' : undefined}
          checked={planId === plan.id}
          onChange={(value) => onSelectPlan(value as PlanId)}
        />
      ))}
    </fieldset>
  );
};

export default PlanSelector;
