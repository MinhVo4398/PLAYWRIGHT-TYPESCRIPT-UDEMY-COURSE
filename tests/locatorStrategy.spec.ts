import { test, expect } from "@playwright/test";

test("Different Locator Strategy", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.click("#login-button");
});
