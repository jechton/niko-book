// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelStatic from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import webmanifest from "astro-webmanifest";
import { site } from "./src/consts";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	site: "https://twinkings.fun",
	integrations: [
		mdx(),
		sitemap(),
		icon(),
		webmanifest({
			name: site.title,
			description: site.description,
			icon: "src/assets/favicon.png",
		}),
	],
	output: "static",
	adapter: vercelStatic({
		webAnalytics: {
			enabled: true,
		},
		imageService: true,
	}),
});
