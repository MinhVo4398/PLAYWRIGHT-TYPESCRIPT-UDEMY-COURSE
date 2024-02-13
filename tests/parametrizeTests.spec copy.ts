import { test, expect } from "@playwright/test";

const credentials = [
  {
    username: "Admin",
    password: "admin123",
  },
  {
    username: "Admin123",
    password: "admin",
  },
];

credentials.forEach((data) => {
  test(`Login Test with credential ${data.username} + ${data.password}`, async ({
    page,
  }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await page.locator("//input[@placeholder='Username']").fill(data.username);
    await page.locator("//input[@placeholder='Password']").fill(data.password);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.locator(".oxd-userdropdown").click();
    await page.locator("text=Logout").click();
    await page.close();
  });
});
