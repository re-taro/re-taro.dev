import type { Config } from "@markuplint/ml-config";

const config: Config = {
	extends: ["markuplint:recommended"],
	parser: {
		"\\.tsx$": "@markuplint/jsx-parser",
	},
	specs: {
		"\\.tsx$": "@markuplint/react-spec",
	},
	overrides: {
		"app/root.tsx": {
			rules: {
				"permitted-contents": false,
			},
		},
	},
};

export default config;
