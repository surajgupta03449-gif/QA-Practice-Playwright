const BasePage = require('./BasePage');

class FlightBookingPage extends BasePage {
  async open() {
    await this.page.goto('/flight-booking-scenarios');
  }

  async bookOneWay(data) {
    await this.page.getByTestId('flight-from').selectOption(data.from);
    await this.page.getByTestId('flight-to').selectOption(data.to);
    await this.page.getByTestId('flight-departure-date').fill(data.departure);
    await this.page.getByTestId('flight-passengers').fill('1');
    await this.page.getByTestId('flight-class').selectOption('Economy');
    await this.page.getByTestId('flight-one-way').check();
    await this.page.getByTestId('flight-search').click();

    await this.page.getByTestId('flight-sort').selectOption('price-asc');
    await this.page.getByTestId('flight-select-GW100').click();
    await this.page.getByTestId('flight-continue-to-passengers').click();

    await this.page.getByTestId('flight-passenger-name').fill(data.passenger);
    await this.page.getByTestId('flight-passenger-email').fill(data.email);
    await this.page.getByTestId('flight-passenger-phone').fill(data.phone);
    await this.page.getByTestId('flight-continue-to-payment').click();

    await this.page.getByTestId('flight-card-number').fill(data.card);
    await this.page.getByTestId('flight-expiry').fill(data.expiry);
    await this.page.getByTestId('flight-cvv').fill(data.cvv);
    await this.page.getByTestId('flight-book').click();
  }
}

module.exports = FlightBookingPage;
