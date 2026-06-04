import { Page, Locator, expect } from '@playwright/test';

export class LotPage {
  readonly page: Page;
  readonly lotTitle: Locator;
  readonly favouriteButton: Locator;
  readonly currentBidAmount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lotTitle = page.locator('h1').first();
    this.favouriteButton = page
      .locator('[data-sentry-component="LotDetailsFavoriteButton"] button')
      .first();
    this.currentBidAmount = page
      .locator('[data-sentry-component="Amount"]')
      .first();
  }

  async verifyLotPageOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/l\//);
    await expect(this.lotTitle).toBeVisible();
  }

  async getLotDetails(): Promise<{
    lotName: string;
    favouriteCount: string | null;
    currentBid: string;
  }> {
    const lotName = await this.lotTitle.innerText();
    const favouriteCount = await this.favouriteButton.getAttribute('count');
    const currentBid = await this.currentBidAmount.innerText();

    return {
      lotName: lotName.trim(),
      favouriteCount,
      currentBid: currentBid.trim(),
    };
  }

  async printLotDetails(): Promise<void> {
    const lotDetails = await this.getLotDetails();

    console.log('========================');
    console.log('Lot Name:', lotDetails.lotName);
    console.log('Favourite Count:', lotDetails.favouriteCount);
    console.log('Current Bid:', lotDetails.currentBid);
    console.log('========================');
  }
}