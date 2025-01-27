import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const book = defineCollection({
  // Load Markdown and MDX files in the `src/content/book/` directory.
  loader: glob({ base: "./src/content/book", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    book: z.number(),
    chapter: z.number(),
    art: z.string(),
  }),
});

const courts = defineCollection({
  // Load Markdown and MDX files in the `src/content/wiki/world/courts/` directory.
  loader: glob({
    base: "./src/content/wiki/world/courts",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    description: z.string(),
    color: z.string(),
    order: z.number(),
  }),
});
export const collections = { book, courts };
