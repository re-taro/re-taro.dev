import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { checkA11y, configureAxe, injectAxe } from 'axe-playwright';

const a11yConfig: TestRunnerConfig = {
	async postVisit(page, context) {
		const storyContext = await getStoryContext(page, context);

		if (storyContext.parameters?.a11y?.disable as boolean) return;

		await configureAxe(page, {
			rules: [
				{
					enabled: false,
					id: 'color-contrast',
				},
				...(storyContext.parameters?.a11y?.config?.rules ?? []),
			],
		});

		await checkA11y(page, '#storybook-root', {
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		});
	},
	async preVisit(page) {
		await injectAxe(page);
	},
};

export default a11yConfig;
