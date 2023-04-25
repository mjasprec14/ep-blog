import { Base, Image, Slug, Block } from './typings';

export default interface Author extends Base {
  bio: Block[];
  name: string;
  image: Image;
  slug: Slug;
}
