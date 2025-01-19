import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const personal = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/personal" }),
  schema: z.object({
    title: z.string(),
  }),
});

const fcc = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/fcc" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  personal,
  fcc,
};
