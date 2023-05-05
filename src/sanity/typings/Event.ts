import { Base, Image, Slug } from './typings';

export default interface Event extends Base {
  eventName: string;
  eventOverview: string;
  eventDate: string;
  address: string;
  admission: string;
  slug: Slug;
  mainImage: Image;
}
