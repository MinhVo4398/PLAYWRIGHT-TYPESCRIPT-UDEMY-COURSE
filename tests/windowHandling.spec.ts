import { test, expect } from "@playwright/test";

test("Single Tab Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");

  //* Resolved the Promise
  const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click("button:has-text('click')"),
  ]);

  await newTab.waitForLoadState(); //wait for new tab completely loaded
  newTab.locator("//a[@href='/downloads']").click();
  await page.waitForTimeout(5000);
  await newTab.close();
});

test("Single Window Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.locator(".analystic[href='#Seperate']").click();

  //* Resolved the Promise
  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click("//button[@onclick='newwindow()']"),
  ]);

  await newWindow.waitForLoadState(); //wait for new tab completely loaded
  newWindow.locator("//a[@href='/downloads']").click();
  await page.waitForTimeout(5000);
  await newWindow.close();
});

test("Multiple Tab Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.locator(".analystic[href='#Multiple']").click();

  //* Resolved the Promise
  const [multipleTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click("button[onclick='multiwindow()']"),
  ]);

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages(); // get how many pages
  console.log("Total Pages opened " + pages.length);

  await pages[1].locator("#email").fill("playwright@gmail.com");
  await multipleTab.waitForTimeout(5000);

  await pages[2].locator("//a[@href='/downloads']").click();
  await multipleTab.waitForTimeout(5000);

  await pages[1].close();
  await pages[2].close();
});
