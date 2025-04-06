import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('/about', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:8788/about');
	});
	test.describe('rendering', () => {
		test('should render profile', async ({ page }) => {
			const section = page.getByRole('region', { name: 'Profile' });
			const heading = section.getByRole('heading', { name: '## Profile' });

			await expect(heading).toContainText('Profile');
		});
		test('should render skills', async ({ page }) => {
			const section = page.getByRole('region', { name: 'Skills' });
			const languageSection = section.getByRole('region', { name: 'Language' });
			const firstLanguage = languageSection.getByRole('list').first();
			const frameworkSection = section.getByRole('region', { name: 'Framework' });
			const firstFramework = frameworkSection.getByRole('list').first();

			await expect(firstLanguage).toContainText('TypeScript (JavaScript)');
			await expect(firstFramework).toContainText('React / Next.js (Remix.js)');
		});
		test('should render SNS links', async ({ page }) => {
			const section = page.getByRole('region', { name: 'SNS' });
			const link = section.getByRole('link').first();

			await expect(link).toContainText('GitHub');
		});
	});
	test.describe('action', () => {
		test('should navigate to top', async ({ page }) => {
			const COLLECT_URL = 'http://localhost:8788/';
			const link = page.getByRole('link', { name: 'cd' });
			await link.click();
			await page.waitForURL(COLLECT_URL);
			const url = page.url();

			expect(url).toBe(COLLECT_URL);
		});
	});
	test.describe('validation', () => {});
	test.describe('a11y', () => {
		test('should not have any automatically detectable accessibility issues', async ({ page }) => {
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});
