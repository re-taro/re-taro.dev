import { defineCollection, defineConfig } from "@content-collections/core";
import { Temporal } from "temporal-polyfill";

const timeline = defineCollection({
	directory: "contents/timeline",
	include: "**/*.md",
	name: "timeline",
	schema: z => ({
		date: z.string({ message: "Value of \"date\" must be a date." }).refine((v) => {
			try {
				Temporal.PlainDate.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"date\" must be a valid date." }),
		slug: z.string().optional(),
		title: z.string({ message: "Value of \"title\" must be a string." }),
	}),
});

export default defineConfig({
	collections: [timeline],
});
