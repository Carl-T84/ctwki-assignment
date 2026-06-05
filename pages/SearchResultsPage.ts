import { Page, Locator, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly lotCards: Locator;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lotCards = page.locator('a[href*="/l/"]');
    this.noResultsMessage = page.getByText('No exact results. Check out these related objects.');
  }

  async verifySearchResultsPageOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/search|q=/i);

    await expect(
      this.lotCards.nth(1),
      'Expected at least 2 search results'
    ).toBeVisible({ timeout: 15000 });
  }

  async verifyNoResultsFound(): Promise<void> {
    await expect(this.noResultsMessage).toBeVisible;
  }

  async clickSecondLot(): Promise<void> {
    await this.verifySearchResultsPageOpened();

    await this.lotCards.nth(1).click();
  }

  async getResultCount(): Promise<number> {
    return await this.lotCards.count();
  }
}