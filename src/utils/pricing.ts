import type { AddOn, BillingCycle, Plan } from '../types';

export const getPlanPrice = (
  item: Plan | AddOn,
  cycle: BillingCycle,
): number => (cycle === 'monthly' ? item.monthlyPrice : item.yearlyPrice);

export const getAddOnsTotal = (addOns: AddOn[], cycle: BillingCycle): number =>
  addOns.reduce((sum, addOn) => sum + getPlanPrice(addOn, cycle), 0);
