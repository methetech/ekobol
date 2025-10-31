import { test, expect, devices } from '@playwright/test';

test.describe('Mobile UX - Scrolling and Targeted Click Interaction', () => {
  let page;
  let isWebKitGlobal;

  test.beforeEach(async ({ browser }) => {
    isWebKitGlobal = browser.browserType().name() === 'webkit';
    const context = await browser.newContext({
      ...devices['iPhone 13'],
    });
    page = await context.newPage();

    page.on('crash', event => console.log(`Page crashed: ${event.url()}`));
    page.on('close', () => console.log('Page closed.'));
  });

  test('should navigate to homepage, perform scrolling, and click on About Us link', async () => {
    // Navigate to the homepage.
    await page.goto('/ekobol');

    // Wait for the page to load.
    await page.waitForLoadState('networkidle');

    // Perform a series of scrolling interactions
    for (let i = 0; i < 3; i++) { // Perform 3 scroll interactions
      const randomScrollDirection = Math.random();

      if (randomScrollDirection < 0.5) { // 50% chance to scroll down
        if (isWebKitGlobal) {
          await page.evaluate(() => window.scrollBy(0, 500));
        } else {
          await page.mouse.wheel(0, 500);
        }
        console.log(`Scrolled down (interaction ${i + 1}).`);
      } else { // 50% chance to scroll up
        if (isWebKitGlobal) {
          await page.evaluate(() => window.scrollBy(0, -500));
        } else {
          await page.mouse.wheel(0, -500);
        }
        console.log(`Scrolled up (interaction ${i + 1}).`);
      }

      await page.waitForTimeout(1000); // Wait for a short period between scrolls
      await page.screenshot({ path: `screenshots/mobile-ux-scroll-click-scroll-${i + 1}.png` }); // Take screenshot after each scroll
    }

    // Locate the "About Us" link in the footer.
    const aboutUsLink = page.locator('footer a[href="/ekobol/about"]');

    // Ensure the link is visible and clickable.
    await aboutUsLink.waitFor({ state: 'visible' });

    // Scroll the element into view explicitly before clicking
    await aboutUsLink.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Small delay to allow any overlays to settle

    // Get the bounding box of the element
    const boundingBox = await aboutUsLink.boundingBox();

    if (boundingBox) {
      // Calculate the center of the element
      const x = boundingBox.x + boundingBox.width / 2;
      const y = boundingBox.y + boundingBox.height / 2;

      // Click at the center of the element using mouse coordinates
      try {
        await page.mouse.click(x, y);
        console.log(`Clicked on About Us link at coordinates (${x}, ${y}).`);
      } catch (error) {
        console.log(`Click failed on About Us link at coordinates (${x}, ${y}): ${error.message}`);
      }
    } else {
      console.log('Bounding box not found for About Us link.');
    }

    // Wait for DOM content to be loaded before checking URL
    await page.waitForLoadState('domcontentloaded');

    // Wait for navigation to the About Us page.
    await page.waitForURL(/.*ekobol\/about/, { timeout: 15000 }); // Increased URL wait timeout

    // Take a screenshot of the About Us page.
    await page.screenshot({ path: 'screenshots/mobile-ux-about-us-page.png' });

    // Assert that we are on the About Us page.
    await expect(page).toHaveURL(/.*ekobol\/about/);
  });
});
