export interface SanityImage {
  _ref?: string;
  asset?: { _ref?: string };
  alt?: string;
  caption?: string;
}

export interface PortableTextSpan {
  _type: "span";
  _key: string;
  text: string;
  marks?: string[];
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: string;
  children?: PortableTextSpan[];
  markDefs?: { _key: string; _type: string; [key: string]: unknown }[];
  level?: number;
  listItem?: string;
}

export interface PortableTextImage {
  _type: "image";
  _key: string;
  asset?: SanityImage;
  alt?: string;
  caption?: string;
}

export interface PortableTextCodeBlock {
  _type: "codeBlock";
  _key: string;
  language?: string;
  code?: string;
}

export interface PortableTextBlockQuote {
  _type: "blockQuote";
  _key: string;
  quote?: string;
  attribution?: string;
}

export type PortableTextNode =
  | PortableTextBlock
  | PortableTextImage
  | PortableTextCodeBlock
  | PortableTextBlockQuote;

export interface Event {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  author?: string;
  body?: PortableTextNode[];
  tags?: string[];
}
