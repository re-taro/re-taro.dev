/**
 * @type {import("@remix-run/dev").AppConfig}
 */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	server: "./app/server.ts",
	serverBuildPath: "functions/[[path]].js",
	serverConditions: ["worker", "workerd", "browser"],
	serverDependenciesToBundle: "all",
	serverMainFields: ["browser", "module", "main"],
	serverMinify: true,
	serverPlatform: "neutral",
};
