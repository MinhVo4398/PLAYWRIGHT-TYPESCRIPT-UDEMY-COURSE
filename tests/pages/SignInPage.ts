import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class SignInPage extends BasePage {
  readonly page: Page;
  private readonly emailIdTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailIdTextbox = page.locator("//input[@placeholder='Email']");
    this.passwordTextbox = page.locator("//input[@placeholder='Password']");
    this.signInButton = page.locator("//button[normalize-space()='Sign in']");
  }

  async enterEmailId(emailId: string) {
    await this.fillFormField(this.emailIdTextbox, emailId);
  }

  async enterPassword(password: string) {
   await this.fillFormField(this.passwordTextbox, password);
  }

  async clickSignInButton() {
    await this.clickElement(this.signInButton);
  }
}
