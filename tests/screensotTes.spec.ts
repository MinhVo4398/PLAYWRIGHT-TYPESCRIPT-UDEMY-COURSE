import { test, expect } from "@playwright/test";

test("Login Test for Orange HRM", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.screenshot({ path: "./screenshot/LoginPage.png" });
  await page.locator("//button[normalize-space()='Login']").click();

  await page.locator(".oxd-userdropdown").click();
   await page.screenshot({ path: "./screenshot/HomePage.png" });
  await page.locator("text=Logout").click();
  await page.close();
});
