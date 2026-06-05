# Catawiki UI Automation Assignment

## Overview:

This project contains automated UI tests for the Catawiki website using Playwright and TypeScript.

The test automates the following scenario:

1. Open the Catawiki homepage
2. Accept cookies (if displayed)
3. Search for the keyword "train"
4. Open the second lot from the search results
5. Print the lot name, favourite count and current bid to the console

## Tech Stack:

1. Playwright
2. TypeScript
3. Node.js
4. GitHub Actions

## Installation

### Clone the repository:

git clone [https://github.com/Carl-T84/ctwki-assignment]

### Install dependencies:

```bash
npm install
``` 

### Install Playwright browsers:

```bash
npx playwright install
``` 

## Running Tests

### Run all tests:

```bash
npx playwright test 
``` 

### Run in headed mode:

```bash
npx playwright test --headed
``` 

### Run a specific test:

```bash
npx playwright test tests/find-lot.spec.ts
``` 

### Open the HTML report:

```bash
npx playwright show-report
``` 

## CI/CD

The project uses GitHub Actions to run Playwright tests automatically on every push and pull request. This workflow includes.

1. Dependency installation
2. Playwright browser installation
3. Test execution
4. Generation of a Playwright report and test evidence upload

## Author

Carl Thomas
Senior QA Engineer / QA Lead