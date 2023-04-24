export interface SanityBody {
  _rev: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface Slug {
  current: string;
  _type: 'slug';
}

export interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface Children {
  _type: 'span';
  _key: string;
  text: string;
  marks: any[];
}

interface BioItem {
  markDefs: any[];
  children: Children[];
  _type: 'block';
  style: string;
  _key: string;
}

export type Bio = BioItem[];
