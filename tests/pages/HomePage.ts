import { Locator, Page } from "@playwright/test";

export class HomePage {
 private readonly page: Page;
 private readonly settingButton: Locator;

  constructor(page: Page) {
    this.settingButton = page.locator("//a[@href='#settings']");
  }

  async clickSettingsButton() {
    await this.settingButton.click();
  }
}
