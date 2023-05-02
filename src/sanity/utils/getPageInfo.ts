import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getPageInfo() {
  try {
    const sanityClient = createClient(config);
    return await sanityClient.fetch(groq`*[_type=='pageInfo']`);
  } catch (error: any) {
    throw new Error('Failed to fetch Page Info data: ', error);
  }
}
