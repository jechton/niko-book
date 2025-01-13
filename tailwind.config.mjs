/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Libre\\ Franklin",
        "Bahnschrift",
        "DIN\\ Alternate",
        "Franklin\\ Gothic\\ Medium",
        "Nimbus\\ Sans\\ Narrow",
        "sans-serif-condensed",
        "sans-serif",
      ],
      serif: [
        "EB\\ Garamond",
        "Superclarendon",
        "Bookman\\ Old\\ Style",
        "URW\\ Bookman",
        "URW\\ Bookman\\ L",
        "Georgia\\ Pro",
        "Georgia",
        "serif",
      ],
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: ["forest"],
  },
};
