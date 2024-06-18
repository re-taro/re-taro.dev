import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("/timeline", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:8788/timeline");
	});
	test.describe("rendering", () => {
		test("should render timeline", async ({ page }) => {
			const section = page.getByRole("region", { name: "Timeline" });
			const timeline = section.getByRole("list").last();

			await expect(timeline).toContainText("誕生");
		});
	});
	test.describe("action", () => {
		test("should navigate to top", async ({ page }) => {
			const COLLECT_URL = "http://localhost:8788/";
			const link = page.getByRole("link", { name: "cd" });
			await link.click();
			await page.waitForURL(COLLECT_URL);
			const url = page.url();

			expect(url).toBe(COLLECT_URL);
		});
	});
	test.describe("validation", () => {});
	test.describe("a11y", () => {
		test("should not have any automatically detectable accessibility issues", async ({
			page,
		}) => {
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});
