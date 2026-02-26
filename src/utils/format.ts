import { type BillingCycle } from '../types';

export const formatPrice = (price: number, cycle: BillingCycle) =>
  cycle === 'monthly' ? `$${price}/mo` : `$${price}/yr`;
