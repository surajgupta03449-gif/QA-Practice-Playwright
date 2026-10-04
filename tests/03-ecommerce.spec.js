const { test, expect } = require('@playwright/test');

const EcommercePage = require('../pages/EcommercePage');
const data = require('../test-data/testData');

test('QA Practice - complete e-commerce checkout', async ({ page }) => {

  const shop = new EcommercePage(page);

  await shop.open();

  // Search for Wireless Mouse
  await page
    .getByTestId('ecom-search')
    .fill('mouse');

  // Verify Wireless Mouse
  await expect(
    page.getByTestId('view-product-2')
  ).toBeVisible();

  // Select Electronics category
  await page
    .getByTestId('ecom-category-electronics')
    .click();

  // Sort products by price
  await page
    .getByTestId('ecom-sort')
    .selectOption('price-asc');

  // Complete checkout
  await shop.checkout(data.ecommerce);

  // Verify successful order
  await expect(
    page.getByTestId('ecom-order-success')
  ).toContainText('Order Successful');

  // Return to home
  await shop.goHome();

});