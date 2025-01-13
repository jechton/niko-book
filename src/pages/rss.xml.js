import { SITE_DESCRIPTION, SITE_TITLE } from "$consts";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const chapters = await getCollection("book");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: chapters.map((chapter) => ({
      ...chapter.data,
      link: `/book/${chapter.id}/`,
    })),
  });
}
