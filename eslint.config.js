// @ts-check

import { re_taro } from "@re-taro/eslint-config";

export default re_taro({
	astro: false,
	react: true,
	formatters: true,
	ignores: ["functions/*.ts"],
});
