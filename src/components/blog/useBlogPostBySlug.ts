import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/client";
import { eventBySlugQuery } from "../../sanity/queries";
import type { Event } from "../../sanity/types";
import { mapEventToBlogEntry, type BlogEntry } from "./blogModel";

interface UseBlogPostBySlugResult {
  post: BlogEntry | null;
  loading: boolean;
  error: Error | null;
}

export function useBlogPostBySlug(slug: string | undefined): UseBlogPostBySlugResult {
  const [post, setPost] = useState<BlogEntry | null>(null);
  const [loading, setLoading] = useState(Boolean(slug));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    sanityClient
      .fetch<Event | null>(eventBySlugQuery, { slug })
      .then((event) => (event ? mapEventToBlogEntry(event) : null))
      .then(setPost)
      .catch((fetchError) => setError(fetchError))
      .finally(() => setLoading(false));
  }, [slug]);

  return { post, loading, error };
}
