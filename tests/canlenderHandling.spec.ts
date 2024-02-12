import { test, expect } from "@playwright/test";
import { DateTime } from "luxon";

test("Calender - Using Fill Method", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  //* In console type: document.getElementById("birthday").value ==>'2024-04-02' (input this  value instead of 04/02/2022 like UI)
  let date = "2024-04-02";
  await page.locator("#birthday").fill(date);
  await page.pause();
});

test("Canlender - Date Picker", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  // Select Past Date
    await page.locator("input[placeholder='Start date']").click();
  await selectDate(20, "June 2023", page);
  await page.waitForTimeout(5000);
  await page.reload();

  // Select Future Date
    await page.locator("input[placeholder='Start date']").click();
  await selectDate(20, "June 2025", page);
  await page.waitForTimeout(5000);
  await page.reload();

  await page.pause();

  // Select Current Month Date
    await page.locator("input[placeholder='Start date']").click();
  await selectDate(12, "March 2024", page);
  await page.waitForTimeout(5000);
  await page.reload();

  await page.pause();
});

async function selectDate(date: Number, dateToSelect: String, page) {
  const monthYear = await page.locator(".datepicker-days th.datepicker-switch");
  const prevButton = page.locator(".datepicker-days .prev");
  const nextButton = page.locator(".datepicker-days .next");
  const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy");
  while ((await monthYear.textContent()) != dateToSelect) {
    if (formattedMonth < DateTime.fromJSDate(new Date())) {
      await prevButton.click();
    } else {
      await nextButton.click();
    }
  }

  await page.locator(`//td[@class='day'] [text()='${date}']`).click();
}
