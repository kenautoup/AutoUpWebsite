import { sanityClient } from "./sanity";

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  publishedAt: string;
  readTime: string;
  ogImage?: string;
  body?: any[];
}

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "category": category->title,
      "categoryColor": category->colorClass,
      "author": author->name,
      publishedAt,
      readTime
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const results = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "category": category->title,
      "categoryColor": category->colorClass,
      "author": author->name,
      publishedAt,
      readTime,
      "ogImage": ogImage.asset->url,
      body
    }
  `,
    { slug }
  );
  return results;
}

export async function getAllSlugs(): Promise<string[]> {
  return sanityClient.fetch(`
    *[_type == "post"].slug.current
  `);
}

export async function getAdjacentPosts(publishedAt: string) {
  const [prev, next] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "post" && publishedAt < $date] | order(publishedAt desc) [0] {
        title, "slug": slug.current
      }`,
      { date: publishedAt }
    ),
    sanityClient.fetch(
      `*[_type == "post" && publishedAt > $date] | order(publishedAt asc) [0] {
        title, "slug": slug.current
      }`,
      { date: publishedAt }
    ),
  ]);
  return { prev, next };
}
