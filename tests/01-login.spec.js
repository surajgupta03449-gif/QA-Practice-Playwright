const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../test-data/testData');

test.describe('QA Practice - Login', () => {
  test('valid login with remember me', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(data.login.email, data.login.password);
    await expect(login.success).toContainText('Login Successful');
    await page.goto('/');
    await expect(page).toHaveURL(/qapractice\.com\/?$/);
  });

  test('invalid login shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login('wrong@example.com', 'Wrong@123', false);
    await expect(login.error).toContainText('Invalid');
    await page.goto('/');
  });

  test('empty login shows validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.submit.click();
    await expect(login.error).toContainText('required');
    await page.goto('/');
  });
});
