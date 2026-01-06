import { test, expect } from "@playwright/test";

test("fragile: toggle first checkbox via DOM structure", async ({ page }) => {
  await page.goto("/");

  // create todo (still fragile selectors)
  await page.getByPlaceholder("Add new todo").fill("Buy milk");
  await page.getByRole("button", { name: "Create" }).click();

  // fragile: depends on DOM structure + position
  const firstCheckbox = page.locator('ul li input[type="checkbox"]').first();
  await firstCheckbox.check();

  await expect(page.getByText("Buy milk")).toBeVisible();
});
