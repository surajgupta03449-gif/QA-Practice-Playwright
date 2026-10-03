const BasePage = require('./BasePage');

class FormsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open() {
    await this.page.goto('/practice-forms');
  }

  async fillValid(data) {
    await this.page.getByTestId('forms-country').selectOption(data.country);
    await this.page.getByTestId('forms-title').selectOption(data.title);
    await this.page.getByTestId('forms-first-name').fill(data.firstName);
    await this.page.getByTestId('forms-last-name').fill(data.lastName);
    await this.page.locator('#forms-dob').fill(data.dob);
    await this.page.getByTestId('forms-doj').fill(data.doj);
    await this.page.getByTestId('forms-email').fill(data.email);
    await this.page.getByTestId('forms-phone-code').selectOption(data.phoneCode);
    await this.page.getByTestId('forms-phone-number').fill(data.phone);
    await this.page.getByTestId('forms-comm-email').check();
  }
}

module.exports = FormsPage;
