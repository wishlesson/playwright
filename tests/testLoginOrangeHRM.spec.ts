import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test("Login Form", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Click the get started link.
  expect(page.getByRole("heading", { name: "Login" })).toBeVisible;
});
