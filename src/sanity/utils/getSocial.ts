import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getSocials() {
  try {
    const sanityClient = createClient(config);

    return await sanityClient.fetch(groq`*[_type=="social"]`);
  } catch (error: any) {
    throw new Error('Failed to fetch Socials data: ', error);
  }
}
