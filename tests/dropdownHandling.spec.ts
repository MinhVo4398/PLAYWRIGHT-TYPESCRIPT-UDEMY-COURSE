import { test, expect } from "@playwright/test";

test("Single Static Dropdown Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.selectOption("#Skills", {
    value: "Android",
  });
  await page.pause();

  await page.selectOption("#Skills", {
    label: "Art Design",
  });

    await page.pause();
  await page.selectOption("#Skills", {
    index: 3,
  });

    await page.pause();
  await page.close();
});

