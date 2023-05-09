import { groq, createClient } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getTweets() {
  try {
    const sanityClient = createClient(config);

    return await sanityClient.fetch(groq`*[_type=='tweet']`);
  } catch (error: any) {
    throw new Error('Failed to fetch Tweets data: ', error);
  }
}
