import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/client";
import { publishedEventsQuery } from "../../sanity/queries";
import type { Event } from "../../sanity/types";
import { mapEventToBlogEntry, type BlogEntry } from "./blogModel";

interface UseBlogPostsResult {
  posts: BlogEntry[];
  loading: boolean;
  error: Error | null;
}

export function useBlogPosts(limit?: number): UseBlogPostsResult {
  const [posts, setPosts] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch<Event[]>(publishedEventsQuery)
      .then((events) =>
        events
          .filter((event) => !event.title.includes("[Draft]"))
          .map(mapEventToBlogEntry)
      )
      .then((entries) =>
        typeof limit === "number" ? entries.slice(0, limit) : entries
      )
      .then(setPosts)
      .catch((fetchError) => setError(fetchError))
      .finally(() => setLoading(false));
  }, [limit]);

  return { posts, loading, error };
}
