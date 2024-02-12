import { test, expect } from "@playwright/test";

test.describe('Suite', () => {
    test.beforeAll(async ({ browser }) => {
      console.log("Database Connection Setup");
    });

    test.beforeEach(async ({ page }) => {
      console.log("Clearing Cookies");
    });

    test.afterEach(async ({ browser }) => {
      console.log("Cache Removal");
    });

    test.afterAll(async ({ browser }) => {
      console.log("Database Connection Disconnect");
    });

    test("Test 1", async ({ page }) => {
      console.log("Test 1 Block");
    });
    test("Test 2", async ({ page }) => {
      console.log("Test 2 Block");
    });
})

test("Test 3", async ({ page }) => {
  console.log("Test 3 Block");
});

test("Test 4", async ({ page }) => {
  console.log("Test 4 Block");
});
