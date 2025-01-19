// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import partytown from "@astrojs/partytown";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://twinkings.fun",
  integrations: [mdx(), sitemap(), tailwind(), icon(), partytown()],
  output: "static",
  adapter: vercelStatic({ imageService: true }),
});
