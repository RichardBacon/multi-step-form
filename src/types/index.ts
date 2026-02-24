export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export type PlanId = 'arcade' | 'advanced' | 'pro';

export type AddOnId =
  | 'online-service'
  | 'larger-storage'
  | 'customizable-profile';

export type BillingCycle = 'monthly' | 'yearly';

export type Plan = {
  id: PlanId;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type AddOn = {
  id: AddOnId;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type FormSubmission = {
  personalInfo: PersonalInfo;
  planId: PlanId;
  billingCycle: BillingCycle;
  addOnIds: AddOnId[];
};
