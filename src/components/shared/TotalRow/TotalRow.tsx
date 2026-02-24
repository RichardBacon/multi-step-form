import { ADD_ONS, PLANS } from '../../../data';
import { type AddOnId, type BillingCycle, type PlanId } from '../../../types';
import styles from './TotalRow.module.css';

interface TotalRowProps {
  planId: PlanId;
  billingCycle: BillingCycle;
  addOnIds: AddOnId[];
}

const TotalRow = ({ planId, billingCycle, addOnIds }: TotalRowProps) => {
  const plan = PLANS.find((p) => p.id === planId)!;
  const selectedAddOns = ADD_ONS.filter((a) => addOnIds.includes(a.id));
  const priceSuffix = billingCycle === 'monthly' ? '/mo' : '/yr';
  const cycleLabel = billingCycle === 'monthly' ? 'per month' : 'per year';

  const planPrice =
    billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const addOnsTotal = selectedAddOns.reduce(
    (sum, a) =>
      sum + (billingCycle === 'monthly' ? a.monthlyPrice : a.yearlyPrice),
    0,
  );
  const total = planPrice + addOnsTotal;

  return (
    <div className={styles.root}>
      <span>Total ({cycleLabel})</span>
      <span className={styles.total}>
        +${total}
        {priceSuffix}
      </span>
    </div>
  );
};

export default TotalRow;
