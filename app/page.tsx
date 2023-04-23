import { getPosts } from '@sanity-utils';
import { urlFor } from '@/src/sanity/sanity.utils';
import Image from 'next/image';

export default async function Home() {
  const posts = await getPosts();

  console.log(posts[0]);
  return (
    <main>
      <h1>{posts[0]?.title}</h1>
      <Image
        src={urlFor(posts[0]?.mainImage).url()}
        alt={``}
        height={400}
        width={400}
      />
    </main>
  );
}
