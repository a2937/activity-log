import { defineCollection, z } from "astro:content";

const personalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const fccCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  personal: personalCollection,
  fcc: fccCollection,
};
