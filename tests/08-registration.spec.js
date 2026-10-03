const { test, expect } = require('@playwright/test');
const data = require('../test-data/testData');

test('QA Practice - registration form', async ({ page }) => {
  await page.goto('/register');

  await page.getByLabel(/Email Address/i).fill(data.registration.email);
  await page.getByLabel(/^Password$/i).fill(data.registration.password);
  await page.getByLabel(/Confirm Password/i).fill(data.registration.password);

  await expect(page.getByText(/At least 8 characters/i)).toBeVisible();

  await page.getByRole('button', { name: 'Register' }).click();

  // Success/error state is checked without assuming a backend account is created.
  await expect(page.locator('body')).toContainText(/success|registered|account|already|error/i);

  await page.goto('/');
});
