# Bugs Identified During Testing

While performing the testing, the following issues were identified:

## 1. Failed to Locate Some of the Elements

- **Description**: During the test execution, certain elements on the page could not be located by the test automation. This might be due to incorrect selectors, dynamic loading of elements, or rendering issues.
- **Impact**: As a result, the tests that rely on these elements were unable to perform actions like clicking or asserting values.


## 2. Whitespace Trim is Not Being Deleted

- **Description**: Some assertions are failing due to leading or trailing whitespace in the text or input values. The expected values do not match the actual values because the whitespaces are not trimmed.
- **Impact**: This causes false negatives in the tests where assertions for text content or input fields are being compared.

## 3. Allows Duplicates

- **Description**: The system is allowing duplicate entries where it should not. For example, if a specific value (e.g., user ID, task name) must be unique, the test revealed that the application allows multiple entries with the same value.
- **Impact**: This can lead to data integrity issues and inconsistent behavior when dealing with user inputs or database entries.


## 4. Inconsistent Behavior Across Different Screen Sizes

- **Description**: The application displays inconsistent behavior across different screen sizes. Some elements may not be visible, or the layout may break when the screen size changes (e.g., mobile, tablet, desktop views).
- **Impact**: This affects the usability of the application on various devices and could lead to failures in tests designed for responsiveness.

