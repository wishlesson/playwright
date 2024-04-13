import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers';

test('has title', async ({ page }) => {
  //Navigate to a URL
  await page.goto('https://accounts.gecstage.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Casino Schedule Ease/);
});

test('login check',{tag: '@smoke',}, async ({ page }) => {
  //await page.goto('https://apir.gecstage.com');
  await page.goto('https://accounts.gecstage.com/login?clientId=4C2F17D6723D0C748F80A9A5A9E829E72F3998A6FEF74DE5DD7EF264FC395DDFB0A8E62A9F4BC1F9FACE9BDF40B21435065D7D78E63F1392A9130B8DBD8E8856&_t=20240312101830103');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('prasanth.kumar@geccomputersystemsllc.com');
  await page.getByPlaceholder('Password').fill('!Ch@ng3m3');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('h3')).toContainText('Welcome to Schedule Ease');
  });

test('Department Checks APIR',{tag: '@smoke',}, async ({ page }) => {
  //await page.goto('https://apir.gecstage.com');
  await page.goto('https://accounts.gecstage.com/login?clientId=4C2F17D6723D0C748F80A9A5A9E829E72F3998A6FEF74DE5DD7EF264FC395DDFB0A8E62A9F4BC1F9FACE9BDF40B21435065D7D78E63F1392A9130B8DBD8E8856&_t=20240312101830103');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('prasanth.kumar@geccomputersystemsllc.com');
  await page.getByPlaceholder('Password').fill('!Ch@ng3m3');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('h3')).toContainText('Welcome to Schedule Ease');
  });

test('All Side menu check',{tag: '@smoke',}, async ({ page }) => {
  //await page.goto('https://apir.gecstage.com');
  await page.goto('https://accounts.gecstage.com/login?clientId=4C2F17D6723D0C748F80A9A5A9E829E72F3998A6FEF74DE5DD7EF264FC395DDFB0A8E62A9F4BC1F9FACE9BDF40B21435065D7D78E63F1392A9130B8DBD8E8856&_t=20240312101830103');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('prasanth.kumar@geccomputersystemsllc.com');
  await page.getByPlaceholder('Password').fill('!Ch@ng3m3');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('h3')).toContainText('Welcome to Schedule Ease');

  });