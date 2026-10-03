const BasePage = require('./BasePage');

class UIElementsPage extends BasePage {
  async open() {
    await this.page.goto('/practice-different-ui-elements');
  }

  async exerciseAll() {
    const p = this.page;

    await p.getByTestId('ui-text-field').fill('Playwright automation');
    await p.getByTestId('ui-textarea').fill('QA Practice UI component test');

    await p.getByTestId('ui-click-button').click();
    await p.getByTestId('ui-click-button').click();
    await p.getByTestId('ui-click-button').click();

    await p.getByTestId('ui-single-checkbox').check();
    await p.getByTestId('ui-checkbox-option1').check();
    await p.getByTestId('ui-checkbox-option3').check();

    await p.getByTestId('ui-radio-Radio 2').check();

    await p.getByTestId('ui-single-dropdown').selectOption('India');
    await p.getByTestId('ui-multi-dropdown').selectOption(['Option A', 'Option B']);

    await p.getByTestId('ui-slider').fill('70');
    await p.getByTestId('ui-progress-increment').click();

    await p.getByTestId('ui-th-name').click();

    await p.getByTestId('ui-datepicker').fill('2026-10-03');

    await p.getByTestId('ui-file-upload').setInputFiles('fixtures/sample.txt');

    await p.getByTestId('ui-update-content').click();
    await p.getByTestId('ui-show-notification').click();

    await p.getByTestId('ui-modal-open').click();
    const close = p.getByRole('button', { name: /close/i }).last();
    if (await close.count()) await close.click();

    // Test link without navigating away from the current page
    await p.getByTestId('ui-link').click({
      modifiers: ['Control']
    });

    await p.getByTestId('ui-image').click();
  }
}

module.exports = UIElementsPage;