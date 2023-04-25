import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getAuthors() {
  try {
    const sanityClient = createClient(config);

    return await sanityClient.fetch(groq`*[_type=="author"]`);
  } catch (error: any) {
    throw new Error('Failed to fetch Author data: ', error);
  }
}
