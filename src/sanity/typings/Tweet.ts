import { Base } from './typings';
import Author from './Author';

export interface Tweet extends Base {
  tweetMessage: string;
  author: Author;
  publishedAt: string;
}
