import { Base } from './typings';

export default interface Social extends Base {
  _type: 'social';
  title: string;
  url: string;
}
