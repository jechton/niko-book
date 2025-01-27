// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import partytown from "@astrojs/partytown";

import vercelStatic from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://twinkings.fun",
  integrations: [mdx(), sitemap(), icon(), partytown()],
  output: "static",
  adapter: vercelStatic({ imageService: true }),
});
