import { test, expect } from '@playwright/test';

test('fragile: add todo using text selectors', async ({ page }) => {
  await page.goto('/');

  // Fragile selectors on purpose:
  // - placeholder text can change
  // - button text can change (localization)
  await page.getByPlaceholder('Add new todo').fill('Buy milk');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Buy milk')).toBeVisible();
});