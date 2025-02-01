import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
