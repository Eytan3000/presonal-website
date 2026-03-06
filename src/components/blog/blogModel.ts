import type { Event, PortableTextNode, SanityImage } from "../../sanity/types";

export interface BlogEntry {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: SanityImage;
  tags: string[];
  category: string;
  content?: PortableTextNode[];
}

export function mapEventToBlogEntry(event: Event): BlogEntry {
  const tags = event.tags ?? [];

  return {
    id: event._id,
    slug: event.slug,
    title: event.title,
    excerpt: event.subtitle ?? "",
    date: event.publishedAt ?? "",
    author: event.author ?? "",
    image: event.mainImage,
    tags,
    category: tags[0] ?? "Blog",
    content: event.body,
  };
}
