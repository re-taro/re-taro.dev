import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { createHtmlReport } from "axe-html-reporter";

test.describe("/about", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:8787/about");
	});
	test.describe("rendering", () => {
		test("should render profile", async ({ page }) => {
			const section = page.getByRole("region", { name: "Profile" });
			const heading = section.getByRole("heading", { name: "## Profile" });

			await expect(heading).toContainText("Profile");
		});
		test("should render skills", async ({ page }) => {
			const section = page.getByRole("region", { name: "Skills" });
			const languageSection = section.getByRole("region", { name: "Language" });
			const firstLanguage = languageSection.getByRole("list").first();
			const frameworkSection = section.getByRole("region", { name: "Framework" });
			const firstFramework = frameworkSection.getByRole("list").first();

			await expect(firstLanguage).toContainText("TypeScript (JavaScript)");
			await expect(firstFramework).toContainText("React / Next.js (Remix.js)");
		});
	});
	test.describe("action", () => {});
	test.describe("validation", () => {});
	test.describe("a11y", () => {
		test("should not have any automatically detectable accessibility issues", async ({
			page,
		}) => {
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			createHtmlReport({
				results: accessibilityScanResults,
			});

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});