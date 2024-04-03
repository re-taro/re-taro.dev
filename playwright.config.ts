import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "app/tests",
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
	webServer: {
		command: "pnpm build && pnpm start",
		port: 8787,
	},
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

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 7'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],
});
