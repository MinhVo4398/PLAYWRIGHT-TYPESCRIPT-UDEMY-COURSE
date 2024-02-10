import { test, expect } from "@playwright/test";

test("Visible/Hidden Assertion", async ({ page }) => {
  await page.goto("https://www.letskodeit.com/practice");
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  await page.close();
});

test("Present/ Not Present Assertion", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  //* Before click, the delete button is not show => so that the count =0
  await expect(page.locator(".added-manually")).not.toHaveCount(1);
  await page.locator("//button[normalize-space()='Add Element']").click();
  //* After click Add element, the delete button will come => so that count = 1
  await expect(page.locator(".added-manually")).toHaveCount(1);
  await page.close();
});

test("Enabled/ Disabled Assertion", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#property")).toBeEnabled();
  await expect(
    page.locator("//button[@title='Disabled button']")
  ).toBeDisabled();
  await page.close();
});

test("Text Match/Mismatch Assertion", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#color")).toHaveText("What is my color?");
  await expect(page.locator("#color")).not.toHaveText("abcd");
  await page.close();
});

test("Attribute Assertion", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute(
    "name",
    "username"
  );
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute(
    "class",
    "oxd-input"
  );
  await page.close();
});

test("URL Assertion", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //* Full URL Assertion
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //* Partial URL Assertion
  await expect(page).toHaveURL(/demo.orangehrmlive/);
  await page.close();
});

test("Title Assertion", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //* Full Title Assertion
  await expect(page).toHaveTitle("OrangeHRM");

  //*Partial URL Assertion
  await expect(page).toHaveTitle(/.*HRM/);
});

test("Screenshot Assertion", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveScreenshot();
  await page.close();
});
