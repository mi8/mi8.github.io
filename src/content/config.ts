import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
});

const blogFr = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = { blog, 'blog-fr': blogFr };
