import { test } from "@playwright/test";

test("Login Test for orangeHRM", async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php");
})