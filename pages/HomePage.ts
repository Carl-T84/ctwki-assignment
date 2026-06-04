import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchTextBox: Locator;
  readonly searchButton: Locator;
  readonly acceptCookiesButton: Locator;

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
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async acceptCookies(): Promise<void> {
    try {
      await this.acceptCookiesButton.waitFor({
        state: 'visible',
        timeout: 5000,
      });

      await this.acceptCookiesButton.click();
    } catch {
      // Cookie banner not displayed
    }
  }

  async searchForItem(keyword: string): Promise<void> {
    await this.searchTextBox.fill(keyword);
    await this.searchButton.click();
  }
}