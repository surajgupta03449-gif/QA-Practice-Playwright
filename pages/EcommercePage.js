const BasePage = require('./BasePage');

class EcommercePage extends BasePage {
  async open() {
    await this.page.goto('/practice-ecommerece-website');
  }

  async checkout(data) {
    await this.page.getByTestId(`quantity-${data.productId}`).fill(data.quantity);
    await this.page.getByTestId(`add-to-cart-${data.productId}`).click();
    await this.page.getByTestId('ecom-cart-button').click();
    await this.page.getByTestId('ecom-proceed-to-buy').click();

    await this.page.getByTestId('ecom-address-name').fill('Suraj Gupta');
    await this.page.getByTestId('ecom-address-street').fill('1 QA Practice Street');
    await this.page.getByTestId('ecom-address-city').fill('Delhi');
    await this.page.getByTestId('ecom-address-state').fill('Delhi');
    await this.page.getByTestId('ecom-address-zip').fill('110001');
    await this.page.getByTestId('ecom-save-address').click();

    await this.page.getByTestId('ecom-card-number').fill(data.card);
    await this.page.getByTestId('ecom-expiry').fill(data.expiry);
    await this.page.getByTestId('ecom-cvv').fill(data.cvv);
    await this.page.getByTestId('ecom-buy-now').click();
  }
}

module.exports = EcommercePage;
