# QA ↔ Dev Testability Demo

This repository demonstrates why fragile E2E tests happen
and how minimal frontend changes (`data-testid`) enable
stable, refactor-safe automation.

## What this repo shows

- fragile vs stable Playwright tests
- real-world frontend refactor breaking tests
- shared responsibility between QA and Dev

## How to run

```bash
npm install
npm run dev
npx playwright test
npx playwright show-report
```

## Testability Cheat Sheet

### Fragile selectors

- DOM structure (`ul li input`)
- visible text
- styling classes

### Stable selectors

- `data-testid`
- domain-focused naming
- independent from layout and text

> Without test IDs, QA tests **markup**.

> With test IDs, QA tests **behavior**.
