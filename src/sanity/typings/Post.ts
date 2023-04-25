import Author from './Author';
import Category from './Category';
import { Base, Block, Image, Slug } from './typings';

export default interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  publishedAt: string;
  isFeaturedPost: boolean;
}
