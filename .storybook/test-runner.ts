import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const a11yConfig: TestRunnerConfig = {
	async preVisit(page) {
		await injectAxe(page);
	},
	async postVisit(page, context) {
		const storyContext = await getStoryContext(page, context);

		if (storyContext.parameters?.["a11y"]?.disable as boolean) {
			return;
		}

		await configureAxe(page, {
			rules: [
				{
					id: "color-contrast",
					enabled: false,
				},
				...(storyContext.parameters?.["a11y"]?.config?.rules ?? []),
			],
		});

		await checkA11y(page, "#storybook-root", {
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		});
	},
};

export default a11yConfig;
