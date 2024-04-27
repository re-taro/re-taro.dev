import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "tests",
	testMatch: "**/*.test.ts",
	fullyParallel: true,
	expect: {
		timeout: 10 * 60 * 1000,
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.03,
		},
	},
	timeout: 5 * 60 * 1000,
	// eslint-disable-next-line node/prefer-global/process
	forbidOnly: !!process.env.CI,
	// eslint-disable-next-line node/prefer-global/process
	reporter: process.env.CI ? [["github"], ["dot"]] : [["list"], ["html"]],
	use: {
		headless: true,
		trace: "on-first-retry",
	},
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
});
