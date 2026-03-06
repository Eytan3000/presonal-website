import { PortableText } from "@portabletext/react";
import { urlFor } from "../../sanity/client";
import type { PortableTextNode } from "../../sanity/types";

interface BlogContentProps {
  value: PortableTextNode[] | null | undefined;
}

export default function BlogContent({ value }: BlogContentProps) {
  if (!value?.length) {
    return null;
  }

  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value: imageValue }) => {
            if (!imageValue?.asset) {
              return null;
            }

            return (
              <img
                src={urlFor(imageValue).width(900).url()}
                alt={imageValue.alt ?? ""}
                className="blog-post-image"
              />
            );
          },
        },
      }}
    />
  );
}
