import { test, expect } from '@playwright/test';

test('stable: add todo using data-testid', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('todo-input').fill('Buy milk');
  await page.getByTestId('todo-add').click();

  await expect(page.getByText('Buy milk')).toBeVisible();
});