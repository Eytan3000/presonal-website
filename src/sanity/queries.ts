export const publishedEventsQuery = `*[_type == "event"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  mainImage,
  publishedAt,
  author,
  "body": body,
  tags
}`;

export const eventBySlugQuery = `*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  mainImage,
  publishedAt,
  author,
  "body": body,
  tags
}`;
