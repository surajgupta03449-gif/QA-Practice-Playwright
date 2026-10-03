const { test, expect } = require('@playwright/test');

const FormsPage = require('../pages/FormsPage');
const data = require('../test-data/testData');

test.describe('QA Practice - Forms', () => {

  test('fill every form field and submit', async ({ page }) => {

    const form = new FormsPage(page);

    await form.open();

    await form.fillValid(data.forms);

    await page.getByTestId('forms-submit').click();

    await expect(page.getByTestId('forms-success'))
      .toContainText('Details Successfully Added');

    // Return to QA Practice home page
    await page.goto('/');

  });

  test('empty form validation', async ({ page }) => {

    await page.goto('/practice-forms');

    await page.getByTestId('forms-submit').click();

    await expect(
      page.getByText('First Name is required', { exact: true })
    ).toBeVisible();

    // Return to QA Practice home page
    await page.goto('/');

  });

});