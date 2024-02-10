import { test, expect } from "@playwright/test";

test("Fill Method", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[normalize-space()='Login']").click();
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test("Press - Sequentially method", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page
    .locator("//input[@placeholder='Username']")
    .pressSequentially("Admin");
  await page
    .locator("//input[@placeholder='Password']")
    .pressSequentially("admin123");
  //* After enter password, call press Enter key in keyboard
  await page.locator("//input[@placeholder='Password']").press("Enter");
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
});

test("Press - Sequentially method with Delay", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page
    .locator("//input[@placeholder='Username']")
    .pressSequentially("Admin", { delay: 200 });
  await page
    .locator("//input[@placeholder='Password']")
    .pressSequentially("admin123", { delay: 200 });
  //* After enter password, call press Enter key in keyboard
  await page.locator("//input[@placeholder='Password']").press("Enter");
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
});

test("Regular Button Single Click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await page.locator("#click_area").click();
  await expect(page.locator("#click_type")).toHaveText("Click");
});

test("Double Click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await page.locator("#click_area").dblclick();
  await expect(page.locator("#click_type")).toHaveText("Double-Click");
});

test("Right Click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await page.locator("#click_area").click({button:"right"});
  await expect(page.locator("#click_type")).toHaveText("Right-Click");
});
