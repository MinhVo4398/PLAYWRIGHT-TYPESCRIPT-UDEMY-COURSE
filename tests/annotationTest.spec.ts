import { test } from "@playwright/test";

test.skip("Skipped Test", async ({ page }) => {
  console.log("I am a Skipped Test");
});

//*2) Skip with Condition
// npx playwright test annotationTest.spec.ts --headed --project=webkit ==> will skip this test
// npx playwright test annotationTest.spec.ts --headed --project=chromium ==> will run
test("Skip in Webkit", async ({ page, browserName }) => {
  test.skip(
    browserName === "webkit",
    "This feature is not implemented for MAC"
  );
  console.log("I am Skipped with Condition Test");
});

//*3) Test Fail
test("Not yet Ready Test", async ({ page }) => {
  test.fail();
});

test("Fail in WebKit", async ({ page, browserName }) => {
  test.fail(
    browserName === "webkit",
    "This feature is not implemented for MAC"
  );
  console.log("I am Failed with Condition Test");
});

//* 4) Fix me
test.fixme("Fix me Test", async ({}) => {
  console.log("I am a fix me test");
});

test("Slow Test ", async ({}) => {
    console.log("I am a Slow Test");
    test.slow();
});

test("Slow Test With Condition ", async ({ browserName }) => {
  test.slow(
    browserName === "webkit",
    "This feature is not implemented for MAC"
  );
});
