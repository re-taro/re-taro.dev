import type { AppLoadContext } from "@remix-run/cloudflare";
import type { PlatformProxy } from "wrangler";

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
	interface AppLoadContext {
		cloudflare: Cloudflare;
	}
}

type GetLoadContext = (args: { request: Request; context: { cloudflare: Cloudflare } }) => AppLoadContext;
export const getLoadContext: GetLoadContext = ({ context }) => ({
	...context,
});
