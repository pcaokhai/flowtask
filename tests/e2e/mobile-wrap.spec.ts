import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 800 } });

test('header CTA and savings badge do not wrap at 375px', async ({ page }) => {
  await page.goto('/');

  const headerCta = page.locator('a.btn-secondary', { hasText: 'Start free' });
  const headerCtaBox = await headerCta.boundingBox();
  expect(headerCtaBox).not.toBeNull();
  expect(headerCtaBox!.height).toBeLessThan(60);

  const savingsBadge = page.locator('.savings-badge');
  const badgeBox = await savingsBadge.boundingBox();
  expect(badgeBox).not.toBeNull();
  expect(badgeBox!.height).toBeLessThan(30);

  await page.screenshot({ path: '/Users/khaip/.no-mistakes/evidence/01M1ZH4HHXRFCC7PWE59PYGMKQ/mobile-375-full.png', fullPage: true });
  await headerCta.screenshot({ path: '/Users/khaip/.no-mistakes/evidence/01M1ZH4HHXRFCC7PWE59PYGMKQ/header-cta-375.png' });
  await savingsBadge.screenshot({ path: '/Users/khaip/.no-mistakes/evidence/01M1ZH4HHXRFCC7PWE59PYGMKQ/savings-badge-375.png' });
});
