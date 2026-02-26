import { describe, expect, it } from 'vitest';
import { formatPrice } from './format';

describe('formatPrice', () => {
  it('formats the price correctly for monthly billing', () => {
    expect(formatPrice(10, 'monthly')).toBe('$10/mo');
  });

  it('formats the price correctly for yearly billing', () => {
    expect(formatPrice(10, 'yearly')).toBe('$10/yr');
  });
});
