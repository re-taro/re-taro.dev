import { json } from "@remix-run/cloudflare";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const { allWorks } = await import("content-collections");
	const works = allWorks.sort((a, b) => Temporal.PlainDate.compare(b.date, a.date)).map((work) => {
		const src = new URL(work.thumbnail.src, url.origin).toString();

		return {
			...work,
			thumbnail: {
				...work.thumbnail,
				src,
			},
		};
	});

	return json({ works });
}
