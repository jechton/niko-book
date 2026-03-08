import { defineCollection, z } from "astro:content";
import { glob, type Loader, type LoaderContext } from "astro/loaders";

function globWithAutoData(options: Parameters<typeof glob>[0]): Loader {
	const loader = glob(options);
	const originalLoad = loader.load;

	loader.load = async (context: LoaderContext) => {
		const { parseData, ...restContext } = context;

		return originalLoad({
			...restContext,
			parseData: async (entry) => {
				const { id } = entry;
				const data = entry.data as Record<string, unknown>;

				const bookMatch = id.match(/book-(\d+)/i);
				if (bookMatch && data.book === undefined) {
					data.book = parseInt(bookMatch[1], 10);
				}

				const chapterMatch = id.match(/chapter-(\d+)/i);
				if (chapterMatch && data.chapter === undefined) {
					data.chapter = parseInt(chapterMatch[1], 10);
				}

				return parseData(entry);
			},
		});
	};

	return loader;
}

const book = defineCollection({
	loader: globWithAutoData({
		base: "./src/content/book",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		title: z.string(),
		book: z.number(),
		subtitle: z.string().optional(),
		chapter: z.number().optional(),
		art: z.string().optional(),
	}),
});

const courts = defineCollection({
	loader: glob({
		base: "./src/content/wiki/world/courts",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		description: z.string(),
		color: z.string(),
		order: z.number(),
	}),
});
export const collections = { book, courts };
