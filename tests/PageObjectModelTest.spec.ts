import { test, expect } from "@playwright/test";

import { LandingPage } from "../tests/pages/LandingPage";
import { HomePage } from "../tests/pages/HomePage";
import { SignInPage } from "../tests/pages/SignInPage";
import { SettingPage } from "../tests/pages/SettingPage";

test("Login Conduit test using POM", async ({ page }) => {
  await page.goto("https://react-redux.realworld.io/#/?_k=tqgwz4");
  const landingPage = new LandingPage(page);
  const homePage = new HomePage(page);
  const signInPage = new SignInPage(page);
  const settingPage = new SettingPage(page);

  await landingPage.clickSignInButton();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingPage.clickLogoutButton();

  await page.close();
});
