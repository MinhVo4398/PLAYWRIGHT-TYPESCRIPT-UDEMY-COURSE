import { test, expect } from "@playwright/test";

test("Upload multiple Files - Approach 1", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  const uploadFile = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("input[name='files[]']").click(),
  ]);
  await uploadFile[0].setFiles([
    "FilesToUpload/imag1.jpg",
    "FilesToUpload/imag2.jpg",
  ]);
  await page.waitForTimeout(5000);
});

test("Upload multiple Files - Approach 2", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  await page.setInputFiles("input[name='files[]']", [
    "FilesToUpload/imag1.jpg",
    "FilesToUpload/imag2.jpg",
  ]);
  await page.waitForTimeout(5000);
});
