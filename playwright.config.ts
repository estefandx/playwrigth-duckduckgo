import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, 
    browserName: 'chromium',
    screenshot: 'on',
    video: 'retain-on-failure'
  },
  testDir: 'tests',
});