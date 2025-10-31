// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3000/ekobol',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 14'] },
    },
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000/ekobol',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
  timeout: 60 * 1000,
    env: {
      PUBLIC_URL: '/ekobol'
    }
  },
});
