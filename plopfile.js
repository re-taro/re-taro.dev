/* eslint-disable node/no-sync */
import fs from 'node:fs';

const pages = fs
	.readdirSync('app/routes')
	.map((it) => {
		const path = `app/routes/${it}`;
		const stat = fs.statSync(path);
		if (stat.isDirectory()) return { name: it, value: it };

		return null;
	})
	.filter((it) => it != null);

pages.push({ name: 'root', value: '' });

function config(
	/**
	 * @type {import('plop').NodePlopAPI}
	 */
	plop,
) {
	plop.setGenerator('page', {
		actions: (data) => {
			/**
			 * @type {import('plop').ActionType[]}
			 */
			const actions = [];

			if (data?.parent === '') {
				actions.push(
					{
						path: 'app/routes/{{name}}/route.tsx',
						templateFile: 'templates/pages/route.tsx.hbs',
						type: 'add',
					},
					{
						path: 'tests/{{name}}.test.ts',
						templateFile: 'templates/tests/route.test.ts.hbs',
						type: 'add',
					},
				);
			} else {
				actions.push(
					{
						path: 'app/routes/{{parent}}.{{name}}/route.tsx',
						templateFile: 'templates/pages/route.tsx.hbs',
						type: 'add',
					},
					{
						path: 'tests/{{parent}}.{{name}}.test.ts',
						templateFile: 'templates/tests/route.test.ts.hbs',
						type: 'add',
					},
				);
			}

			return actions;
		},
		description: 'Create a new page',
		prompts: [
			{
				choices: pages,
				message: '/{path please}/...',
				name: 'parent',
				type: 'list',
			},
			{
				message: 'page name please.(This will be the name of the endpoint)',
				name: 'name',
				type: 'input',
			},
		],
	});
	plop.setGenerator('component', {
		actions: [
			{
				path: 'app/components/{{pascalCase name}}/index.ts',
				templateFile: 'templates/components/index.ts.hbs',
				type: 'add',
			},
			{
				path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'templates/components/component.tsx.hbs',
				type: 'add',
			},
			{
				path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
				templateFile: 'templates/components/component.stories.ts.hbs',
				type: 'add',
			},
			{
				path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
				templateFile: 'templates/components/component.test.tsx.hbs',
				type: 'add',
			},
		],
		description: 'Create a new component',
		prompts: [
			{
				message: 'component name please',
				name: 'name',
				type: 'input',
			},
		],
	});
	plop.setGenerator('feature', {
		actions: (data) => {
			/**
			 * @type {import('plop').ActionType[]}
			 */
			const actions = [];

			if (data?.parent === '') {
				actions.push(
					{
						path: 'app/routes/features/{{ pascalCase name }}/index.ts',
						templateFile: 'templates/components/index.ts.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/features/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
						templateFile: 'templates/components/component.tsx.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/features/{{ pascalCase name }}/{{ pascalCase name }}.stories.ts',
						templateFile: 'templates/components/component.stories.ts.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/features/{{ pascalCase name }}/{{ pascalCase name }}.test.tsx',
						templateFile: 'templates/components/component.test.tsx.hbs',
						type: 'add',
					},
				);
			} else {
				actions.push(
					{
						path: 'app/routes/{{parent}}/features/{{ pascalCase name }}/index.ts',
						templateFile: 'templates/components/index.ts.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/{{parent}}/features/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
						templateFile: 'templates/components/component.tsx.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/{{parent}}/features/{{ pascalCase name }}/{{ pascalCase name }}.stories.ts',
						templateFile: 'templates/components/component.stories.ts.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/{{parent}}/features/{{ pascalCase name }}/{{ pascalCase name }}.test.tsx',
						templateFile: 'templates/components/component.test.tsx.hbs',
						type: 'add',
					},
				);
			}

			return actions;
		},
		description: 'Create a new feature',
		prompts: [
			{
				choices: pages,
				message: 'app/routes/{path please}/features/...',
				name: 'parent',
				type: 'list',
			},
			{
				message: 'feature name please',
				name: 'name',
				type: 'input',
			},
		],
	});
	plop.setGenerator('handler', {
		actions: (data) => {
			/**
			 * @type {import('plop').ActionType[]}
			 */
			const actions = [];

			if (data?.parent === '') {
				if (data?.type === 'loader') {
					actions.push(
						{
							path: 'app/routes/handlers/loader.ts',
							templateFile: 'templates/handlers/loader.ts.hbs',
							type: 'add',
						},
						{
							path: 'app/routes/handlers/index.ts',
							template: "export { loader } from './loader';",
							type: 'append',
						},
					);
				} else {
					actions.push(
						{
							path: 'app/routes/handlers/action.ts',
							templateFile: 'templates/handlers/action.ts.hbs',
							type: 'add',
						},
						{
							path: 'app/routes/handlers/index.ts',
							template: "export { action } from './action';",
							type: 'append',
						},
					);
				}
			} else if (data?.type === 'loader') {
				actions.push(
					{
						path: 'app/routes/{{parent}}/handlers/loader.ts',
						templateFile: 'templates/handlers/loader.ts.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/{{parent}}/handlers/index.ts',
						template: "export { loader } from './loader';",
						type: 'append',
					},
				);
			} else {
				actions.push(
					{
						path: 'app/routes/{{parent}}/handlers/action.ts',
						templateFile: 'templates/handlers/action.ts.hbs',
						type: 'add',
					},
					{
						path: 'app/routes/{{parent}}/handlers/index.ts',
						template: "export { action } from './action';",
						type: 'append',
					},
				);
			}

			return actions;
		},
		description: 'Create a new handler',
		prompts: [
			{
				choices: [
					{ key: 'l', name: 'Loader', value: 'loader' },
					{ key: 'a', name: 'Action', value: 'action' },
				],
				message: 'Which type of handler?',
				name: 'type',
				type: 'expand',
			},
			{
				choices: pages,
				message: 'app/routes/{path please}/handlers/...',
				name: 'parent',
				type: 'list',
			},
		],
	});
	plop.setGenerator('timeline', {
		actions: [
			{
				path: 'contents/timeline/{{ kebabCase name }}.md',
				templateFile: 'templates/contents/timeline.md.hbs',
				type: 'add',
			},
		],
		description: 'Create a new timeline',
		prompts: [
			{
				message: 'timeline name please',
				name: 'name',
				type: 'input',
			},
			{
				message: 'timeline date please',
				name: 'date',
				type: 'input',
			},
			{
				message: 'timeline title please',
				name: 'title',
				type: 'input',
			},
		],
	});
}

export default config;
