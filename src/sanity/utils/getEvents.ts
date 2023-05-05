import { config } from '../sanity.utils';
import { createClient, groq } from 'next-sanity';

export default async function getEvents() {
  try {
    const sanityClient = createClient(config);

    return await sanityClient.fetch(groq`*[_type=='event']`);
  } catch (error: any) {
    throw new Error('Failed to fetch Events data: ', error);
  }
}
