// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://a2937.github.io",
  base: "/activity-log",
  trailingSlash: "always",
  integrations: [preact()],
});
