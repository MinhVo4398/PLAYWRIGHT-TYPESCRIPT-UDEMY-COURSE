import { test, expect } from "@playwright/test";

test("Visible/Hidden Assertion", async ({ page }) => {
  await page.goto("https://www.letskodeit.com/practice");
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  await page.close();
});

test.only("Present/ Not Present Assertion", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  //* Before click, the delete button is not show => so that the count =0
  await expect(page.locator(".added-manually")).not.toHaveCount(1);
  await page.locator("//button[normalize-space()='Add Element']").click();
  //* After click Add element, the delete button will come => so that count = 1
  await expect(page.locator(".added-manually")).toHaveCount(1);
  await page.close();
});
