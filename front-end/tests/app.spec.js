import { test, expect } from '@playwright/test';

test('has Flask API Response text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const heading = await page.locator('text=Flask API Response');
  await expect(heading).toBeVisible();
});

test('has Hello, World! message', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const message = await page.locator('text=Hello, World!');
  await expect(message).toBeVisible();
});
