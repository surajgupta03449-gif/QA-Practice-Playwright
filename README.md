# Playwright QA Practice Automation

A Playwright + JavaScript automation framework using QA Practice as the application under test.

## Covered sections

- Login
- Web Forms
- E-commerce
- Flight Booking
- UI Elements
- XPath Practice
- Forgot Password
- Registration
- REST API Playground

## Playwright features

- JavaScript
- Playwright Test
- Page Object Model
- getByRole
- getByText
- getByTestId
- CSS and XPath locators
- fill / click / check / selectOption
- File upload
- Modal
- Drag/drop-ready UI structure
- iFrame-ready UI structure
- APIRequestContext
- Assertions
- Hooks / reusable page classes
- Screenshots on failure
- Video on failure
- Trace on retry
- HTML report
- Chromium / Firefox / WebKit
- GitHub Actions

## Install

```powershell
npm install
npx playwright install
```

## Run all tests

```powershell
npx playwright test
```

## Run headed

```powershell
npx playwright test --headed
```

## Run one file

```powershell
npx playwright test tests/05-ui-elements.spec.js --headed
```

## Open report

```powershell
npx playwright show-report
```

The tests intentionally return to `https://www.qapractice.com/` after each browser section so the next section starts clean.

QA Practice states that its practice pages use stable IDs/data-testid values and that entered practice data is not stored.
