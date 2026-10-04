const BasePage = require('./BasePage');

class EcommercePage extends BasePage {

  async open() {
    await this.page.goto('/practice-ecommerece-website');
  }

  async checkout(data) {

    // Set product quantity
    await this.page
      .getByTestId(`quantity-${data.productId}`)
      .fill(data.quantity);

    // Add product to cart
    await this.page
      .getByTestId(`add-to-cart-${data.productId}`)
      .click();

    // Open cart
    await this.page
      .getByTestId('ecom-cart-button')
      .click();

    // Proceed to checkout
    const proceedButton = this.page.getByTestId('ecom-proceed-to-buy');

    await proceedButton.waitFor({
      state: 'visible'
    });

    await proceedButton.click();

    // Shipping address
    await this.page.getByTestId('ecom-address-name').fill('Ads Lovelace');

    await this.page.getByTestId('ecom-address-street').fill('1 Analytical Ave');

    await this.page.getByTestId('ecom-address-city').fill('London');

    await this.page.getByTestId('ecom-address-state').fill('LDN');

    await this.page.getByTestId('ecom-address-zip').fill('EC1A');

    //Save address
    await this.page.getByTestId('ecom-save-address').click();


    // Payment
    const cardNumber = this.page.getByTestId('ecom-card-number');

    await cardNumber.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await cardNumber.fill(data.card);

    await this.page
      .getByTestId('ecom-expiry')
      .fill(data.expiry);

    await this.page
      .getByTestId('ecom-cvv')
      .fill(data.cvv);

    // Place order
    await this.page
      .getByTestId('ecom-buy-now')
      .click();
  }
}

module.exports = EcommercePage;

