import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Google Search' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Google Search' }).click();
  await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
  await page.goto('https://www.google.com/');
});