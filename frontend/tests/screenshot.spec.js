import { test, expect } from '@playwright/test';

test.describe('Screenshot everything', () => {
  test('should navigate and take screenshots', async ({ page }) => {
    await page.goto('/ekobol');

    const endTime = Date.now() + 20000;
    while (Date.now() < endTime) {
      const random = Math.random();
      if (page.context().browser().browserType().name() !== 'webkit' && random < 0.3) {
        await page.mouse.wheel(0, 1500);
      } else if (page.context().browser().browserType().name() !== 'webkit' && random < 0.6) {
        await page.mouse.wheel(0, -1500);
      } else {
        try {
          const links = await page.locator('a[href^="/"]').all();
          if (links.length > 0) {
            const randomLink = links[Math.floor(Math.random() * links.length)];
            await randomLink.click({ force: true, noWaitAfter: true });
          }
        } catch (error) {
          // ignore errors
        }
      }
      await page.waitForTimeout(250);
    }

    await page.screenshot({ path: 'screenshots/explored-homepage.png', fullPage: true });
  });
});
