import { describe, expect, it } from 'vitest';
import { getAddOnsTotal, getPlanPrice } from './pricing';
import type { AddOn, Plan } from '../types';

const arcade: Plan = {
  id: 'arcade',
  name: 'Arcade',
  monthlyPrice: 9,
  yearlyPrice: 90,
};

const onlineService: AddOn = {
  id: 'online-service',
  name: 'Online Service',
  description: 'Access to multiplayer games',
  monthlyPrice: 1,
  yearlyPrice: 10,
};

const largerStorage: AddOn = {
  id: 'larger-storage',
  name: 'Larger Storage',
  description: 'Extra 1TB of cloud save',
  monthlyPrice: 2,
  yearlyPrice: 20,
};

describe('getPlanPrice', () => {
  it('returns the price for the given billing cycle', () => {
    expect(getPlanPrice(arcade, 'monthly')).toBe(arcade.monthlyPrice);
    expect(getPlanPrice(arcade, 'yearly')).toBe(arcade.yearlyPrice);
  });
});

describe('getAddOnsTotal', () => {
  it('returns the total price for the given add-ons and billing cycle', () => {
    expect(getAddOnsTotal([onlineService, largerStorage], 'monthly')).toBe(
      onlineService.monthlyPrice + largerStorage.monthlyPrice,
    );
    expect(getAddOnsTotal([onlineService, largerStorage], 'yearly')).toBe(
      onlineService.yearlyPrice + largerStorage.yearlyPrice,
    );
  });
});
