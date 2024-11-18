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

const work = defineCollection({
	directory: "contents/work",
	include: "**/*.md",
	name: "work",
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
		description: z.string({ message: "Value of \"description\" must be a string." }),
		images: z.array(z.object({
			alt: z.string({ message: "Value of \"alt\" must be a string." }),
			src: z.string({ message: "Value of \"src\" must be a string." }),
		})).optional(),
		thumbnail: z.object({
			alt: z.string({ message: "Value of \"alt\" must be a string." }),
			src: z.string({ message: "Value of \"src\" must be a string." }),
		}),
		title: z.string({ message: "Value of \"title\" must be a string." }),
	}),
});

export default defineConfig({
	collections: [timeline, work],
});
