import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveScreenshot("example-test.png", {
    threshold: 0.05, // 5% 차이까지 허용
  });
});
