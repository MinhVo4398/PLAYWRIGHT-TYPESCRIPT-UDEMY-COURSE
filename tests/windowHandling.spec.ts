import { test, expect } from "@playwright/test";

test("Single Tab Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
});

test('Single Window Handling', async ({ page }) => {
   await page.goto("https://demo.automationtesting.in/Windows.html");
})

test('Multiple Tab Handling', async ({ page }) => {
      await page.goto("https://demo.automationtesting.in/Windows.html");
})

