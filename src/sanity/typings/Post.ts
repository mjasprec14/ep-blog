import Author from './Author';
import Categories from './Category';
import { SanityBody, Image, Slug } from './typings';
import { PortableTextBlock } from 'sanity';

interface Children {
  text: string;
  _key: string;
  _type: 'span';
  marks: any[];
}

interface Body {
  _type: 'block';
  style: string;
  _key: string;
  markDefs: any[];
  children: Children[];
}

export default interface Post extends SanityBody {
  _type: 'post';
  title: string;
  body: PortableTextBlock;
  publishedAt: string;
  author: Author;
  categories: Categories;
  mainImage: Image;
  slug: Slug;
}
