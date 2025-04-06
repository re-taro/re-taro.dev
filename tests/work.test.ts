import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('/works/togather', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:8788/work/togather');
	});
	test.describe('rendering', () => {});
	test.describe('action', () => {});
	test.describe('validation', () => {});
	test.describe('a11y', () => {
		test('should not have any automatically detectable accessibility issues', async ({ page }) => {
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});
