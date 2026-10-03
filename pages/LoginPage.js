const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.email = page.getByTestId('login-email');
    this.password = page.getByTestId('login-password');
    this.remember = page.getByTestId('login-remember');
    this.submit = page.getByTestId('login-submit');
    this.success = page.getByTestId('login-success');
    this.error = page.getByTestId('login-error');
  }

  async open() {
    await this.page.goto('/practice-login-form');
  }

  async login(email, password, remember = true) {
    await this.email.fill(email);
    await this.password.fill(password);
    if (remember) await this.remember.check();
    await this.submit.click();
  }
}

module.exports = LoginPage;
