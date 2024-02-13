import { test as baseTest } from "@playwright/test";
import { LandingPage } from "../tests/pages/LandingPage";
import { HomePage } from "../tests/pages/HomePage";
import { SignInPage } from "../tests/pages/SignInPage";
import { SettingPage } from "../tests/pages/SettingPage";

type pages = {
  landingPage: LandingPage;
  homePage: HomePage;
  signInPage: SignInPage;
  settingPage: SettingPage;
};

const testPages = baseTest.extend<pages>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page));
  },
  settingPage: async ({ page }, use) => {
    await use(new SettingPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
