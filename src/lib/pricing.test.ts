import { describe, it, expect } from 'vitest';
import { getDisplayMonthlyPrice, getAnnualSavingsPercent, ANNUAL_DISCOUNT } from './pricing';

describe('getDisplayMonthlyPrice', () => {
  it('returns the base monthly price unchanged when billing is monthly', () => {
    // Arrange
    const basePriceMonthly = 29;

    // Act
    const result = getDisplayMonthlyPrice(basePriceMonthly, 'monthly');

    // Assert
    expect(result).toBe(29);
  });

  it('returns a discounted effective monthly price when billing is annual', () => {
    // Arrange
    const basePriceMonthly = 100;

    // Act
    const result = getDisplayMonthlyPrice(basePriceMonthly, 'annual');

    // Assert
    expect(result).toBe(80); // 100 * (1 - 0.20)
  });

  it('rounds the annual effective price to 2 decimal places', () => {
    // Arrange
    const basePriceMonthly = 19;

    // Act
    const result = getDisplayMonthlyPrice(basePriceMonthly, 'annual');

    // Assert
    expect(result).toBe(15.2);
  });

  it('returns 0 when base price is 0', () => {
    // Arrange & Act
    const monthly = getDisplayMonthlyPrice(0, 'monthly');
    const annual = getDisplayMonthlyPrice(0, 'annual');

    // Assert
    expect(monthly).toBe(0);
    expect(annual).toBe(0);
  });
});

describe('getAnnualSavingsPercent', () => {
  it('returns the configured annual discount as a whole-number percent', () => {
    // Arrange & Act
    const result = getAnnualSavingsPercent();

    // Assert
    expect(result).toBe(ANNUAL_DISCOUNT * 100);
    expect(result).toBe(20);
  });
});
