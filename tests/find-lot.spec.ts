import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { LotPage } from '../pages/LotPage';

test.describe('Catawiki lot search', () => {
  test('should search for train and print second lot details', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const lotPage = new LotPage(page);

    await homePage.open();
    await homePage.acceptCookies();
    await homePage.searchForItem('train');

    await searchResultsPage.clickSecondLot();

    await lotPage.verifyLotPageOpened();
    await lotPage.printLotDetails();
  });
});