import fs from "node:fs";

const pages = fs
	.readdirSync("app/routes")
	.map((it) => {
		const path = `app/routes/${it}`;
		const stat = fs.statSync(path);
		if (stat.isDirectory())
			return { name: it, value: it };

		return null;
	})
	.filter(it => it !== null);

pages.push({ name: "root", value: "" });

function config(
	/**
	 * @type {import("plop").NodePlopAPI}
	 */
	plop,
) {
	plop.setGenerator("page", {
		description: "Create a new page",
		prompts: [
			{
				type: "list",
				name: "parent",
				message: "/{path please}/...",
				choices: pages,
			},
			{
				type: "input",
				name: "name",
				message: "page name please.(This will be the name of the endpoint)",
			},
			{
				type: "confirm",
				name: "hasStyles",
				message: "Do you want to add styles?",
			},
		],
		actions: (data) => {
			/**
			 * @type {import("plop").ActionType[]}
			 */
			const actions = [];

			if (data?.parent === "") {
				actions.push({
					type: "add",
					path: "app/routes/{{name}}/route.tsx",
					templateFile: "templates/pages/route.tsx.hbs",
				});

				actions.push({
					type: "add",
					path: "app/tests/{{name}}.test.ts",
					templateFile: "templates/tests/route.test.ts.hbs",
				});

				if (data?.hasStyles) {
					actions.push({
						type: "add",
						path: "app/routes/{{name}}/styles.css.ts",
						templateFile: "templates/styles/styles.css.ts.hbs",
					});
				}
			}
			else {
				actions.push({
					type: "add",
					path: "app/routes/{{parent}}.{{name}}/route.tsx",
					templateFile: "templates/pages/route.tsx.hbs",
				});

				actions.push({
					type: "add",
					path: "app/tests/{{parent}}.{{name}}.test.ts",
					templateFile: "templates/tests/route.test.ts.hbs",
				});

				if (data?.hasStyles) {
					actions.push({
						type: "add",
						path: "app/routes/{{parent}}.{{name}}/styles.css.ts",
						templateFile: "templates/styles/styles.css.ts.hbs",
					});
				}
			}

			return actions;
		},
	});
	plop.setGenerator("component", {
		description: "Create a new component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "component name please",
			},
		],
		actions: [
			{
				type: "add",
				path: "app/components/{{pascalCase name}}/index.ts",
				templateFile: "templates/components/index.ts.hbs",
			},
			{
				type: "add",
				path: "app/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "templates/components/component.tsx.hbs",
			},
			{
				type: "add",
				path: "app/components/{{pascalCase name}}/styles.css.ts",
				templateFile: "templates/styles/styles.css.ts.hbs",
			},
			{
				type: "add",
				path: "app/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
				templateFile: "templates/components/component.stories.ts.hbs",
			},
			{
				type: "add",
				path: "app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
				templateFile: "templates/components/component.test.tsx.hbs",
			},
		],
	});
	plop.setGenerator("feature", {
		description: "Create a new feature",
		prompts: [
			{
				type: "list",
				name: "parent",
				message: "app/routes/{path please}/features/...",
				choices: pages,
			},
			{
				type: "input",
				name: "name",
				message: "feature name please",
			},
		],
		actions: (data) => {
			/**
			 * @type {import("plop").ActionType[]}
			 */
			const actions = [];

			if (data?.parent === "") {
				actions.push({
					type: "add",
					path: "app/routes/features/{{ pascalCase name }}/index.ts",
					templateFile: "templates/components/index.ts.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/features/{{ pascalCase name }}/{{ pascalCase name }}.ts",
					templateFile: "templates/components/component.tsx.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/features/{{ pascalCase name }}/styles.css.ts",
					templateFile: "templates/styles/styles.css.ts.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/features/{{ pascalCase name }}/{{ pascalCase name }}.stories.ts",
					templateFile: "templates/components/component.stories.ts.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/features/{{ pascalCase name }}/{{ pascalCase name }}.test.tsx",
					templateFile: "templates/components/component.test.tsx.hbs",
				});
			}
			else {
				actions.push({
					type: "add",
					path: "app/routes/{{parent}}/features/{{ pascalCase name }}/index.ts",
					templateFile: "templates/components/index.ts.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/{{parent}}/features/{{ pascalCase name }}/{{ pascalCase name }}.ts",
					templateFile: "templates/components/component.tsx.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/{{parent}}/features/{{ pascalCase name }}/styles.css.ts",
					templateFile: "templates/styles/styles.css.ts.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/{{parent}}/features/{{ pascalCase name }}/{{ pascalCase name }}.stories.ts",
					templateFile: "templates/components/component.stories.ts.hbs",
				});

				actions.push({
					type: "add",
					path: "app/routes/{{parent}}/features/{{ pascalCase name }}/{{ pascalCase name }}.test.tsx",
					templateFile: "templates/components/component.test.tsx.hbs",
				});
			}

			return actions;
		},
	});
	plop.setGenerator("handler", {
		description: "Create a new handler",
		prompts: [
			{
				type: "expand",
				name: "type",
				message: "Which type of handler?",
				choices: [
					{ name: "Loader", value: "loader" },
					{ name: "Action", value: "action" },
				],
			},
			{
				type: "list",
				name: "parent",
				message: "app/routes/{path please}/handlers/...",
				choices: pages,
			},
		],
		actions: (data) => {
			/**
			 * @type {import("plop").ActionType[]}
			 */
			const actions = [];

			if (data?.parent === "") {
				if (data?.type === "loader") {
					actions.push({
						type: "add",
						path: "app/routes/handlers/loader.ts",
						templateFile: "templates/handlers/loader.ts.hbs",
					});

					actions.push({
						type: "add",
						path: "app/routes/handlers/loader.test.ts",
						templateFile: "templates/handlers/loader.test.ts.hbs",
					});

					actions.push({
						type: "append",
						path: "app/routes/handlers/index.ts",
						template: "export { loader } from './loader';",
					});
				}
				else {
					actions.push({
						type: "add",
						path: "app/routes/handlers/action.ts",
						templateFile: "templates/handlers/action.ts.hbs",
					});

					actions.push({
						type: "add",
						path: "app/routes/handlers/action.test.ts",
						templateFile: "templates/handlers/action.test.ts.hbs",
					});

					actions.push({
						type: "append",
						path: "app/routes/handlers/index.ts",
						template: "export { action } from './action';",
					});
				}
			}
			else {
				if (data?.type === "loader") {
					actions.push({
						type: "add",
						path: "app/routes/{{parent}}/handlers/loader.ts",
						templateFile: "templates/handlers/loader.ts.hbs",
					});

					actions.push({
						type: "add",
						path: "app/routes/{{parent}}/handlers/loader.test.ts",
						templateFile: "templates/handlers/loader.test.ts.hbs",
					});

					actions.push({
						type: "append",
						path: "app/routes/{{parent}}/handlers/index.ts",
						template: "export { loader } from './loader';",
					});
				}
				else {
					actions.push({
						type: "add",
						path: "app/routes/{{parent}}/handlers/action.ts",
						templateFile: "templates/handlers/action.ts.hbs",
					});

					actions.push({
						type: "add",
						path: "app/routes/{{parent}}/handlers/action.test.ts",
						templateFile: "templates/handlers/action.test.ts.hbs",
					});

					actions.push({
						type: "append",
						path: "app/routes/{{parent}}/handlers/index.ts",
						template: "export { action } from './action';",
					});
				}
			}
		},
	});
}

export default config;
