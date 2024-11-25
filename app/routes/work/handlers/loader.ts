import { redirect } from "@remix-run/cloudflare";

export async function loader() {
	return redirect("/works", 301);
}
