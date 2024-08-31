import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	expect: {
		timeout: 10 * 60 * 1000,
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.03,
		},
	},
	// eslint-disable-next-line node/prefer-global/process
	forbidOnly: !!process.env.CI,
	fullyParallel: true,
	projects: [
		{
			name: "chrome",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
		{
			name: "Mobile Chrome",
			use: { ...devices["Pixel 7"] },
		},
		{
			name: "Mobile Safari",
			use: { ...devices["iPhone 12"] },
		},
	],
	// eslint-disable-next-line node/prefer-global/process
	reporter: process.env.CI ? [["github"], ["dot"]] : [["list"], ["html"]],
	testDir: "tests",
	testMatch: "**/*.test.ts",
	timeout: 5 * 60 * 1000,
	use: {
		headless: true,
		trace: "on-first-retry",
	},
});
