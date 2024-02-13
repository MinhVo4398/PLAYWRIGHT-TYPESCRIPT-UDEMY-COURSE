import { test, expect } from "@playwright/test";
import * as orangeHrmData from './testData/orangeHRMCredentials.json';

test(`Login Test with valid credentials`, async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill(orangeHrmData.validUSerName);
  await page.locator("//input[@placeholder='Password']").fill(orangeHrmData.validPassword);
  await page.locator("//button[normalize-space()='Login']").click();
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test(`Login Test with invalid credentials`, async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill(orangeHrmData.invalidUserName);
  await page.locator("//input[@placeholder='Password']").fill(orangeHrmData.InvalidPassword);
  await page.locator("//button[normalize-space()='Login']").click();
  await expect(await page.locator(".oxd-alert-content-text")).toHaveText(
    "Invalid credentials"
  );
  await page.close();
});
