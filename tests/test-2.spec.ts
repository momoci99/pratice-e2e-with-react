import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("Add a new todo").click();
  await page.getByPlaceholder("Add a new todo").fill("");
  await page.getByPlaceholder("Add a new todo").fill("아이스크림");
  await page.getByPlaceholder("Add a new todo").press("Enter");
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByText("아이스크림").click();

  await expect(
    page.getByTestId("todo-item-list").getByText("아이스크림")
  ).toBeVisible();
});
