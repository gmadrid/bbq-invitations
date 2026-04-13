import { defineCollection, z } from 'astro:content';

const invitations = defineCollection({
  type: 'content',
  schema: z.object({
    windowTitle: z.string(),    // browser tab title
    style: z.string(),          // display name, e.g. "Old-Timey Magic Poster"
    date: z.date(),             // for ordering / one-a-day publishing
    type: z.enum(['text', 'html']),  // text = markdown, html = raw HTML component
    fonts: z.array(z.string()).optional(),  // Google Font names
    thumbnail: z.string().optional(),       // path to thumbnail image
    accentColor: z.string().optional(),     // hex, for grid card accent
    teaser: z.string(),         // one-line description for the grid card
  }),
});

export const collections = { invitations };
