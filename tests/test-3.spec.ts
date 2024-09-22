import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveScreenshot("example-test.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.02,
  });
});
