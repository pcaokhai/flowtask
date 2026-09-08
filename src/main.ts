import { getDisplayMonthlyPrice, type BillingPeriod } from './lib/pricing';

function formatPrice(amount: number): string {
  return Number.isInteger(amount) ? `$${amount}` : `$${amount.toFixed(2)}`;
}

function setBillingPeriod(period: BillingPeriod): void {
  const priceEls = document.querySelectorAll<HTMLElement>('.price-amount');
  priceEls.forEach((el) => {
    const base = Number(el.dataset.basePrice);
    el.textContent = formatPrice(getDisplayMonthlyPrice(base, period));
  });

  const monthlyBtn = document.getElementById('billing-toggle-monthly')!;
  const annualBtn = document.getElementById('billing-toggle-annual')!;
  const isAnnual = period === 'annual';

  monthlyBtn.classList.toggle('is-active', !isAnnual);
  monthlyBtn.setAttribute('aria-pressed', String(!isAnnual));
  annualBtn.classList.toggle('is-active', isAnnual);
  annualBtn.setAttribute('aria-pressed', String(isAnnual));
}

document.getElementById('billing-toggle-monthly')?.addEventListener('click', () => setBillingPeriod('monthly'));
document.getElementById('billing-toggle-annual')?.addEventListener('click', () => setBillingPeriod('annual'));
