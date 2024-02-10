import { test, expect } from "@playwright/test";

test("Checkbox button handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  const circketCheckbox = await page.locator("#checkbox1");
  const movieCheckbox = await page.locator("#checkbox2");
  const hockeyCheckbox = await page.locator("#checkbox3");

  // Way 1 Assert
  expect(circketCheckbox).not.toBeChecked();
  expect(movieCheckbox).not.toBeChecked();
  expect(hockeyCheckbox).not.toBeChecked();

  // Way 2 Assert
  expect(await circketCheckbox.isChecked()).toBeFalsy();
  expect(await movieCheckbox.isChecked()).toBeFalsy();
  expect(await hockeyCheckbox.isChecked()).toBeFalsy();

  await circketCheckbox.check();
  await movieCheckbox.check();
  await hockeyCheckbox.check();

   expect(circketCheckbox).toBeChecked();
   expect(movieCheckbox).toBeChecked();
   expect(hockeyCheckbox.isChecked()).toBeTruthy();


  await page.close();
});
