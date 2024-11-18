const isHosted = import.meta.env.CF_PAGES === "1";
const isStorybook = import.meta.env.STORYBOOK === "true";
export const HOST = isHosted
	? "https://re-taro.dev"
	: import.meta.env.PROD
		? "http://localhost:8788"
		: isStorybook
			? "http://localhost:6006"
			: "http://localhost:5173";
