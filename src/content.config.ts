import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const book = defineCollection({
  // Load Markdown and MDX files in the `src/content/book/` directory.
  loader: glob({ base: "./src/content/book", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    book: z.number(),
    chapter: z.number(),
    art: z.string(),
  }),
});

export const collections = { book };
