import { test, expect } from "@playwright/test";

test("Simple Alert Handling", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (alert) => {
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Alert");
    await alert.accept();
    await expect(page.locator("#result")).toHaveText(
      "You successfully clicked an alert"
    );
  });
  //* Click button -> alert show-> but should do after the event in JS/TS
  await page.locator("button[onclick='jsAlert()']").click();
  await page.close();
});

test("Confirm Alert - OK Button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (alert) => {
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Confirm");
    await alert.accept();
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });
  //* Click button -> alert show-> but should do after the event in JS/TS
  await page.locator("button[onclick='jsConfirm()']").click();
  await page.close();
});

test("Confirm Alert - Cancel Button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (alert) => {
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Confirm");
    await alert.dismiss();
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  });
  //* Click button -> alert show-> but should do after the event in JS/TS
  await page.locator("button[onclick='jsConfirm()']").click();
  await page.close();
});

test("Prompt Alert - OK Button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (alert) => {
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Prompt");
    await alert.accept("Playwright");
    await expect(page.locator("#result")).toHaveText("You entered: Playwright");
  });
  //* Click button -> alert show-> but should do after the event in JS/TS
  await page.locator("button[onclick='jsPrompt()']").click();
  await page.close();
});

test("Prompt Alert - Cancel Button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (alert) => {
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS prompt");
    await alert.dismiss();
    await expect(page.locator("#result")).toHaveText("You entered: null");
  });
  //* Click button -> alert show-> but should do after the event in JS/TS
  await page.locator("button[onclick='jsPrompt()']").click();
  await page.close();
});
