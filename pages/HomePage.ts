import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchTextBox: Locator;
  readonly searchButton: Locator;
  readonly acceptCookiesButton: Locator;
  readonly cookieOverlay: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchTextBox = page
      .getByRole('combobox', { name: /search for brand/i })
      .first();

    this.searchButton = page.getByRole('button', {
      name: 'Search',
    });

    this.acceptCookiesButton = page.getByRole('button', {
      name: 'Accept all',
    });

    this.cookieOverlay = page.locator('#usercentrics-cmp-ui');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

async acceptCookies(): Promise<void> {
  try {
    await this.acceptCookiesButton.click({ timeout: 5000 });

    await expect(this.cookieOverlay).toBeHidden({
      timeout: 10000,
    });
  } catch {
    // Cookie banner not displayed
  }
}

  async searchForItem(keyword: string): Promise<void> {
    await expect(this.cookieOverlay).toBeHidden({
      timeout: 10000,
    });
    await this.searchTextBox.fill(keyword);
    await this.searchButton.click();
  }
}