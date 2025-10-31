import { test, expect, devices } from '@playwright/test';

test.describe('Mobile UX - Working Menu Test', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 13'],
    });
    page = await context.newPage();
  });

  test('should open the mobile menu and click a link', async () => {
    await page.goto('/ekobol');
    await page.waitForLoadState('networkidle', { timeout: 30000 });
    await page.screenshot({ path: 'screenshots/mobile-ux-working-01-initial-load.png' });

    // Click the hamburger menu button
    const menuButton = page.locator('button:has(svg[d^="M4 6h16"])');
    await menuButton.click({ timeout: 10000 });

    // Verify the menu is open by looking for the close button
    const closeButton = page.locator('button:has(svg[d^="M6 18L18 6"])');
    await expect(closeButton).toBeVisible({ timeout: 10000 });
    await page.screenshot({ path: 'screenshots/mobile-ux-working-02-menu-opened.png' });

    // Click the "Solutions" link in the mobile menu
    const solutionsLink = page.locator('div.fixed.inset-y-0.right-0 >> text=Solutions');
    await solutionsLink.click({ timeout: 10000 });

    // Verify that we are on the Solutions page
    await page.waitForURL(/.*ekobol\/solutions/, { timeout: 15000 });
    await expect(page).toHaveURL(/.*ekobol\/solutions/);
    await page.screenshot({ path: 'screenshots/mobile-ux-working-03-solutions-page.png' });
  });
});