import { test } from "@playwright/test";

test.beforeAll(async ({ browser }) => {
  console.log("Before All Hook");
});

test.beforeEach(async ({ browser }) => {
  console.log("Before Each Hook");
});

test("Test 1", async ({ page }) => {
  console.log("Test 1 Block");
});

test("Test 2", async ({ page }) => {
  console.log("Test 2 Block");
});

test("Test 3", async ({ page }) => {
  console.log("Test 3 Block");
});

test.afterAll(async ({ browser }) => {
  console.log("After All Hook");
});

test.afterEach(async ({ browser }) => {
  console.log("After Each Hook");
});
