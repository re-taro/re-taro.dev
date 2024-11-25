import { json } from "@remix-run/cloudflare";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({ params, request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const { allWorks } = await import("content-collections");
	const raw = allWorks.find(work => work._meta.path === params.work);
	if (!raw) {
		throw new Response("Not found", { status: 404, statusText: "Not Found" });
	}
	const src = new URL(raw.thumbnail.src, url.origin).toString();
	const images = raw.images?.map((image) => {
		const src = new URL(image.src, url.origin).toString();
		return { ...image, src };
	});
	const work = {
		...raw,
		images,
		thumbnail: {
			...raw.thumbnail,
			src,
		},
	};

	return json({ work });
}
