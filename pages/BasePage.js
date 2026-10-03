class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goHome() {
    await this.page.goto('/');
  }
}

module.exports = BasePage;
