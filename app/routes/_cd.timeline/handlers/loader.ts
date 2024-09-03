import { json } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

export async function loader() {
	const { allTimelines } = await import("content-collections");
	const timelines = allTimelines.sort((a, b) => Temporal.PlainDateTime.compare(b.date, a.date));

	return json({ timelines });
}
