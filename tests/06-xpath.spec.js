const { test, expect } = require('@playwright/test');

test('QA Practice - XPath challenge page', async ({ page }) => {

  await page.goto('/SeleniumXPathGuide');

  await expect(
    page.getByRole('heading', {
      name: 'Interactive XPath Practice'
    })
  ).toBeVisible();

  // The live challenge shows the Username example:
  // //input[@id='username']

  // Find the XPath answer input using its placeholder
  const xpathInput = page.getByPlaceholder(
    '//tag[@attribute=\'value\']'
  );

  await expect(xpathInput).toBeVisible();

  // Enter the XPath answer for Question 1
  await xpathInput.fill("//input[@id='username']");

  // Submit the XPath answer
  await page.getByRole('button', {
    name: 'Submit'
  }).click();

  // Verify the challenge accepted the XPath
  await expect(
    page.getByText(/correct|solved|success/i).first()
  ).toBeVisible();

  // Return to QA Practice home
  await page.goto('/');
});

