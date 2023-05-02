import Social from './Social';
import { Base, Image } from './typings';

export default interface PageInfo extends Base {
  _type: 'pageInfo';
  name: string;
  role: string;
  address: string;
  backgroundInformation: string;
  profilePic: Image;
  heroImage: Image;
  phoneNumber: string;
  email: string;
  socials: Social[];
}
