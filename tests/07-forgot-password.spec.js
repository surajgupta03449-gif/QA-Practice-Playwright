const { test, expect } = require('@playwright/test');

test('QA Practice - forgot password first step', async ({ page }) => {
  await page.goto('/forget-password');

  await expect(page.getByRole('heading', { name: 'Master Password Recovery Automation' })).toBeVisible();

  // The live page documents this demo email.
  await page.getByLabel(/Email Address/i).fill('user@premiumbank.com');
  await page.getByRole('button', { name: 'Continue' }).click();

  // The recovery flow is intentionally verified by its next visible step.
  await expect(page.getByText(/secret code|security code|new password/i).first()).toBeVisible();

  await page.goto('/');
});
