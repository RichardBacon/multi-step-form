import { ADD_ONS, PLANS } from '../../../data';
import { type AddOnId, type BillingCycle, type PlanId } from '../../../types';
import { getPlanPrice } from '../../../utils/pricing';
import Button from '../Button/Button';
import styles from './SummaryContent.module.css';

interface SummaryContentProps {
  planId: PlanId;
  billingCycle: BillingCycle;
  addOnIds: AddOnId[];
  onGoToStep: (step: 1 | 2 | 3 | 4) => void;
}

const SummaryContent = ({
  planId,
  billingCycle,
  addOnIds,
  onGoToStep,
}: SummaryContentProps) => {
  const plan = PLANS.find((p) => p.id === planId);
  if (!plan) throw new Error(`Unknown plan: ${planId}`);
  const selectedAddOns = ADD_ONS.filter((a) => addOnIds.includes(a.id));
  const cycleLabel = billingCycle === 'monthly' ? 'Monthly' : 'Yearly';
  const priceSuffix = billingCycle === 'monthly' ? '/mo' : '/yr';
  const planPrice = getPlanPrice(plan, billingCycle);

  return (
    <div className={styles.root}>
      <div className={styles.planSummaryItem}>
        <div className={styles.planSummaryItemContent}>
          <span>
            {plan.name} ({cycleLabel})
          </span>
          <Button variant="tertiary" onClick={() => onGoToStep(2)}>
            Change
          </Button>
        </div>
        <span>
          ${planPrice}
          {priceSuffix}
        </span>
      </div>
      {selectedAddOns.map((addOn) => {
        const addOnPrice = getPlanPrice(addOn, billingCycle);
        return (
          <div key={addOn.id} className={styles.addOnSummaryItem}>
            <span className={styles.addOnSummaryItemName}>{addOn.name}</span>
            <span className={styles.addOnSummaryItemPrice}>
              +${addOnPrice}
              {priceSuffix}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryContent;
