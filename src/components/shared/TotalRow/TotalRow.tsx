import { ADD_ONS, PLANS } from '../../../data';
import { type AddOnId, type BillingCycle, type PlanId } from '../../../types';
import { getAddOnsTotal, getPlanPrice } from '../../../utils/pricing';
import styles from './TotalRow.module.css';

interface TotalRowProps {
  planId: PlanId;
  billingCycle: BillingCycle;
  addOnIds: AddOnId[];
}

const TotalRow = ({ planId, billingCycle, addOnIds }: TotalRowProps) => {
  const plan = PLANS.find((p) => p.id === planId);
  if (!plan) throw new Error(`Unknown plan: ${planId}`);
  const selectedAddOns = ADD_ONS.filter((a) => addOnIds.includes(a.id));
  const priceSuffix = billingCycle === 'monthly' ? '/mo' : '/yr';
  const cycleLabel = billingCycle === 'monthly' ? 'per month' : 'per year';

  const planPrice = getPlanPrice(plan, billingCycle);
  const addOnsTotal = getAddOnsTotal(selectedAddOns, billingCycle);
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
