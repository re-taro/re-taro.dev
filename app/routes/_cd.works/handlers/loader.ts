import { json } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

export async function loader() {
	const { allWorks } = await import("content-collections");
	const works = allWorks.sort((a, b) => Temporal.PlainDate.compare(b.date, a.date));

	return json({ works });
}
