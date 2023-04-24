import { SanityBody, Image, Slug, Bio } from './typings';

export interface Author extends SanityBody {
  _type: 'author';
  name: string;
  image: Image;
  slug: Slug;
  bio: Bio;
}
