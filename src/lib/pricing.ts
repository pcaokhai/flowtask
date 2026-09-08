export type BillingPeriod = 'monthly' | 'annual';

export const ANNUAL_DISCOUNT = 0.2;

export function getDisplayMonthlyPrice(basePriceMonthly: number, period: BillingPeriod): number {
  if (period === 'monthly') return basePriceMonthly;
  return Math.round(basePriceMonthly * (1 - ANNUAL_DISCOUNT) * 100) / 100;
}

export function getAnnualSavingsPercent(): number {
  return ANNUAL_DISCOUNT * 100;
}
