import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { site } from "$consts";

export async function GET(context) {
	const chapters = await getCollection("book");
	return rss({
		title: site.title,
		description: site.description,
		site: context.site,
		items: chapters.map((chapter) => ({
			...chapter.data,
			link: `/book/${chapter.id}/`,
		})),
	});
}
