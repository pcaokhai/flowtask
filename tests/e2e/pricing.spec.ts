import { test, expect } from '@playwright/test';

test.describe('Pricing page critical flow', () => {
  test('toggling to annual billing updates the displayed price', async ({ page }) => {
    // Arrange
    await page.goto('/');
    const teamPrice = page.getByTestId('price-team');
    await expect(teamPrice).toHaveText('$79');

    // Act
    await page.getByTestId('billing-toggle-annual').click();

    // Assert
    await expect(teamPrice).toHaveText('$63.20');
  });

  test('selecting a plan CTA carries the correct plan identity', async ({ page }) => {
    // Arrange
    await page.goto('/');
    const teamCta = page.getByTestId('cta-team');

    // Act & Assert
    await expect(teamCta).toHaveAttribute('data-plan', 'team');
    await expect(teamCta).toHaveAttribute('href', '#signup');
    await teamCta.focus();
    await expect(teamCta).toBeFocused();
  });
});
