import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// @testing-library/react's auto-cleanup only self-registers when it detects
// Jest's global afterEach — with explicit vitest imports (this project's
// convention, see tests/unit/*.test.ts) it has to be wired manually.
afterEach(() => {
  cleanup();
});
