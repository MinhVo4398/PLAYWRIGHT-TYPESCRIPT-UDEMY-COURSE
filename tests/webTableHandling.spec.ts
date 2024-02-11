import { test, expect } from "@playwright/test";
import { abort } from "process";

test("Handling Webtable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("table[name='BookTable']");
  //* Total Rows and Columns
  const columns = table.locator("tr th");
  console.log("Number of ColumnsL ", await columns.count());

  const rows = table.locator("tbody tr");
  console.log("Numbers of Rows: ", await rows.count());

  expect(await columns.count()).toBe(3);
  expect(await rows.count()).toBe(7);

  await page.close();
});

test("Selecting Single Checkbox in the Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const columns = table.locator("thead th");
  const rows = table.locator("tbody tr");

    //* Select Single Checkbox
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 3",
  });
  await matchedRow.locator("input").check();

  await page.pause();
  await page.close();
});

test("Selecting Multiple Checkbox in the Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const columns = table.locator("thead th");
  const rows = table.locator("tbody tr");

  //* Select Single Checkbox
 await selectProduct(rows, page, "Product 1");
  await selectProduct(rows, page, "Product 3");
 await selectProduct(rows, page, "Product 5");

  await page.pause();
  await page.close();

});

 async function selectProduct(rows, page, productName) {
   const matchedRow = rows.filter({
     has: page.locator("td"),
     hasText: productName,
   });
   await matchedRow.locator("input").check();
 }
