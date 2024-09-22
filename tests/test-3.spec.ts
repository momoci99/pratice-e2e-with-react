import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveScreenshot("example-test.png", {
    maxDiffPixels: 50, // 100픽셀 차이 허용
  });
});
