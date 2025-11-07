import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Global settings for ALL tests
  use: {
    // Stealth settings to avoid bot detection
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    
    // Additional stealth headers
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
    },
    
    // Bypass CSP and other restrictions
    bypassCSP: true,
    
    // More natural behavior
    hasTouch: false,
    isMobile: false,
  },

  // Increase timeouts globally
  timeout: 60000,
  expect: {
    timeout: 15000,
  },

  // Retry failed tests
  retries: 1,

  // Reporter configuration
  reporter: [
    ['html'],
    ['line'],
    ['json']
  ],

  // Projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Chromium-specific stealth
        channel: 'chrome', // Use actual Chrome if available
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
      },
    },
    // Uncomment if you fix Webkit dependencies
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});