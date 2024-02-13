import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const orangeHrmData = parse(
  fs.readFileSync(path.join(__dirname, "testData", "orangeHRMcreds.csv")), 
  {
columns:true,
skip_empty_lines: true
 });


test(`Login Test with valid credentials`, async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill(orangeHrmData[0].username);
  await page
    .locator("//input[@placeholder='Password']")
    .fill(orangeHrmData[0].password);
  await page.locator("//button[normalize-space()='Login']").click();
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test(`Login Test with invalid credentials`, async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page
    .locator("//input[@placeholder='Username']")
    .fill(orangeHrmData[1].password);
  await page
    .locator("//input[@placeholder='Password']")
    .fill(orangeHrmData[1].password);
  await page.locator("//button[normalize-space()='Login']").click();
  await expect(await page.locator(".oxd-alert-content-text")).toHaveText(
    "Invalid credentials"
  );
  await page.close();
});
