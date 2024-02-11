import { test, expect } from "@playwright/test";

test("Checkbox button handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  const cricketCheckbox = await page.locator("#checkbox1");
  const movieCheckbox = await page.locator("#checkbox2");
  const hockeyCheckbox = await page.locator("#checkbox3");

  // Way 1 Assert
  expect(cricketCheckbox).not.toBeChecked();
  expect(movieCheckbox).not.toBeChecked();
  expect(hockeyCheckbox).not.toBeChecked();

  // Way 2 Assert
  expect(await cricketCheckbox.isChecked()).toBeFalsy();
  expect(await movieCheckbox.isChecked()).toBeFalsy();
  expect(await hockeyCheckbox.isChecked()).toBeFalsy();

  await cricketCheckbox.check();
  await movieCheckbox.check();
  await hockeyCheckbox.check();

  expect(cricketCheckbox).toBeChecked();
  expect(movieCheckbox).toBeChecked();
  expect(hockeyCheckbox.isChecked()).toBeTruthy();

  await page.close();
});

test("Multi-Select Dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#multi-select", [
    { value: "Ohio" },
    { label: "Texas" },
    { index: 3 },
  ]);
  await page.pause();
  await page.close();
});

test("Searchable Dynamic Dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.close();
});

test(" Searchable Dynamic Dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator("span[role='combobox']").click();
  await page.locator("input[role='textbox']").fill("India");
  await page.locator("ul#select2-country-results>li").click();
  await page.waitForTimeout(7000);
  await page.close();
});

test("Non Searchable Dynamic Dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator("span[role='combobox']").click();
  await page
    .locator("ul#select2-country-results")
    .locator("li", {
      hasText: "India",
    })
    .click();
  await page.pause();
  await page.close();
});
