const { test, expect } = require('@playwright/test');

const UIElementsPage = require('../pages/UIElementsPage');

test('QA Practice - exercise UI elements', async ({ page }) => {

  const ui = new UIElementsPage(page);

  await ui.open();

  await ui.exerciseAll();

  // Verify the actual button output
  await expect(
    page.getByText('Clicked 3 times', { exact: true })
  ).toBeVisible();

  await page.goto('/');

});

