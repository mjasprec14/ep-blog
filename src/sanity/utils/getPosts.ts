import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getPosts() {
  try {
    const sanityClient = createClient(config);

    // *[_type=='post'] {
    //   ...,
    //   author->
    //   categories[]->
    // } | order(_createdAt desc)

    return await sanityClient.fetch(groq`*[_type=="post"]{
      ...,
      author->,
      categories[]->,
    } | order(_createdAt desc)`);
  } catch (error: any) {
    throw new Error('Failed to fetch Posts data:', error);
  }
}
