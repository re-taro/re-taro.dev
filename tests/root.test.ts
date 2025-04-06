import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('/', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:8788/');
	});
	test.describe('rendering', () => {
		test('should render hero icon', async ({ page }) => {
			const heroIcon = page.getByRole('img', { name: "Rintaro Itokawa's profile image" });

			await expect(heroIcon).toBeInViewport({ ratio: 0.5 });
		});
		test('should render hero text', async ({ page }) => {
			const heroText = page.getByRole('heading', { name: 'Rintaro Itokawa' });
			await heroText.waitFor();

			await expect(heroText).toContainText('Rintaro Itokawa');
		});
		test('should change hero text to "狂創"', async ({ page }) => {
			const heroText = page.getByRole('heading', { name: '狂創' });
			await heroText.waitFor();

			await expect(heroText).toContainText('狂創');
		});
		test('should change hero text to "re-taro"', async ({ page }) => {
			const heroText = page.getByRole('heading', { name: 're-taro' });
			await heroText.waitFor();

			await expect(heroText).toContainText('re-taro');
		});
	});
	test.describe('action', () => {});
	test.describe('validation', () => {});
	test.describe('a11y', () => {
		test('should not have any automatically detectable accessibility issues', async ({ page }) => {
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});
