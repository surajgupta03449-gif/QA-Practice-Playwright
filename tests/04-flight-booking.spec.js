const { test, expect } = require('@playwright/test');
const FlightBookingPage = require('../pages/FlightBookingPage');
const data = require('../test-data/testData');

test('QA Practice - complete one-way flight booking', async ({ page }) => {
  const flight = new FlightBookingPage(page);
  await flight.open();
  await flight.bookOneWay(data.flight);

  await expect(page.getByTestId('flight-booking-success')).toContainText('Booking Confirmed');
  await expect(page.getByTestId('flight-pnr')).toBeVisible();

  await page.goto('/');
});
