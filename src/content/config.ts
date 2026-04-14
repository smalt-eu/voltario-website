import { defineCollection, z } from 'astro:content';

const leistungen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    image: z.string(),
    features: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const standorte = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    city: z.string(),
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    image: z.string(),
    hours: z.string(),
    order: z.number().default(0),
  }),
});

const projekte = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.date(),
    leistung: z.string(),
    standort: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()).default([]),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { leistungen, standorte, projekte };
