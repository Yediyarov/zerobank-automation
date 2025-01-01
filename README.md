# Zerobank UI Automation

## Overview

This project is an end-to-end test automation suite for the ZeroBank web application. It uses Playwright for browser automation and testing. The suite includes tests for various functionalities such as login, search, feedback form, currency exchange, and transaction filtering.

## Project Structure

```
zerobank-automation/
├── page-objects/
│   ├── AbstractPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── FeedbackPage.ts
│   └── components/
│       └── Navbar.ts
├── tests/
│   ├── e2e/
│   │   ├── e2e-login.spec.ts
│   │   ├── e2e-search.spec.ts
│   │   ├── e2e-submit-form.spec.ts
│   │   ├── e2e-currency-exchange.spec.ts
│   │   └── e2e-filter-transactions.spec.ts
├── playwright.config.ts
└── README.md
```


## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/zerobank-automation.git
    cd zerobank-automation
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure Playwright:
    ```sh
    npx playwright install
    ```

## Running Tests

To run all tests:
```sh
npx playwright test
```

To run a specific test file:
```sh
npx playwright test tests/e2e/e2e-login.spec.ts
```

## Test Descriptions

### Login/Logout Flow
**File:** e2e-login.spec.ts  
**Description:** Tests the login and logout functionality, including positive and negative scenarios.

### Search Functionality
**File:** e2e-search.spec.ts  
**Description:** Tests the search functionality for both valid and invalid search terms.

### Feedback Form
**File:** e2e-submit-form.spec.ts  
**Description:** Tests the feedback form's reset and submit functionalities.

### Currency Exchange
**File:** e2e-currency-exchange.spec.ts  
**Description:** Tests the currency exchange functionality, including rate display and conversion calculations.

### Filter Transactions
**File:** e2e-filter-transactions.spec.ts  
**Description:** Tests the filtering of transactions by account.

## Page Objects

### AbstractPage
**File:** AbstractPage.ts  
**Description:** Base class for all page objects, providing common methods and properties.

### HomePage
**File:** HomePage.ts  
**Description:** Represents the home page and includes methods for navigation and interactions.

### LoginPage
**File:** LoginPage.ts  
**Description:** Represents the login page and includes methods for performing login actions.

### FeedbackPage
**File:** FeedbackPage.ts  
**Description:** Represents the feedback page and includes methods for interacting with the feedback form.

### Navbar
**File:** components/Navbar.ts  
**Description:** Represents the navigation bar and includes methods for interacting with navigation tabs.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.