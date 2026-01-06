import { test, expect } from "@playwright/test";

test("stable: toggle todo completed state", async ({ page }) => {
  await page.goto("/");

  // create todo
  await page.getByTestId("todo-input").fill("Buy milk");
  await page.getByTestId("todo-add").click();

  // toggle completed
  await page.getByTestId("todo-toggle-0").check();

  // assert visual state
  await expect(page.getByTestId("todo-item-0")).toHaveCSS(
    "text-decoration-line",
    "line-through"
  );
});
