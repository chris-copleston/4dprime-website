// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';


// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('4DPrime'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const portfolioCollection = defineCollection({
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    cover: image(),
    coverAlt: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('4DPrime'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});


const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
  'team': teamCollection,
};