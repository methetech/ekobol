import { test, expect, devices } from '@playwright/test';

test.describe('Initial Load Screenshot', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 13'],
    });
    page = await context.newPage();
  });

  test('should take a screenshot of the initial page load', async () => {
    await page.goto('/ekobol');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'screenshots/initial-load.png' });
  });
});