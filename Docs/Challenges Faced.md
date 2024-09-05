# Challenges Faced

## 1. Getting Cypress to Run on My Local Machine

- **Issue**: When setting up Cypress on my local machine, I encountered issues with launching the browsers (Chrome and Edge). They would either not open or crash immediately upon test execution.
- **Troubleshooting**: 
  - Ensured that both browsers were up-to-date.
  - Checked Cypress configuration for supported browser versions.
  - Attempted to run Cypress in headless mode, which bypassed the issue but didn’t allow for interactive testing.
  - Cleared the browser cache and reset browser settings, but the problem persisted.
- **Solution**: After several attempts, I had to reinstall Cypress and the affected browsers, which resolved the issue. Additionally, I verified the correct installation path of Cypress and the browsers in my system.

## 2. Trying to Locate Some Elements

- **Issue**: During testing, some elements were difficult to locate using Cypress selectors. The automation was unable to interact with dynamically loaded content or elements that appeared based on certain user actions.
- **Troubleshooting**: 
  - Tried different selector strategies such as `cy.get()`, `cy.contains()`, and using more specific CSS selectors and XPath.
  - Introduced `cy.wait()` and `cy.get().should('be.visible')` to handle asynchronous element loading.
  - Inspected the HTML structure to identify hidden elements or dynamically changing IDs and classes.
- **Solution**: By refining the selector strategy and ensuring that elements were visible or loaded before interacting with them, I managed to resolve most of the issues.

## 3. Making the Test Runner Stop if a Certain Test Fails

- **Issue**: By default, Cypress continues running all tests even if a critical test fails. I needed a way to stop the test suite entirely when a specific test encountered a failure.
- **Troubleshooting**:
  - Explored Cypress configuration options but found that Cypress does not natively support stopping all tests upon a failure.
  - Looked into conditional logic to programmatically exit the test suite.
- **Solution**: I added a 'aftereach' condition that checks the current state of the test and if it is equals to 'failed'. The test runner stops 
running
