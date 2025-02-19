import { SITE_DESCRIPTION, SITE_TITLE } from "$consts";
import favicon from "@assets/favicon.png";
import type { APIRoute } from "astro";
import { getImage } from "astro:assets";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: "png",
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`,
      };
    }),
  );

  const manifest = {
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    id: "twin-kings",
    icons,
  };

  return new Response(JSON.stringify(manifest));
};
