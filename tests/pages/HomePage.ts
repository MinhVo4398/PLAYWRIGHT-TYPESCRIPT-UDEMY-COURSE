import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class HomePage extends BasePage {
  readonly page: Page;
  private readonly settingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.settingButton = page.locator("//a[@href='#settings']");
  }

  async clickSettingsButton() {
    await this.clickElement(this.settingButton);
  }
}
