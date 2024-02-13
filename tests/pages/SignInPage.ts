import { Locator, Page } from "@playwright/test";

export class SignInPage {
 private readonly page: Page;
 private readonly emailIdTextbox: Locator;
 private readonly passwordTextbox: Locator;
 private readonly signInButton: Locator;

  constructor(page: Page) {
    this.emailIdTextbox = page.locator("//input[@placeholder='Email']");
    this.passwordTextbox = page.locator("//input[@placeholder='Password']");
    this.signInButton = page.locator("//button[normalize-space()='Sign in']");
  }

  async enterEmailId(emailId: string) {
    await this.emailIdTextbox.fill(emailId);
  }

  async enterPassword(password: string) {
    await this.passwordTextbox.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}
