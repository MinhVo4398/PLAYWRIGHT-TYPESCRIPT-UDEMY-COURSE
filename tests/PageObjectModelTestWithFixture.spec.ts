import { test, expect } from "../fixtures/pomFixtures";


test("Login Conduit test using POM", async ({ page, landingPage, homePage, signInPage, settingPage }) => {
  await page.goto("https://react-redux.realworld.io/#/?_k=tqgwz4");
  await landingPage.clickSignInButton();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingPage.clickLogoutButton();

  await page.close();
});
