export interface Base {
  _rev: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: string;
}

export interface Slug {
  current: string;
  _type: 'slug';
}

export interface Image {
  _type: 'image';
  asset: Reference;
}

export interface Reference {
  _ref: string;
  _type: 'reference';
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}
interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}
