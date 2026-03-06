import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "3scsmtvn";
const dataset = "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(
  source:
    | { _ref?: string; asset?: { _ref?: string } }
    | null
    | undefined
): ReturnType<typeof builder.image> {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
