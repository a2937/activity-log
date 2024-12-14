/** @type {import("prettier").Config} */
export default {
  site: 'https://a2937.github.io',
  base: 'activity-log',
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
